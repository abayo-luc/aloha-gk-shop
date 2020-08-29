<template>
  <div class="row row_item">
    <div class="col-sm-4">
      <figure>
        <span class="ribbon off">-30%</span>
        <a href="product-detail-1.html">
          <img class="img-fluid lazy loaded" src="https://images.unsplash.com/photo-1529530968687-17b54c12c9a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" data-src="https://images.unsplash.com/photo-1529530968687-17b54c12c9a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="" data-was-processed="true">
        </a>
      </figure>
    </div>
    <div class="col-sm-8">
      <div class="rating">
        <a-icon type="star" class="icon-star voted" theme="filled" />
        <a-icon type="star" class="icon-star voted" theme="filled" />
        <a-icon type="star" class="icon-star voted" theme="filled" />
        <a-icon type="star" class="icon-star voted" theme="filled" />
        <a-icon type="star" />
      </div>
      <a href="product-detail-1.html">
        <h3>Armor Air x Fear</h3>
      </a>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>
      <div class="price_box">
        <span class="new_price">$48.00</span>
        <span class="old_price">$60.00</span>
      </div>
      <ul>
        <li>
          <a-button type="primary">
            Add to cart
          </a-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardHorizontal'
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
