new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue',
        name: 'Leyla'
    },
    methods: {
        greet(){
            return `Go ${this.name}!`;
        }
    }
})