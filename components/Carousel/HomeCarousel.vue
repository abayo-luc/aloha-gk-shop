<template>
  <carousel :autoplay="true" :autoplay-hover-pause="true" :per-page="1" pagination-position="bottom-overlay" pagination-active-color="#c82f62">
    <slide v-for="(carousel, index) in carousels" :key="carousel.key" class="owl-slide cover" :style="{backgroundImage: `url(${carousel.image})`}">
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
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return ({
      carousels: [
        {
          image: 'https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-1'
        },
        {
          image: 'https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-2'
        },
        {
          image: 'https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-3'
        },
        {
          image: 'https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5',
          description: 'Limited items available at this price',
          title: 'Attack Air',
          meta: 'Max 720 Sage Low',
          key: 'car-4'
        },
        {
          image: 'https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5',
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

}
.owl-slide{
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

</style>
