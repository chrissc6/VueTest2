const appY = Vue.createApp({
    data: function() {
        return {
            product: 'Super Socks',
            description: 'World' + "'" + 's most comfortable socks!',
            starRating: '5',
            starCustomers: '3',
            selectedVariant: 0001,
            urlInfo: 'https://en.wikipedia.org/wiki/Sock',
            onSale: false,
            details: ['50% cotton', '10% luck', '20% skill', '15% concentrated power of will', '5% pleasure'],
            variants: [{
                    id: 0001,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 11,
                    currentSale: 0
                },
                {
                    id: 0002,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 2,
                    currentSale: 0
                }
            ],
            sizes: ['S', 'M', 'L'],
            cart: 0,
            brand: 'Chrissc6'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.variants[this.selectedVariant].quantity -= 1
            this.variants[this.selectedVariant].currentSale += 1
        },
        removeFromCart() {
            this.cart -= 1
            this.variants[this.selectedVariant].quantity += 1
            this.variants[this.selectedVariant].currentSale -= 1
        },
        updateSelectedVariant(variantId) {
            this.selectedVariant = variantId
        }
    },
    computed: {
        title() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale!'
            } else {
                return this.brand + ' ' + this.product
            }
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        lastItem() {
            if (this.variants[this.selectedVariant].quantity == 1) {
                return true
            } else {
                false
            }
        },
        currentItemSale() {
            return this.variants[this.selectedVariant].currentSale
        },
        lowInventoryLevel() {
            if (this.inventory <= 10 && this.inventory > 0) {
                return true
            } else {
                return false
            }
        },
        stockText() {
            if (this.inventory > 10) {
                return 'In Stock'
            } else if (this.inventory <= 10 && this.inventory > 0) {
                return 'Almost sold out!'
            } else {
                return 'Out of Stock'
            }
        }
    }
})