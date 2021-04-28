<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <button v-bind:title="message" v-bind:on-press="handleBtnPress"/>
  </view>
</template>

<script>
import nodejs from 'nodejs-mobile-react-native';

export default {
  data: function() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    handleBtnPress: function() {
      nodejs.channel.send('A message!');
      alert('Btn Press');
    }
  },
  mounted() {
    nodejs.start("main.js");
    nodejs.channel.addListener(
      "message",
      (msg) => {
        alert("From node: " + msg);
      },
      this
    );
  },
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
