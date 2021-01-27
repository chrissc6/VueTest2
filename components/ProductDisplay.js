//component name (product-display)
appY.component('product-display', {
    props: {
        premium: {
            //prop validation
            type: Boolean,
            required: true
        }
    },

    template:
    //this activates (es6-string-html) extension syntax highlighting
    /*html*/
        `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <!-- v-bind directive -->
            <!-- Dynamically bind an attribute (src) to an expression (image) -->
            <!-- (v-bind:src) can be shorten to (:src) -->
            <img :class="[inStock ? '' : 'out-of-stock-img']" v-bind:src="image" alt="">
        </div>
        <div class="product-info">
            <!-- same as JS Expression ({{ brand + ' ' + product }}) -->
            <!-- Computed property -->
            <h1 :class="{itemSale: onSale}">{{ title }}</h1>
            <p v-if="starCustomers > 1">{{ product }} has a {{ starRating }} star rating from {{ starCustomers }} customers.
            </p>
            <p v-else>{{ product }} has a {{ starRating }} star rating from {{ starCustomers }} at least one customer.
            </p>
            <p>{{ description }}</p>
            <a :href="urlInfo">More Info</a>
            <p :class="[inventory <= 10 && inventory > 0 ? 'lowInventory' : '']">{{ stockText }}</p>
            <p>Shipping: {{ shipping }}</p>
            <p v-show="onSale">On SALE!</p>
            <!-- added class binding to span-->
            <!-- you can add ternary operator like this (:class="[inStock ? '' : 'out-of-stock-img']")-->
            <p>Inventory:
                <span v-if="lastItem" class="blink lowInventory">{{ inventory }}</span>
                <span v-else-if="lowInventoryLevel" class="lowInventory">{{ inventory }}</span>
                <span v-else>{{ inventory }}</span>
            </p>
            <label>Material:</label>
            <product-details :details="details"></product-details>
            <label>Sizes:</label>
            <ul>
                <li v-for="s in sizes">{{ s }}</li>
            </ul>
            <!-- key attribute gives each DOM element a unique key-->
            <!-- mouseover is OnHover-->
            <label>Color:</label>
            <div v-for="(v, id) in variants" :key="v.id" @mouseover="updateSelectedVariant(id)" class="color-circle" :style="{ backgroundColor: v.color }"></div>
            <!-- v-on directive (:click) event were listening for -->
            <!-- (v-on:) shorthand (@) -->
            <button class="button" v-on:click='addToCart' :disabled="!inStock" :class="{ disabledButton: !inStock} ">Add to Cart</button>
            <button class="button" v-on:click='removeFromCart' :disabled="currentItemSale <= 0" :class="{ disabledButton: currentItemSale <= 0} ">Remove from
                Cart</button>
        </div>
    </div>
</div>`,

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
            //cart: 0,
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return '2.99'
        }
    }
})