import TweetComponent from './TweetComponent.js';
import SubmitComponent from './SubmitComponent.js';
import SearchComponent from '../SearchComponent.js';

export default({
    data () {
        return{
            url:'http://ec2-54-172-96-100.compute-1.amazonaws.com/feed/random?q=noodle',
            tweets: [],
            searchString: '',
            allTweets: [],
            displayList: [],
            tweetIDs:[],
        }
    },
    methods:{
        getData(){
            fetch(this.url)
                .then(res => res.json())
                .then(data => {
                    data.statuses.forEach(this.addTweets);
                })
                .catch(err => {
                    console.log('ERROR:' + err);
                });
        },
        addTweets(t) {
            if (!this.tweetIDs.includes(t.id)){
                this.tweetIDs.push(t.id);
                this.allTweets.push(t);
                this.displayTweets();
            }
        },
        updateSearch(s){
            this.searchString = s;
            this.displayTweets();
        },
        onScroll(){
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.getData();
            }
        },
        dateComparator(status1, status2){
            return (new Date(status2.created_at) - new Date(status1.created_at));
        },
        checkSearch(status){
            if(status.text.toLowerCase().includes(this.searchString) || this.searchString == ''){
                return true;
            }
            return false;
        },
        displayTweets(){
            this.displayList = this.allTweets.sort(this.dateComparator);
            this.tweets= this.displayList.filter(this.checkSearch);
        },
    },
    created(){
        window.addEventListener('scroll', this.onScroll);
        this.getData();
    },
    components: {
        'search-component' : SearchComponent,
        'tweet-component' : TweetComponent,
        'submit-component' : SubmitComponent,
    },
    template: 
    `
    <div>
            <search-component @search="updateSearch"></search-component>
            <submit-component v-model="tweets" :tweets="tweets" @clicked="addTweets"></submit-component>
            <div id="feed">
            <div v-for="tweet in tweets" :key="tweet.id">
                <tweet-component :mytweet="tweet.my-tweet" :text="tweet.text" :profile-image="tweet.user.profile_image_url_https" :name="tweet.user.name" :date="tweet.created_at" ></tweet-component>
            </div>
        </div>  
    </div>
    `
});
