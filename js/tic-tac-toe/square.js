export default{
    props: ['player', 'x', 'y', 'won'],
    data() {
        return {
            frozen:false,
            currplayer: '',
            isTicked: false,
        }
    },
    methods:{
        click(){
            if (!this.frozen && !this.won){
                this.isTicked = true;
                this.currplayer = this.player;
                this.frozen = true,
                this.$emit('move',[this.x, this.y]);
            }
        }
    },
    template:
    `
    <div class="square" @click="click">
        <div>
            <p>{{ currplayer }}</p>
        </div>
    </div>
    `
}