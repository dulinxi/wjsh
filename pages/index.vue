<template>
  <main class="main container">
    <!-- <section style="height: 300px;background: #eee;">
      <el-row>
        <el-col :span="8">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <div></div>
    </section> -->
    <div class="article-list">
      <div class="article-item">
        <img
          class="article-image"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        />
        <div class="article-content">
          <el-link class="article-title" :underline="false">
            知识决定命运, 知识改变命运
          </el-link>
          <div class="article-content__description">
            少年智则国智，少年富则国富， 少年强则国强，少年独立则国独立，
            少年自由则国自由，少年进步则国进步，
            少年胜于欧洲则国胜于欧洲，少年雄于地球则国雄于地球。
          </div>
          <div class="article-content__bottom-bar">
            <span class="author">
              <i class="el-icon-user-solid"></i>
              周媛媛
            </span>
            <span class="publish-time">
              <i class="el-icon-alarm-clock"></i>
              一周以前
            </span>
          </div>
        </div>
      </div>
    </div>
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
                <time class="time" style="font-size: 12px;">
                  {{ date | DateFormat('YYYY-MM-DD HH:mm:ss') }}
                </time>
                <div>
                  <el-popover
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                  >
                    <el-button type="text" slot="reference">
                      <i class="el-icon-view"></i>
                      253已购买
                    </el-button>
                  </el-popover>
                </div>
                <el-button
                  type="text"
                  class="button"
                  @click="dialogVisible = true"
                >
                  访问官方文档
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="2">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
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
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle
          size="small"
        ></el-button>
        <el-button
          type="success"
          icon="el-icon-check"
          circle
          size="small"
        ></el-button>
        <el-button
          type="info"
          icon="el-icon-message"
          circle
          size="small"
        ></el-button>
        <el-button
          type="warning"
          icon="el-icon-star-off"
          circle
          size="small"
        ></el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="small"
        ></el-button>
      </el-row>

      <el-row>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </el-row>

      <el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          ></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-row>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>是否要前往该站点?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="text" @click="dialogVisible = false">
            取 消
          </el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      date: new Date(),
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
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

.article-item {
  width: 600px;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1), 0 -3px 4px -2px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    cursor: default;
  }
  .article-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .article-content {
    flex: 1;
    .article-title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    &__description {
      color: #999;
      font-size: 14px;
      max-height: 40px;
      line-height: 20px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    &__bottom-bar {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      .author {
        color: #666;
      }
      .publish-time {
        color: #666;
      }
    }
  }
}
</style>
