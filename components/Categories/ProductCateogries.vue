<template>
  <ul id="banners_grid" class="clearfix">
    <li v-for="category in categories" :key="category.id">
      <div class="img_container">
        <img :src="category.image" alt="" class="lazy loaded" data-was-processed="true">
        <div class="short_info opacity-mask" data-opacity-mask="rgba(183, 69, 88, 0.5)" style="background-color: rgba(183, 69, 88, 0.5);">
          <h3>{{ category.name }}</h3>
          <div>
            <nuxt-link :to="goTo(category.id)">
              <a-button type="primary">
                View Category
              </a-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductCategories',
  computed: {
    ...mapGetters({ categories: 'categories/topThree' })
  },
  methods: {
    goTo (id) {
      return `/products?categoryId=${id}`
    }
  }
}
</script>
<style lang="css" scoped>
  ul#banners_grid {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
ul#banners_grid li {
  position: relative;
  width: 33.33%;
  float: left;
  border-top: 5px solid #fff;
  border-right: 5px solid #fff;
}
ul#banners_grid li:last-child {
  border-right: none;
}
@media (max-width: 767px) {
  ul#banners_grid li {
    width: 100%;
    float: none;
    border-right: none;
  }
}
ul#banners_grid li div.img_container {
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: block;
  width: 100%;
  height: 250px;
}
@media (max-width: 767px) {
  ul#banners_grid li div.img_container {
    width: 100%;
    float: none;
    height: 210px;
  }
}
ul#banners_grid li div.img_container img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale(1.1);
  -moz-transform: translate(-50%, -50%) scale(1.1);
  -ms-transform: translate(-50%, -50%) scale(1.1);
  -o-transform: translate(-50%, -50%) scale(1.1);
  transform: translate(-50%, -50%) scale(1.1);
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
@media (max-width: 1199px) {
  ul#banners_grid li div.img_container img {
    height: 100%;
    width: auto;
    max-width: inherit;
  }
}
@media (max-width: 767px) {
  ul#banners_grid li div.img_container img {
    width: 100%;
    height: auto;
  }
}
ul#banners_grid li div.img_container:hover img {
  -webkit-transform: translate(-50%, -50%) scale(1.02);
  -moz-transform: translate(-50%, -50%) scale(1.02);
  -ms-transform: translate(-50%, -50%) scale(1.02);
  -o-transform: translate(-50%, -50%) scale(1.02);
  transform: translate(-50%, -50%) scale(1.02);
}
ul#banners_grid li div.img_container .short_info {
  position: absolute;
  left: 0;
  top: 0%;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  padding: 0 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
  text-align: center;
}
ul#banners_grid li div.img_container .short_info h3 {
  color: #fff;
  font-size: 24px;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  text-transform: uppercase;
  font-weight: 900;
}
@media (max-width: 767px) {
  ul#banners_grid li div.img_container .short_info h3 {
    margin-top: -20px;
  }
}
ul#banners_grid li div.img_container .short_info div {
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-transform: translateY(-25px);
  -moz-transform: translateY(-25px);
  -ms-transform: translateY(-25px);
  -o-transform: translateY(-25px);
  transform: translateY(-25px);
  text-align: center;
  width: 100%;
  visibility: hidden;
  display: table;
  opacity: 0;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
ul#banners_grid li div.img_container .short_info div .btn_1 {
  padding: 10px 22px;
  font-size: 13px;
  font-size: 0.8125rem;
}
@media (max-width: 767px) {
  ul#banners_grid li div.img_container .short_info div {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(-50px);
    -moz-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    -o-transform: translateY(-50px);
    transform: translateY(-50px);
  }
}
ul#banners_grid li div.img_container .short_info:hover div {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(-50px);
  -moz-transform: translateY(-50px);
  -ms-transform: translateY(-50px);
  -o-transform: translateY(-50px);
  transform: translateY(-50px);
}

.categories_grid a {
  display: block;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
@media (max-width: 767px) {
  .categories_grid a {
    height: 180px;
    margin-bottom: 10px;
  }
}
.categories_grid a .wrapper {
  width: 100%;
  background: transparent;
  background: -webkit-linear-gradient(top, transparent, #000);
  background: linear-gradient(to bottom, transparent, #000);
  position: absolute;
  left: 0;
  bottom: 0;
  line-height: 1;
  padding: 100px 20px 20px 20px;
}
.categories_grid a .wrapper h2 {
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 21px;
  font-size: 1.3125rem;
  margin: 0;
  -webkit-transform: translateY(20px) translateZ(0);
  -moz-transform: translateY(20px) translateZ(0);
  -ms-transform: translateY(20px) translateZ(0);
  -o-transform: translateY(20px) translateZ(0);
  transform: translateY(20px) translateZ(0);
  -webkit-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
.categories_grid a .wrapper p {
  color: #fff;
  opacity: 0;
  margin: 0;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 500;
  -webkit-transform: translateY(20px) translateZ(0);
  -moz-transform: translateY(20px) translateZ(0);
  -ms-transform: translateY(20px) translateZ(0);
  -o-transform: translateY(20px) translateZ(0);
  transform: translateY(20px) translateZ(0);
  -webkit-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
.categories_grid a img {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
.categories_grid a:hover img {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.categories_grid a:hover h2 {
  -webkit-transform: translateY(-5px) translateZ(0);
  -moz-transform: translateY(-5px) translateZ(0);
  -ms-transform: translateY(-5px) translateZ(0);
  -o-transform: translateY(-5px) translateZ(0);
  transform: translateY(-5px) translateZ(0);
}
.categories_grid a:hover p {
  opacity: 0.8;
  transition-delay: 0.2s;
  -webkit-transform: translateY(0) translateZ(0);
  -moz-transform: translateY(0) translateZ(0);
  -ms-transform: translateY(0) translateZ(0);
  -o-transform: translateY(0) translateZ(0);
  transform: translateY(0) translateZ(0);
}
</style>
