<template>
  <div class="app">
    <vant-doc :simulators="simulators" :current-simulator="currentSimulator" :config="config" :base="base">
      <router-view @changeDemoURL="onChangeDemoURL"></router-view>
    </vant-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}`;
    },

    config() {
      return docConfig[this.$vantLang];
    },

    currentSimulator() {
      return 0;
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="postcss">
.van-doc-intro {
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;

  &__youzan {
    width: 32px;
    height: 32px;
    display: block;
    margin: 25px 0 0;
  }

  &__logo {
    width: 120px;
    height: 120px;
  }
}
</style>
