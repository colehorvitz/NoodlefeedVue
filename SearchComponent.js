export default {
    props: {'tweets' : Object},
    methods: {
        onChange() {
            let searchString = document.getElementById("searchBar").value;
            this.$emit('search', searchString);
        },

    },
    template: 
    `
    <input class="search-bar" id="searchBar"  title="search" type="search" placeholder="Search in tweets" @input="onChange">
    `
}