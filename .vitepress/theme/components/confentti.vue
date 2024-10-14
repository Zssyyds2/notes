<script setup lang="ts">
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress';
import { onBeforeUnmount, onUnmounted } from 'vue';

if (inBrowser) {
var duration = 12 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(10, 50 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    className: 'confetti-particle',
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#bbcdfe','#5276ea'], // 保持指定的颜色
    shapes: ['star'], // 保持星星形状
    gravity: randomInRange(0.4, 0.6), // 增加重力效果，使星星看起来像雨滴
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
  
}());

}
</script>
<template></template>
<style scoped>
.confetti-particle {
  opacity: 0.7; /* 设置透明度 */
}

</style>