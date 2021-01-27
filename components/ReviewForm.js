appY.component('review-form', {
    template:
    /*html*/
        `
        <!--  modifier (.prevent) prevents the default browser refresh -->
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="user">Name:</label>
            <input id="user" v-model="name">

            <label for="view">Review:</label>      
            <textarea id="view" v-model="review"></textarea>

            <label for="rate">Rating:</label>
            <!--  modifier (.number) typecasts the value as a number -->
            <select id="rate" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for="rec">Would you recommend this product?</label>
            <select id="rec" v-model="recommended">
                <option>Yes</option>
                <option>No</option>
            </select>

            <input class="button" type="submit" value="Submit">  
        </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommended === null) {
                alert('Review is incomplete. Please fill out all fields.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }
            this.$emit('review-submitted', productReview)

            this.name = '',
                this.review = '',
                this.rating = null,
                this.recommended = null
        }
    }
})