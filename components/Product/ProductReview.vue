<template>
  <div class="tab_content_wrapper">
    <div class="container">
      <!-- <a-tabs default-active-key="1" @change="callback"> -->
      <!-- <a-tab-pane key="1" tab="Description"> -->
      <div class="card-body">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <h3>Details</h3>
            <a-skeleton v-if="isLoading" active />
            <div v-else v-html="product.fullDescription" />
          </div>
          <div class="col-lg-5">
            <h3>Specifications</h3>
            <div class="table-responsive">
              <table class="table table-sm table-striped">
                <tbody>
                  <tr>
                    <td><strong>Color</strong></td>
                    <td>Blue, Purple</td>
                  </tr>
                  <tr>
                    <td><strong>Size</strong></td>
                    <td>150x100x100</td>
                  </tr>
                  <tr>
                    <td><strong>Weight</strong></td>
                    <td>0.6kg</td>
                  </tr>
                  <tr>
                    <td><strong>Manifacturer</strong></td>
                    <td>Manifacturer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /table-responsive -->
          </div>
        </div>
      </div>
      <!-- </a-tab-pane> -->
      <!-- <a-tab-pane key="2" tab="Review" force-render>
          <div class="card-body">
            <div class="row justify-content-between">
              <div v-for="review in product.reviews" :key="review.id" class="col-lg-6">
                <div class="review_content">
                  <div class="clearfix add_bottom_10">
                    <span class="rating">
                      <a-icon type="star" class="voted" theme="filled" />
                      <a-icon type="star" class="voted" theme="filled" />
                      <a-icon type="star" class="voted" theme="filled" />
                      <a-icon type="star" class="voted" theme="filled" />
                      <i class="icon-star" /><em>5.0/5.0</em></span>
                    <em>Published 54 minutes ago</em>
                  </div>
                  <h4>"Commpletely satisfied"</h4>
                  <p>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 float-right">
              <a-button type="primary" block>
                Leave a review
              </a-button>
            </div>
          </div>
        </a-tab-pane> -->
      <!-- </a-tabs> -->
      <!-- /tab-content -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'ProductReview',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    isLoading () {
      return this.product.isLoading
    }
  },
  methods: {
    callback (key) {
      // console.log(key)
    }
  }
}
</script>

<style lang="css" scoped>
.tab_content_wrapper {
    background-color: #f8f8f8;
    padding: 60px 0 35px 0;
    margin-top: 6rem;
}
.card-body h3 {
    font-size: 18px;
    font-size: 1.125rem;
    margin-bottom: 20px;
    font-weight: 400;
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}
tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05);
}
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.review_content .rating {
    color: #999;
    font-size: 12px;
    font-size: 0.75rem;
    margin-bottom: 0;
    float: left;
}

.rating .voted{
    color: #fec348;
}

.review_content em {
    font-weight: 500;
    color: #999;
    line-height: 22px;
    margin-left: 5px;
    float: right;
}

.review_content em {
    font-weight: 500;
    color: #999;
    line-height: 22px;
    margin-left: 5px;
    float: right;
}
.review_content h4 {
    font-size: 18px;
    font-size: 1.125rem;
}
</style>
