<demo>
指示器显示
</demo>
<template>
  <Carousel arrow>
    <CarouselItem name="1" :style="{ backgroundColor: 'rgb(102,199,150)' }">
      <h3>1</h3>
    </CarouselItem>
    <CarouselItem name="2" :style="{ backgroundColor: 'rgb(88,148,183)' }">
      <h3>2</h3>
    </CarouselItem>
    <CarouselItem name="3" :style="{ backgroundColor: 'rgb(86,173,173)' }">
      <h3>3</h3>
    </CarouselItem>
    <CarouselItem name="4" :style="{ backgroundColor: 'rgb(165,193,135)' }">
      <h3>4</h3>
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
}
</style>
