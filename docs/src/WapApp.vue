<template>
  <div>
    <van-nav-bar
      v-show="title"
      class="van-doc-nav-bar"
      :title="title"
      left-arrow
      @click="onBack"
    />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
}
</script>

<style lang="postcss">
body {
  color: #333;
  line-height: 1;
  background-color: #f8f8f8;
  font-family: Arial, Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma, sans-serif;
  /* 用来控制字体渲染时的平滑效果。 */
  /* 这个属性仅在 Mac OS X/macOS 下生效。 */
  -webkit-font-smoothing: antialiased;
}

.van-doc-nav-bar {
  .van-nav-bar__title {
    font-size: 15px;
    /* 指定如何将元素的文本大写。 */
    /* 它可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作。 */
    text-transform: capitalize;
  }
}

.van-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>
