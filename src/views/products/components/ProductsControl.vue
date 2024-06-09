<script setup type="module">

import {ref} from 'vue';
import AppSearch from "@/core/AppSearch.vue";
import {useParamsStore} from "@/store/params.js";

let paramsStore = useParamsStore();

let props = defineProps({
  pagination: {
    type: Object,
    required: false
  }
});

let emit = defineEmits(['getProducts']);

let currentPage = ref(props.pagination?.per_page ? props.pagination?.per_page : 9);

function loadProducts(i) {
  paramsStore.setPageParams(1);
  paramsStore.setPerPageParams(i);
  currentPage.value = i;
  emit('getProducts', paramsStore.params);
}

function searchProducts() {

  emit('getProducts', paramsStore.params);
}

</script>

<template>

  <div class="row row_center products-control">
    <app-search :placeholder="$t('searchPlaceholder')" @searchProducts="searchProducts"></app-search>

    <div class="row row_center sorting-page">
      {{ $t('sortingValue') }}
      122:

      <div class="select">
        <div class="select__current-value input chevron_icon chevron_down_icon">{{ currentPage }}</div>

        <div class="select__dropdown" v-if="pagination">
          <div class="select__dropdown-item" @click="loadProducts(3)">3</div>
          <div class="select__dropdown-item" @click="loadProducts(6)">6</div>
          <div class="select__dropdown-item" @click="loadProducts(9)">9</div>
        </div>
      </div>

    </div>

    <button class="btn btn_red products-control__btn icon_plus icon_plus_white">
      {{ $t('btnText') }}
    </button>
  </div>

</template>
