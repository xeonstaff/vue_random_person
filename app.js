const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Bagoo',
            email: 'j.bigagoo@gmail.net',
            gender: 'male',
            picture: 'https://i.pinimg.com/originals/c4/96/9a/c4969aaedbc096c09b35e31abd11e2ec.png'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')

// createapp({
//     data() {
//         return {
//             message: 'Hello Vue!'
//         }
//     }
// }).mount('#app')
