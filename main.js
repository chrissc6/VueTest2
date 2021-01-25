const appY = Vue.createApp({
    data: function() {
        return {
            product: 'Super Socks',
            description: 'Worlds most comfortable socks!',
            starRating: '5',
            starCustomers: '3',
            image: './assets/images/socks_blue.jpg',
            urlInfo: 'https://en.wikipedia.org/wiki/Sock',
            inventory: 11,
            sale: false,
            details: ['50% cotton', '10% luck', '20% skill', '15% concentrated power of will', '5% pleasure'],
            variants: [{
                    id: 0001,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg'
                },
                {
                    id: 0002,
                    color: 'green',
                    image: './assets/images/socks_green.jpg'
                }
            ],
            sizes: ['S', 'M', 'L'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})