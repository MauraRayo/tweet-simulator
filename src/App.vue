<template>


<Menu :openCloseForm="openCloseForm" :showForm="showForm" />
<TweetForm  :showForm="showForm" :openCloseForm="openCloseForm"/>

</template>


<script>
import  Menu from "./components/Menu"
import TweetForm from "./components/TweetForm.vue"
import useFormTweet from "./hooks/useFormTweet"

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm
  },

  setup() {
    return {
      ...useFormTweet(),

    };
  }

};
</script>


<style lang="scss">
</style>
