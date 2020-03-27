<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {

        }
    }
}
</script>

<style>
/* scoped made this style rules only apply to this component, if without scoped it will apply to everywhere in this app, we can also just use class to control it */
nav{
    text-align: center;
}

nav ul{
    padding: 0;
}

nav li{
    display: inline-block;
    list-style-type: none;
    margin: 0;
}
</style>