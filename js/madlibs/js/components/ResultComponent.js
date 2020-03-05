export default {
    props: {
        inputs: Array,
        madlibContent: String,
    },
    data() {
        return {
            classes: ['d-flex', 'bg-white', 'col', 'p-4'],
            styles: {
                'font-size': 'larger',
                'line-height': 2,
            }
        };
    },
    computed: {
        replaceItems() {
            let ips = this.inputs;
            let i = 0;
            let r = this.madlibContent.replace(/\[([^\])]*)\]/g,function (mat,p1,off,str) {
                let ipt = ips[i++];
                return ipt ? ipt : mat;
             });
            return r;
         }
    },
    template:
        `
        <div class="fiftypercent">
            <p v-html="replaceItems"></p>
        </div>
        `,
}