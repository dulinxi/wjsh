<template>
  <main class="main container">
    <section style="height: 300px;">
      <RichEditor />
    </section>
    <div class="center">
      <h1 class="title">万家生活</h1>
      <h2 class="subtitle">这才是你要的生活</h2>
      <p>wjsh.com即将来临，敬请期待</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.container {
  margin-top: 10px;
  .banner {
    height: 300px;
    background: orangered;
  }
}
.main {
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @media screen and (max-width: 680px) {
    font-size: 60px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
