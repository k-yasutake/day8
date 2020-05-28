<template>
  <div class="container">
    <h1>{{message}}</h1>
    <post :items="items" />
  </div>
</template>

<script>
import client from "~/plugins/contentful.js"
import Post from "~/components/Post.vue"
export default {
  components: {
    Post
  },
  data() {
    return {
      message: "Contentful のテスト"
    }
  },
  async asyncData() {
    const { items } = await client.getEntries({
      content_type: process.env.CTF_CONTENT_TYPE
    })
    // console.log(items);
    return {
      items: items
    }
  }
}
</script>