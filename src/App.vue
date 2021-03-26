<template>
  <div id="app">
    <div class="background" id="p5Canvas"></div>
    <div class="container border">
      <div class="message d-flex justify-content-center">{{message}}</div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  var radar = require('@/js/sketch.js')
}

export default {
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    const P5 = require('p5')
    new P5(radar.main)
    radar.setDelegate(this.callbackOnP5);
  },
  methods: {
    callbackOnP5: function(timeStr) {
      this.message = timeStr;
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  background: black;
}

.background {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

</style>
