<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
        v-for="item in 10"
        :key="item"
      >
        <el-card>
          <img
            class="image"
            src="https://camo.githubusercontent.com/60c67cf9ac2db30d478d21755289c423e1f985c6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f66726565636f646563616d702f776964652d736f6369616c2d62616e6e65722e706e67"
            alt=""
          />
          <div>
            <h1>freeCodeCamp</h1>
            <span>
              GITHUB:
              <i class="el-icon-star-on"></i>
              308K
            </span>
            <el-divider></el-divider>
            <p>
              freeCodeCamp.org is a friendly community where you can learn to
              code for free. It is run by a donor-supported 501(c)(3) nonprofit
              to help millions of busy adults transition into tech. Our
              community has already helped more than 10,000 people get their
              first developer job.
              <el-button type="text" class="button">详情</el-button>
            </p>
            <div>
              <el-button type="text" class="button">文档</el-button>
              <el-button type="text" class="button">中文文档</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.el-row {
  .el-col {
    margin-bottom: 10px;
  }
}
.image {
  width: 100%;
}
</style>
