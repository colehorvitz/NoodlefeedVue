import { madlibs } from './resources/resources.js';
import GameComponent from './components/GameComponent.js';

/**
 * Madlib master class
 */
export default({
    el: '#app',
    data: {
        madlib: null,
        appClasses: ['p-4', 'd-flex', 'h-100', 'flex-column', 'align-items-center']
    },
    components: {
        'game-component': GameComponent,
    },
    created () {
        this.useRandomMadlib();        
    },
    methods: {
        getRandomMadlibIndex() {
            return Math.floor(Math.random() * madlibs.length);
        },

        getRandomMadlib() {
            return madlibs[this.getRandomMadlibIndex()];
        },

        useRandomMadlib() {
            this.madlib = this.getRandomMadlib();
            console.log(this.madlib);
        }
    },
    template:
    `
    <div>
        <h2>Madlib Game</h2>
        <button @click="useRandomMadlib" class="btn btn-primary">Reset</button>
        <game-component :madlib="madlib"></game-component>
    </div>
    `
})