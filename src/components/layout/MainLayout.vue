<template>
    <div class="main-layout">
<div class="main-layout__nav">
    <side-bar />
</div>
<div class="main-layout__content">
    <slot />
</div>
    </div>
</template>
<script>
import SideBar from '../navigation/SideBar';

    export default {
name: 'MainLayout',
components: {
SideBar,
},
    };
</script>
<style lang="scss">
.main-layout {
display: flex;
justify-content: stretch;
align-items: stretch;
flex: 1;
&__nav {
    width: 100%;
    max-width: 300px;
    border-right: 1px solid black;
    padding: 32px 24px;
    flex: 1;
}
&__content {
    padding: 32px 24px;
    flex: 1;
    display: flex;
    & > * {
        flex: 1;
    }
}
}
</style>