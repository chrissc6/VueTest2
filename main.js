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
            inStock: true,
            lowInventoryLevel: false,
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
            cart: 0,
        }
    },
    methods: {
        updateInventory() {
            if (this.inventory == 0) {
                this.inStock = false
            } else {
                this.inStock = true
            }
            this.lowInventoryLevel = this.lowInventoryCheck()
        },
        lowInventoryCheck() {
            if (this.inventory <= 10 && this.inventory > 0) {
                return true
            } else {
                return false
            }
        },
        addToCart() {
            this.cart += 1
            this.inventory -= 1
            this.updateInventory()
        },
        removeFromCart() {
            this.cart -= 1
            this.inventory += 1
            this.updateInventory()
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})