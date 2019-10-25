<template>
  <main class="main container">
    <section style="height: 300px;">
      <RichEditor />
    </section>
    <div style="margin-top: 20px">
      <el-row>
        <el-col :span="6">
          <el-card class="image-card" :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time
                  class="time"
                  style="font-size: 12px;"
                >{{ date | DateFormat('YYYY-MM-DD HH:mm:ss') }}</time>
                <div>
                  <i class="el-icon-view"></i>
                  <span style="font-size: 12px;">253已购买</span>
                </div>
                <el-button type="text" class="button">去购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
        </el-col>
      </el-row>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button plain size="medium">朴素按钮</el-button>
        <el-button type="primary" plain size="medium">主要按钮</el-button>
        <el-button type="success" plain size="medium">成功按钮</el-button>
        <el-button type="info" plain size="medium">信息按钮</el-button>
        <el-button type="warning" plain size="medium">警告按钮</el-button>
        <el-button type="danger" plain size="medium">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button round size="mini">圆角按钮</el-button>
        <el-button type="primary" round size="mini">主要按钮</el-button>
        <el-button type="success" round size="mini">成功按钮</el-button>
        <el-button type="info" round size="mini">信息按钮</el-button>
        <el-button type="warning" round size="mini">警告按钮</el-button>
        <el-button type="danger" round size="mini">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle size="small"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
        <el-button type="success" icon="el-icon-check" circle size="small"></el-button>
        <el-button type="info" icon="el-icon-message" circle size="small"></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
      </el-row>

      <el-row>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </el-row>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    open1() {
      this.$message('这是一条消息提示');
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },

    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    open4() {
      this.$message.error('错了哦，这是一条错误消息');
    }
  }
};
</script>

<style lang="scss">
.container {
  .banner {
    height: 300px;
    background: orangered;
  }
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

.el-row {
  margin-top: 10px;
}
.image-card {
  .image {
    width: 100%;
  }
}
</style>
