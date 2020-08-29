<template>
  <div class="grid_item">
    <a-card class="product-item">
      <figure>
        <span class="ribbon off">-30%</span>
        <a :href="producUrl">
          <img class="img-fluid lazy loaded" src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80" data-src="img/products/shoes/1.jpg" alt="" data-was-processed="true">
        </a>
        <div data-countdown="2019/05/15" class="countdown">
          Out of stock
        </div>
      </figure>
      <div class="rating">
        <a-icon type="star" /><a-icon type="star" /><a-icon type="star" /><a-icon type="star" /><a-icon type="star" />
      </div>
      <a :href="producUrl">
        <h3>{{ product.name }}</h3>
      </a>
      <div class="price_box">
        <span class="new_price">{{ product.price }} Rwf</span>
        <span class="old_price">$60.00</span>
      </div>
      <ul>
        <li>
          <a
            href="#0"
            class="tooltip-1"
            data-toggle="tooltip"
            data-placement="left"
            title=""
            data-original-title="Add to favorites"
          ><a-icon type="shopping-cart" /><span>Add to Cart</span></a>
        </li>
        <li>
          <a
            href="#0"
            class="tooltip-1"
            data-toggle="tooltip"
            data-placement="left"
            title=""
            data-original-title="Add to compare"
          ><a-icon type="share-alt" /><span>Share</span></a>
        </li>
      </ul>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    producUrl () {
      return `/products/${this.product.id}`
    }
  }
}
</script>

<style lang="css" scoped>
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
.ribbon:before {
  border-style: solid solid solid none;
  border-width: 9px 9px 9px 0;
  bottom: -15px;
  content: "";
  left: 0;
  position: absolute;
  width: 9px;
}
.ribbon.new {
  background-color: #9933cc;
}
.ribbon.new:before {
  border-color: #9933cc transparent transparent;
}
.ribbon.hot {
  background-color: #0C0;
}
.ribbon.hot:before {
  border-color: #0C0 transparent transparent;
}
.ribbon.off {
  background-color: #F33;
}
.ribbon.off:before {
  border-color: #F33 transparent transparent;
}

.grid_item {
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.grid_item:hover ul li {
  display: block;
}
.grid_item figure {
  position: relative;
  overflow: hidden;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  -webkit-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
.grid_item figure img:nth-child(1) {
  visibility: visible;
  opacity: 1;
  transform: translateZ(0);
}
.grid_item figure img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
}
.grid_item .product-item:hover {
  -webkit-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
}
.grid_item figure:hover img {
  -webkit-transition: opacity 0.5s ease, -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease, -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
}
.grid_item figure:hover img:nth-child(2) {
  visibility: visible;
  opacity: 1;
  transform: scale(1.05);
}
.grid_item ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18px;
  font-size: 1.125rem;
  line-height: 1;
  z-index: 2;
}
@media (max-width: 991px) {
  .grid_item ul {
    position: relative;
    left: 0px;
    right: inherit;
    margin-bottom: 10px;
    top: 0;
  }
}
.grid_item ul li {
  margin-bottom: 5px;
  animation: fadeIn 0.1s ease;
  animation-fill-mode: both;
  display: none;
  position: relative;
}
@media (max-width: 991px) {
  .grid_item ul li {
    animation: none;
    display: inline-block !important;
  }
}
.grid_item ul li a {
  background-color: #fff;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  width: 36px;
  height: 36px;
  color: #444;
  text-align: center;
  line-height: 40px;
  display: block;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.grid_item ul li a:hover {
  background-color: #c82f63;
  border: 1px solid #c82f63;
}
.grid_item ul li a:hover i {
  color: #fff;
}
.grid_item ul li a span {
  display: none;
}
@media (max-width: 991px) {
  .grid_item ul li {
    display: block;
  }
}
.grid_item ul li:nth-child(1) {
  animation-delay: 0.05s;
}
.grid_item ul li:nth-child(2) {
  animation-delay: 0.1s;
}
.grid_item ul li:nth-child(3) {
  animation-delay: 0.15s;
}
.grid_item a h3 {
  font-size: 14px;
  font-size: 0.875rem;
  margin: 3px 0 0 0;
  color: #444;
  font-weight: 500;
  display: inline-block;
}
.grid_item a h3:hover {
  color: #004dda;
}
.grid_item .price_box {
  margin-bottom: 5px;
}
.grid_item .price_box .old_price {
  font-size: 14px;
  font-size: 0.875rem;
}
.grid_item .rating {
  display: block;
  margin-bottom: 0;
}

.rating {
  color: #ccc;
  margin-bottom: 15px;
  display: inline-block;
}
.rating i.voted {
  color: #fec348;
}
.rating i:before {
  margin: 2px;
}
.rating em a {
  display: inline-block;
  color: #999;
  margin-left: 10px;
  text-decoration: underline;
  display: inline-block;
}
.rating em a:hover {
  color: #004dda;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
.new_price {
  color: #004dda;
  font-weight: 500;
  font-size: 16px;
  font-size: 1rem;
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

.tooltip {
  line-height: 1.3;
  font-size: 11px;
  font-size: 0.6875rem;
  font-weight: 600;
}

.tooltip.show {
  opacity: 0.8;
}

.countdown {
  color: #fff;
  font-weight: 600;
  width: 100px;
  height: 22px;
  position: absolute;
  left: 50%;
  margin-left: -45px;
  bottom: 25px;
  z-index: 1;
  line-height: 23px;
  box-sizing: border-box;
  font-size: 12px;
  font-size: 0.75rem;
  background: #F33;
  text-align: center;
}
@media (max-width: 575px) {
  .countdown {
    margin-left: -45px;
    width: 90px;
  }
}
.countdown:before {
  position: absolute;
  left: -15px;
  top: -6px;
  content: '';
  /* background: url(../img/countdown_bg.svg) top left no-repeat; */
  width: 27px;
  height: 30px;
  display: inline-block;
}
@media (max-width: 575px) {
  .countdown:before {
    display: none;
  }
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
</style>>
