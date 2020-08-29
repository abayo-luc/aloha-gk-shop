<template>
  <div class="sub-header bg-white">
    <div class="container-md">
      <div class="row small-gutters align-items-center justify-content-between header-items">
        <div class="col-xl-3 col-lg-3 col-6">
          <nav class="categories menu">
            <a-dropdown>
              <a class="ant-dropdown-link category-menu" @click="e => e.preventDefault()">
                <a-icon type="menu" size="large" class="menu-icon mr-2" /> Categories
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="/products">Category 1</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="/products">Category 2</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="/products">Category 4</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </nav>
        </div>
        <div class="col-xl-6 col-lg-7  d-none d-md-block">
          <a-input-search placeholder="Search products.." size="large" style="background-color: #ccc;" class="custom-search-input" @search="onSearch" />
        </div>
        <div class="col-xl-3 col-lg-2 col-6">
          <div class="row justify-content-end align-items-center">
            <div class="col-6  d-xl-none d-lg-none d-block">
              <a-button type="default" class="search-button float-right" icon="search" @click="showSearch" />
            </div>

            <div class="col-3">
              <a-badge count="5" :offset="[-2,10]" class="float-right">
                <a-button shape="circle" type="dashed" icon="shopping-cart" @click="showDrawer" />
              </a-badge>
            </div>
          </div>
        </div>
        <div class=" d-xl-none d-lg-none col-12">
          <div id="mob-search" class="search_mob_wp">
            <a-input placeholder="Search products.." size="large" class="custom-search-input" />
            <a-button type="primary" block class="my-2">
              Search
            </a-button>
          </div>
        </div>
      </div>
    </div>
    <a-drawer
      title="Add Items"
      placement="right"
      :closable="false"
      :visible="drawerVisible"
      :destroy-on-close="true"
      @close="closeDrawer"
    >
      <shopping-cart />
    </a-drawer>
  </div>
</template>
<script>
import ShoppingCart from '../Cart/Cart.vue'
export default {
  name: 'SubHeader',
  components: {
    ShoppingCart
  },
  data () {
    return {
      drawerVisible: false
    }
  },
  methods: {
    showDrawer () {
      this.drawerVisible = true
    },
    closeDrawer () {
      this.drawerVisible = false
    },
    showSearch () {
      const el = document.querySelector('#mob-search')
      if ([...el.classList].includes('search-visible')) {
        el.classList.remove('search-visible')
      } else {
        el.classList.add('search-visible')
      }
    },
    onSearch () {
      console.log('>>>>>>>>>>>>>>>>>>>>')
    }
  }
}
</script>

<style lang="css" scoped>
a.ant-dropdown-link.category-menu.ant-dropdown-trigger {
    color: #000;
}
.sub-header{
    border-bottom: 1px solid rgb(237, 237, 237);
    background-color: rgb(255, 255, 255);
    z-index: 9999;
}
.header-items{
    min-height: 60px;
}
.category-menu{
    position: relative;
    float: left;
    font-size: 1rem;
    font-weight: 700;
    line-height: 62px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

}
.category-menu .menu-icon{
    font-size: 1.5rem;
}
.custom-search-input{
    width: 100%;
    /* top: 10px; */
    position: relative;
    border-radius: 3px;
}
.search-button{
    border: none;
}
.search-button .search-icon{
    font-size: 1.5 rem;
}

.search_mob_wp{
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: visibility 0s ease-out, opacity 0.5s, height 0.5s;
}
.search-visible{
  visibility: visible;
  opacity: 1;
  transition: visibility 0s ease-in, opacity 0.5s, height 0.5s;
  height: 100px;
}

</style>
