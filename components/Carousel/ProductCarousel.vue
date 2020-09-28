<template>
  <div class="carousel">
    <a-carousel arrows dots-class="slick-dots slick-thumb">
      <div slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)">
      </div>
      <div v-for="(image, index) in images" :key="'image'+index">
        <img :src="image">
      </div>
    </a-carousel>
  </div>
</template>
<script>

export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImgUrl (i) {
      return this.images[i]
    }
  }
}
</script>
<style scoped>
.carousel{
  min-height: 17rem;
}
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

</style>
