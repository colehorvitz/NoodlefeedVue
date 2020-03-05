
import TicTacToe from './tic-tac-toe/TicTacToe.js';
import MadLibIndex from './madlibs/js/MadLibIndex.js';
import NoodleFeed from './NoodleFeed.js'

const routes = [
    { path: '/', component: NoodleFeed},
    { path: '/tic-tac-toe', component: TicTacToe },
    { path: '/madlibs', component: MadLibIndex }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router,
    el: "#app",
    components: {
        'tic-tac-toe' : TicTacToe,
        'noodle-feed' : NoodleFeed,
        'madlibs' : MadLibIndex
    },
    template:
    `
    <div>
    <div class="nav-links">
        <router-link to="/">Noodlefeed</router-link>
        <router-link to="/tic-tac-toe">Tic-Tac-Toe</router-link>
        <router-link to="/madlibs">Madlibs</router-link>
    </div>
    <router-view></router-view>
    </div>
`
})
