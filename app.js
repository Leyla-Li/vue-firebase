new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue',
        name: 'Leyla'
    },
    methods: {
        greet(time){
            return `Hello ${this.name} and Good ${time}!`;
        }
    }
})