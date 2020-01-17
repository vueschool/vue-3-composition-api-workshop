<template>
  <div>
    <h1 class="title">Video Example</h1>

    <p class="instructions">
      Tap that space bar and be filled with puppiness
    </p>

    <video ref="video" loop muted playsinline src="/puppiness.mp4" width="600"></video>

    <p class="mt-4">
      Video from Coverr.co
    </p>

  </div>
</template>

<script>
  import useGlobalEvent from "../use/useGlobalEvent";

  export default {
    setup(props, context){
      useGlobalEvent('keydown', e => {
        if (e.code === 'Space') {
          e.preventDefault()
          const video = context.refs.video
          video.paused ? video.play() : video.pause()
        }
      })
    }
  }
</script>
