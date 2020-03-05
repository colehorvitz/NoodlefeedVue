export default{
    props:{'tweets' : Object},
    methods: {
        addTweet(event){
            let rightNow = new Date();
            let tweet = {
                text: document.getElementById('text').value,
                user: {
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v.png',
                    name: 'Me',
                },
                id: Math.random(0,1000000),
                created_at: rightNow,
                myTweet: true,
            }
            this.$emit('clicked', tweet);
        }
    },
    template:
    `
    <div>
        <textarea placeholder="Submit new tweet" id="text" aria-label="Submit tweet"></textarea>
        <br>
        <input type='submit'  @click='addTweet' value="Submit"/>
    </div>
    `
}