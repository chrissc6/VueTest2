const appY = Vue.createApp({
    data: function() {
        return {
            product: 'Super Socks',
            description: 'Worlds most comfortable socks!',
            starRating: '5',
            starCustomers: '3',
            image: './assets/images/socks_blue.jpg',
            urlInfo: 'https://en.wikipedia.org/wiki/Sock'
        }
    }
})