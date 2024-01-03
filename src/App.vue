<template>

<Menu/>
<TweetForm/>

</template>


<script>
import  Menu from "./components/Menu"
import TweetForm from "./components/TweetForm.vue"

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm
  }

}
</script>


<style lang="scss">
</style>
