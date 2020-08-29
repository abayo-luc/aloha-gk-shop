<template>
  <a-carousel autoplay>
    <div v-for="(carousel, index) in carousels" :key="carousel.key" class="owl-slide cover" :style="{backgroundImage: `url(${carousel.image})`}">
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
          image: 'https://images.unsplash.com/photo-1532211387405-12202cb81d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-1'
        },
        {
          image: 'https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1999&q=80',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-2'
        },
        {
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-3'
        },
        {
          image: 'https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-4'
        },
        {
          image: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
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
