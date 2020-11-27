<template>
  <div>
    <!-- header -->
    <div class='app-header'>
      <div>
        <h2>Tempo</h2>

        <button v-on:click="playSound"></button>
      </div>
    </div>

    <!-- main -->

  </div>
</template>

<script>
var { Howl, Howler} = require('howler');

export default {
  data: function () {
      return {
          sound: null
      }
  },

  mounted: function() {
    console.log('mounted');
    
    this.sound = new Howl({
      src: ['sounds/drum.mp3'],
      html5: true, // A live stream can only be played through HTML5 Audio.
      format: ['mp3']
    });

    this.sound.play()
  },
  methods: {
    playSound: function() {
      this.sound.play();
    }
  }
}
</script>

<style>
  body {
    font-family: 'Lato', sans-serif;
    background-color: #82abd1;
  }

  .app-header {
    color: #3b3b3b;
    display: flex;
    justify-content: center;
  }


</style>