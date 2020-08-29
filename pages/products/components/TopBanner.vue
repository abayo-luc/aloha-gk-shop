<template>
  <div class="top_banner">
    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.3)" style="background-color: rgba(0, 0, 0, 0.3);">
      <div class="container">
        <div class="breadcrumbs">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Category</a></li>
            <li>Page active</li>
          </ul>
        </div>
        <h1>Shoes - Grid listing</h1>
      </div>
    </div>
    <img src="https://previews.dropbox.com/p/thumb/AA5vc5mgqzJrKt6E-lMUl4vS9Z6c7KYaYl8Fh3dLV_Gh1v3xpbTtW_cGcrvRUU3UVZeAO-pyX0zxfM7tA0JDYGHla_L-f0UGWgvTxyQQDPp86sngGZ9QQ8L_E28wcM6oqEw6UWjNlc1xZZ1ZCpY9VSiWAZtw56aR6t5qTYtL8IHwsU4eLzitUa0S47B9XAxy-pt4QccDqV9oeOnJp2RN7w2XsAHEC-vH6SU18yLmNtidE_DLkvkVR3dHqtzj22bFGSAWDGgWm_yKItar5uKCa_6K0g0MOOlvwLl9DCdyZbZ81BVyfLwDakZhDUjwJZsKtXNrdrSew-VMVEzcz-3aa9JcMhmhFf3-mpJRUzi-EyHwkQ/p.jpeg?fv_content=true&size_mode=5" class="img-fluid" alt="">
  </div>
</template>

<script>
export default {
  name: 'TopBanner'
}
</script>

<style lang="css" scoped>
.top_banner .breadcrumbs ul li a {
    color: #fff;
    opacity: 0.6;
}
.top_banner {
    height: 250px;
    overflow: hidden;
    position: relative;
}
.opacity-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.top_banner .breadcrumbs {
    color: #fff;
}

.breadcrumbs ul {
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 12px;
    font-size: 0.75rem;
}
.breadcrumbs ul li {
    display: inline-block;
    margin-right: 7px;
    padding-right: 8px;
    position: relative;
}
.top_banner h1 {
    font-size: 32px;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
}
.top_banner img {
    z-index: 1;
    width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
