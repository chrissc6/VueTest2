const appY = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        cartAdd(id) {
            this.cart.push(id)
        },
        cartRemove(id) {
            const i = this.cart.indexOf(id)
            if (i > -1) {
                this.cart.splice(i, 1)
            }
        },
    },
    computed: {

    }
})