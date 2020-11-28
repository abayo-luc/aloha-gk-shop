<template>
  <a-carousel autoplay>
    <div v-for="(carousel, index) in carousels" :key="carousel.key" class="owl-slide cover" :style="{backgroundImage: `url(${carousel.image})`, backgroundSize:'container'}">
      <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
          <div
            class="row justify-content-center"
            :class="{
              'justify-content-md-start': index % 2 === 1,
              'justify-content-md-end': index % 2 === 0,
              'justify-content-md-center': index !== 0 && index % 3 === 0,
            }"
          >
            <div class="col-lg-6 static">
              <div
                class="slide-text white"
                :class="{
                  'text-left': index % 2 === 1,
                  'text-right': index % 2 === 0,
                  'text-center': index !== 0 && index % 3 === 0
                }"
              >
                <h2 class="owl-slide-animated owl-slide-title">
                  {{ carousel.title }}<br>{{ carousel.meta }}
                </h2>
                <p class="owl-slide-animated owl-slide-subtitle">
                  {{ carousel.description }}
                </p>
                <div class="owl-slide-animated owl-slide-cta">
                  <a-button type="primary" size="large">
                    Shop Now
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  data () {
    return ({
      carousels: [
        {
          image: 'https://res.cloudinary.com/dvkcmubck/image/upload/v1606558052/aloha-gk/table_kvblhk.png',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-1'
        },
        {
          image: 'https://res.cloudinary.com/dvkcmubck/image/upload/v1606557964/aloha-gk/bottle_npbh5i.png',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-2'
        },
        {
          image: 'https://res.cloudinary.com/dvkcmubck/image/upload/v1606557721/aloha-gk/t-shirt_tuae53.png',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-3'
        },
        {
          image: 'https://res.cloudinary.com/dvkcmubck/image/upload/v1606558463/aloha-gk/cup_tz1fps.png',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-4'
        },
        {
          image: 'https://res.cloudinary.com/dvkcmubck/image/upload/v1606558204/aloha-gk/notebook_ycsqyt.png',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-5'
        }
      ]
    })
  },
  computed: {
    itemeClasses (index) {
      return {
        'justify-content-md-end': index / 2 === 1,
        'justify-content-md-start': index % 2 === 0,
        'justify-content-md-center': index / 2 !== 0
      }
    }
  }
}
</script>

<style scoped>
.owl-slide {
  height: 450px;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain  !important;
}

.opacity-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color:rgba(200, 47, 98, 0.17);
}

.ant-carousel .slick-dots li.slick-active button {
    width: 24px;
    background: #c82f63;
    opacity: 1;
}
</style>
