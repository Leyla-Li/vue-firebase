new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue'
    },
    methods: {
        greet(name){
            return `Hello ${name}!`;
        }
    }
})