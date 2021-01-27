appY.component('review-list', {
    props: {
        userReviews: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
        `
        <div class="review-container">
            <h4>Reviews:</h4>
            <ul>
                <li v-for="(r, id) in userReviews" :key="id">
                {{ r.name }} gave this {{ r.rating }} stars.
                <br/>
                Product Recommended? {{ r.recommended }}
                <br/>
                "{{ r.review }}"
                </li>
            </ul>
        </div>
        `
})