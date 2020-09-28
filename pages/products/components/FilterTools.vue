<template>
  <div class="filter_col mb-4">
    <div class="filter_type">
      <a-collapse v-model="activeKey">
        <a-collapse-panel key="1" header="Categories">
          <ul>
            <li v-for="category in categories" :key="category.id">
              <label
                class="container_check"
              >{{ category.name }} <small>{{ category.productsCounter }}</small>
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
          </ul>
        </a-collapse-panel>
        <!-- <a-collapse-panel key="2" header="Colors" :disabled="false">
          <ul>
            <li>
              <label
                class="container_check"
              >Blue <small>06</small>
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >Red <small>12</small>
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >Orange <small>17</small>
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >Black <small>43</small>
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
          </ul>
        </a-collapse-panel> -->
        <a-collapse-panel key="3" header="Prices">
          <ul>
            <li>
              <label
                class="container_check"
              >1K — 10K Rwf
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >10K — 20K Rwf
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >20K Rwf — 50K Rwf
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
            <li>
              <label
                class="container_check"
              >50K Rwf — 1M Rwf
                <input type="checkbox">
                <span class="checkmark" />
              </label>
            </li>
          </ul>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FilterTools',
  data () {
    return {
      text:
        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      activeKey: ['1']
    }
  },
  computed: {
    ...mapGetters({ categories: 'categories/all' })
  }
}
</script>

<style scoped>
.filter_type ul {
  list-style: none;
  padding: 5px 5px 0 5px;
}
.filter_type ul {
  list-style: none;
  padding: 5px 0 0 0;
  margin: 0 0 15px 0;
}
.filter_type ul li {
  margin-bottom: 5px;
}
.filter_type label {
  font-weight: 400;
}
.container_check {
  display: block;
  position: relative;
  padding-left: 30px;
  line-height: 1.7;
  margin-bottom: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filter_type label small {
  float: right;
  color: #777;
  padding-top: 3px;
}
.container_check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.container_check .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #dddddd;
  background-color: #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.container_check input:checked ~ .checkmark {
  background-color: #c82f63;
  border: 1px solid transparent;
}
.container_check input:checked ~ .checkmark:after {
  display: block;
}
.container_check .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
