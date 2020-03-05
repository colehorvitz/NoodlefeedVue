export default {
    props: {
        'sid': Number,
        'substitutionLabelName': String,
    },
    data() {
        return {
            classes: ['form-group', 'd-flex', 'flex-col'],
            labelClasses: ['text-black', 'col-3'],
            inputClasses: ['madlibinput'],
            input: '',
        };
    },
    computed: {
        substitutionID() {
            return `input-${this.sid}`;
        },
    },
    watch: {
        input(val) {
            this.$emit('on-input', this.sid, val);
        },
    },
    focusInput() {
        this.$refs.word.$el.focus();
    },
    template: `
        <div :class="classes">
            <label :class="labelClasses" :for="sid">{{substitutionLabelName}}
            <input :style="inputClasses" type="text" class="form-control" :id="sid" style="width:224px;"v-model="input" ref="word">
            </label>
        </div>
    `
}