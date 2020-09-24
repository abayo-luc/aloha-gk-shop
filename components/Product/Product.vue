<template>
  <div class="container py-4">
    <!-- <div class="countdown_inner my-2">
      -20% This offer ends in <div data-countdown="2019/05/15" class="countdown">
        00D 00:00:00
      </div>
    </div> -->
    <div class="row">
      <div class="col-md-6">
        <div class="all">
          <a-skeleton :loading="isLoading" :paragraph="{ rows: 8 }" />
          <product-carousel :images="images" />
        </div>
      </div>
      <div class="col-md-6">
        <!-- /page_header -->
        <div class="prod_info">
          <a-skeleton :loading="isLoading" active :paragraph="{ rows: 1 }" />
          <h1>
            {{ product.name }}
          </h1>
          <span class="rating">
            <a-rate v-model="rate" allow-half />
            <em class="mx-1">4 reviews</em>
          </span>
          <a-skeleton :loading="isLoading" active />
          <p>
            <!-- <small>SKU: MTKRY-001</small> -->
            <!-- <br> -->
            {{ product.shortDescription }}
          </p>

          <div class="prod_options">
            <div class="row">
              <label class="col-md-6 col-6 pt-0"><strong>Color</strong></label>
              <div class="col-md-6 col-6 colors">
                <ul>
                  <li>
                    <span class="color color_1 active">
                      <a-icon type="check" class="icon" />
                    </span>
                  </li>
                  <li>
                    <span class="color color_1">
                      <a-icon type="check" class="icon" />
                    </span>
                  </li>
                  <li>
                    <span class="color color_1">
                      <a-icon type="check" class="icon" />
                    </span>
                  </li>
                  <li>
                    <span class="color color_1">
                      <a-icon type="check" class="icon" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <label class="col-md-6 col-6"><strong>Size</strong> - Size Guide <a href="#0" data-toggle="modal" data-target="#size-modal"><i class="ti-help-alt" /></a></label>
              <div class="col-md-5 col-6 my-2">
                <a-cascader :options="options" placeholder="Select Address" />
              </div>
            </div>
            <div class="row">
              <label class="col-md-6 col-6"><strong>Quantity</strong></label>
              <div class="col-md-5 col-6">
                <a-input addon-before="-" addon-after="+" default-value="1" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <a-skeleton :loading="isLoading" paragraph />
              <div v-if="!isLoading" class="price_main">
                <span class="new_price">{{ productPrice }}</span>
                <span v-if="discountRate" class="percentage">{{ discountRate }}</span>
                <span v-if="product.listPrice > 0" class="old_price">{{ productListPrice }}</span>
              </div>
            </div>
            <div class="col-md-5">
              <div class="btn_add_to_cart my-2">
                <a-button type="primary" block icon="shopping-cart">
                  ADD TO CART
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /row -->
  </div>
</template>

<script>
import ProductCarousel from '../Carousel/ProductCarousel.vue'
const options = [
  {
    value: 'S',
    label: 'Small(S)'
  },
  {
    value: 'M',
    label: 'M'
  },
  {
    value: 'L',
    label: 'L'
  },
  {
    value: 'XL',
    label: 'XL'
  }
]
export default {
  name: 'Product',
  components: {
    ProductCarousel
  },
  props: ['product', 'loading'],
  data () {
    return {
      options,
      rate: 2.5
    }
  },
  computed: {
    isLoading () {
      return this.product.isLoading
    },
    images () {
      return this.product?.images?.map(img => img.url) || []
    },
    discountRate () {
      if (this.product?.listPrice) {
        return ((this.product.price - this.product.listPrice) / this.product.listPrice).toLocaleString(undefined, {
          style: 'percent'
        })
      } else {
        return null
      }
    },
    productPrice () {
      const options = { style: 'currency', currency: 'RWF' }
      return new Intl.NumberFormat('en', options).format(this.product?.price || 0)
    },
    productListPrice () {
      const options = { style: 'currency', currency: 'RWF' }
      return new Intl.NumberFormat('en', options).format(this.product?.listPrice || 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.countdown_inner {
    background: #F33;
    color: #fff;
    margin-bottom: 30px;
    padding: 5px;
    text-align: center;
    font-weight: 500;
}
.countdown_inner .countdown {
    position: static;
    font-size: 16px;
    font-size: 1rem;
    width: auto;
    margin: 0;
    display: inline-block;
}

.breadcrumbs ul li {
    display: inline-block;
    margin-right: 7px;
    padding-right: 8px;
    position: relative;
}

.prod_info {
    border-bottom: 1px solid #ededed;
    padding-bottom: 25px;
}

.prod_info p {
    margin-bottom: 20px;
}
.prod_info .rating {
    margin-bottom: 10px;
}

.rating {
    color: #ccc;
    margin-bottom: 15px;
    display: inline-block;
    display: flex;
    align-items: center;
}
.rating .voted{
    color: #fec348;
}
.ant-cascader-picker{
    width: 100%
}
.prod_options {
    padding: 20px 0 20px 0;
}
.prod_options .colors ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.prod_options .colors ul li {
    display: inline-block;
    margin-right: 5px;
}
.prod_options .colors ul li span.color {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    display: block;
    width: 28px;
    height: 28px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.prod_options .colors ul li span.color {
    background-color: #ffcc00;
}
.prod_options .colors ul li span.color .icon{
    color: transparent
}
.prod_options .colors ul li span.color.active .icon{
    color: #fff
}
.price_main {
    line-height: 1;
    padding-top: 10px;
}
.new_price {
    color: #004dda;
    font-weight: 500;
    font-size: 16px;
    font-size: 1rem;
}
.price_main .percentage {
    top: -2px;
}
.percentage {
    background: #F33;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 600;
    position: relative;
    padding: 5px 5px 3px 5px;
    top: -1px;
    margin-left: 10px;
    display: inline-block;
}
.old_price {
    color: #999;
    text-decoration: line-through;
    display: inline-block;
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    font-size: 1rem;
}
</style>
