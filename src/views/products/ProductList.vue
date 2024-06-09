<script setup>

import {ref} from 'vue';

import ProductItem from "@/views/products/components/ProductItem.vue";
import ProductsControl from "@/views/products/components/ProductsControl.vue";
import {useParamsStore} from "@/store/params.js";
import ProductApi from "@/api/product.js";

let paramsStore = useParamsStore();

let products = ref([]);
let pagination = ref(null);
let loading = ref(true);

function getProducts() {

  ProductApi.get(paramsStore.params)
      .then(response => {

        products.value = response.data.data;
        verifyName(products.value);
        pagination.value = response.data.meta;

      })
      .catch((error) => {
          loading.value = false;
          alert('Ошибка на сервере, мы уже решаем проблему.');
      })
      .finally(() => loading.value = false)
}

getProducts();

function verifyName(products) {
  for (let i = 0; i < products.length; ++i) {
    if (products[i].vehicle_name === "undefined undefined") {
      products[i].vehicle_name = 'Лада седан';
    }
  }
}

</script>

<template>

  <app-preloader :loading="loading"></app-preloader>

  <div class="page">

    <div class="page__header">
      <h1 class="title">
<!--        {{ $t('title') }}-->
        123</h1>
    </div>

    <div class="container">
      <products-control :pagination="pagination" @getProducts="getProducts"></products-control>

      <div class="page__content">

        <template v-if="products.length">
          <div class="row items">
            <product-item :product="product" v-for="product in products"></product-item>
          </div>

          <app-pagination :pagination="pagination" @load="getProducts"></app-pagination>
        </template>
        <template v-else>
            Список товаров пуст
        </template>
      </div>

    </div>
  </div>

</template>
