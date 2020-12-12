<template>
<ul class="side-bar">
    <li class="side-bar__item" v-for="route in routes" :key="route.name">
        <router-link active-class="_active" exact class="side-bar__item-link" :to="route.path">{{route.name}}</router-link>
    </li>
</ul>
</template>
<script>
    export default {
name: 'SideBar',
data() {
    return {
routes: [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Cocktails',
        path: '/cocktails',
    },
],
    };
},
    }
</script>
<style lang="scss">
.side-bar {
    &__item:not(:last-child) {
        margin-bottom: 8px;
    }
&__item-link {
display: flex;
width: 100%;
border-radius: 8px;
background-color: transparent;
text-decoration: none;
padding: 8px 24px;
color: black;
transition: .2s ease;
transition-property: color, background-color, border-color;
border: 1px solid transparent;
&:hover {
    border-color: rgb(240, 154, 41);
}
&._active {
    background-color: rgb(240, 154, 41);
}
}
}
</style>