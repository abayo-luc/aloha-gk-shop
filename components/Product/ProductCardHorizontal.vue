<template>
  <div class="row row_item">
    <div class="col-sm-4">
      <figure>
        <span class="ribbon off">{{ discountRate }}</span>
        <a :href="producUrl">
          <img class="img-fluid lazy loaded" :src="getIndexImage" :data-src="getIndexImage" alt="" data-was-processed="true">
        </a>
      </figure>
    </div>
    <div class="col-sm-8">
      <div class="rating">
        <span>
          <a-rate :value="product.avRating" disabled :allow-half="true" />
        </span>
      </div>
      <a :href="producUrl">
        <h3>{{ product.name }}</h3>
      </a>
      <p>{{ product.shortDescription }}</p>
      <div class="price_box">
        <span class="new_price">{{ productPrice }}</span>
        <span class="old_price">{{ productListPrice }}</span>
      </div>
      <ul>
        <li>
          <a-button type="primary" @click="addToCart">
            Add to cart
          </a-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardHorizontal',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    producUrl () {
      return `/products/${this.product.id}`
    },
    getIndexImage () {
      if (this.product?.images?.length) {
        return this.product?.images[0]?.url || ''
      } else {
        return ''
      }
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
  },
  methods: {
    addToCart () {
      this.$store.dispatch('cart/addToCart', this.product)
    }
  }
}
</script>

<style scoped>
.row_item{
    margin-bottom: 30px;
}
.row_item figure {
    position: relative;
    margin-bottom: 0;
    -webkit-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
    box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
}
.ribbon.off {
    background-color: #F33;
}
.ribbon.off:before {
    border-color: #F33 transparent transparent;
}
.ribbon:before {
    border-style: solid solid solid none;
    border-width: 9px 9px 9px 0;
    bottom: -15px;
    content: "";
    left: 0;
    position: absolute;
    width: 9px;
}
.ribbon {
    color: #fff;
    display: inline-block;
    font-size: 11px;
    font-size: 0.6875rem;
    left: 10px;
    line-height: 1;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 10px;
    padding: 7px 10px;
    font-weight: 600;
    min-width: 45px;
    z-index: 1;
}
.row_item .rating {
    margin-bottom: 5px;
}
.rating i.voted {
    color: #fec348;
}
.row_item a h3 {
    font-size: 18px;
    font-size: 1.125rem;
    color: #444;
}
.row_item p {
    margin-bottom: 20px;
}
.row_item .price_box {
    margin-bottom: 20px;
}
.new_price {
    color: #004dda;
    font-weight: 500;
    font-size: 1.3125rem;
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
.row_item ul {
    margin: 15px 0 0 0;
    padding: 0;
    list-style: none;
}
.row_item ul {
    margin: 15px 0 0 0;
    padding: 0;
    list-style: none;
}
.row_item ul li {
    display: inline-block;
}

a.btn_1, .btn_1 {
    border: none;
    color: #fff;
    background: #004dda;
    outline: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    padding: 12px 25px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    font-size: 0.875rem;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    line-height: normal;
}
</style>
