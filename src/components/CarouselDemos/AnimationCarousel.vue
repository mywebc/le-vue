<demo>
可关闭动画
</demo>
<template>
  <Carousel selected="1" :animationEnabled="false">
    <CarouselItem name="1">
      <div :style="{ backgroundColor: 'rgb(102,199,150)' }">1</div>
    </CarouselItem>
    <CarouselItem name="2">
      <div :style="{ backgroundColor: 'rgb(88,148,183)' }">2</div>
    </CarouselItem>
    <CarouselItem name="3">
      <div :style="{ backgroundColor: 'rgb(86,173,173)' }">3</div>
    </CarouselItem>
    <CarouselItem name="4">
      <div :style="{ backgroundColor: 'rgb(165,193,135)' }">4</div>
    </CarouselItem>
  </Carousel>
</template>

<script lang="ts">
import Carousel from "../../lib/Carousel/Carousel.vue";
import CarouselItem from "../../lib/Carousel/CarouselItem.vue";
export default {
  components: { Carousel, CarouselItem },
};
</script>

<style lang="scss" scoped>
.le-carousel {
  color: #fff;
  .le-carousel-item {
    & > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
