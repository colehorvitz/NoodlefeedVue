import board from './board.js';
import square from './square.js';

export default{
    data: {
        turn: 0,
    },
    components:{
        'board' : board,
        'square' : square,
    },
    template:
    `
    <div>
        <div class="game">
            <board>
            </board>
        </div>
    </div>
    `
}