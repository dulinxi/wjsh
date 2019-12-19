<template>
  <header class="app-header">
    <div class="container">
      <nuxt-link class="brand" to="/">
        <logo class="site-logo" /><span>知识库</span>
      </nuxt-link>
      <nav>
        <ul class="navigation" role="navigation">
          <li>
            <nuxt-link class="link" to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/life">生活</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/study">学习</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/vision">眼界</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/time-machine">时光机</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/tools">常用工具</nuxt-link>
          </li>
          <li>
            <el-input
              placeholder="搜索"
              suffix-icon="el-icon-search"
              v-model="keywords"
              @keyup.native.enter="search"
            >
            </el-input>
          </li>
        </ul>
      </nav>
      <div>登录/注册</div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      keywords: ''
    };
  },
  methods: {
    search() {
      console.log(this.keywords);
    }
  }
};
</script>
<style lang="scss">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: flex;
  border-bottom: #f0f0f0 solid 1px;
  background: #fff;
  margin-bottom: 10px;
  z-index: 100;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 18px;
  }
  .site-logo {
    width: 50px;
    height: 50px;
  }
  .container {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    .link {
      padding: 10px 20px;
      text-decoration: none;
      color: #333;
    }
  }
}
</style>
