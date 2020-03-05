import square from './square.js';
let turn = 0;
export default{
    data() {
        return{
            squares: [[null, null, null], [null, null, null], [null, null, null]],
            player:'x',
            won: false,
            winner: '',
        }
    },
    components:{
        'square' : square,
    },
    methods:{
        incrementTurn(arr) {
            this.squares[arr[1]][arr[0]] = this.player;
            if (this.checkWin()){
                this.winner = this.player;
                this.won = true;
            }
            else{
                this.player=='x' ? this.player = 'o' : this.player='x';
            }
        },
        checkWin(){
            //row 1
            if (this.squares[0][0] === this.squares[0][1] && this.squares[0][0] === this.squares[0][2] && this.squares[0][0] !== null){
                return true;
            }

            //row 2
            if (this.squares[1][0] === this.squares[1][1] && this.squares[1][0] === this.squares[1][2] && this.squares[1][0] !== null){
                return true;
            }
            
            //row 3
            if (this.squares[2][0] === this.squares[2][1] && this.squares[2][0] === this.squares[2][2] && this.squares[2][0] !== null){
                return true;
            }

            //col 1
            if (this.squares[0][0] === this.squares[1][0] && this.squares[0][0] === this.squares[2][0] && this.squares[1][0] !== null){
                return true;
            }
            
            //col 2
            if (this.squares[0][1] === this.squares[1][1] && this.squares[0][1] === this.squares[2][1] && this.squares[0][1] !== null){
                return true;
            }

            //col 3
            if (this.squares[0][2] === this.squares[1][2] && this.squares[0][2] === this.squares[2][2] && this.squares[0][2] !== null){
                return true;
            }

            //diag 1
            if (this.squares[0][0] === this.squares[1][1] && this.squares[0][0] === this.squares[2][2] && this.squares[0][0] !== null){
                return true;
            }

            //diag 2
            if (this.squares[0][2] === this.squares[1][1] && this.squares[0][2] === this.squares[2][0] && this.squares[0][2] !== null){
                return true;
            }
            return false;
        }
    },
    template:
    `
    <div>
        <h2 v-if="this.won">Won by {{winner}}</h2>
        <div v-for="r of 3" class="board-row">
            <square v-for="c of 3" @move="incrementTurn" :player="player" :x="c-1" :y="r-1" :won="won"></square>
        </div>
    </div>
    `
}