<template>
  <div class="main_title mt-5 mb-5">
    <h2>Top Selling</h2>
    <span>Products</span>
    <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
  </div>
</template>

<script>
export default {
  name: 'ProductHeader'
}
</script>

<style lang="css" scoped>
.main_title {
  position: relative;
  text-align: center;
}
@media (max-width: 767px) {
  .main_title {
    margin-bottom: 30px;
  }
}
.main_title h1, .main_title h2 {
  font-size: 36px;
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
  position: relative;
  z-index: 2;
}
@media (max-width: 767px) {
  .main_title h1, .main_title h2 {
    font-size: 28px;
    font-size: 1.75rem;
  }
}
.main_title h1 {
  font-size: 42px;
  font-size: 2.625rem;
}
@media (max-width: 767px) {
  .main_title h1 {
    font-size: 32px;
    font-size: 2rem;
  }
}
@media (max-width: 767px) {
  .main_title span {
    font-size: 45px;
    font-size: 2.8125rem;
  }
}
.main_title p {
  font-size: 23px;
  font-size: 1.4375rem;
  font-weight: 300;
  padding: 0 15%;
  position: relative;
  z-index: 2;
}
@media (max-width: 767px) {
  .main_title p {
    font-size: 18px;
    font-size: 1.125rem;
    padding: 0;
  }
}
</style>
