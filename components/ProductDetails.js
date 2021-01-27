appY.component('product-details', {
    props: {
        details: {
            //prop validation
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
        `
        <ul>
            <li v-for="d in details">{{ d }}</li>
        </ul>
        `
})