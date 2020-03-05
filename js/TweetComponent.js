export default{
    props:{
        profileImage: String,
        text: String,
        name: String,
        date: String,
    },
    methods: {
        convertDate(d){
            let date = new Date(d);
            let minutes = date.getMinutes();
            let year = date.getFullYear().toString().substring(2,4);
            let month = date.getMonth() + 1;
            if (minutes.toString().length == 1) {
                minutes = '0'+minutes;
            }
            return + date.getHours() + ':' + minutes + ', ' + month + '/' + date.getDate() + '/' + year; 
        },
        error(e) {
            e.target.onerror=null;
            e.target.src='img/no_photo.png';
        },
    },  
    template: `
        <div :class="[this.name == 'Me' ? 'my-tweet' : '', 'tweet-box']">
            <img :src="profileImage" @error="error" alt="profile" />
            <div class="text-content">
                <p>{{text}}</p>
                <div class="metadata">
                    <p>by {{name}} at {{convertDate(date)}}</p>
                </div>
            </div>
        </div>
    `
}