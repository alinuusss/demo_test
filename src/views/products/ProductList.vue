<script setup>

import axios from "axios";

import {ref} from 'vue';

import ProductItem from "@/views/products/components/ProductItem.vue";
import ProductsControl from "@/views/products/components/ProductsControl.vue";
import AppPagination from "@/core/Pagination.vue";
import {useParamsStore} from "@/store/params.js";

let paramsStore = useParamsStore();

let products = ref([]);
let pagination = ref(null);

function getProducts() {
  axios.get('https://api.caiman-app.de/api/cars-test',  {
    params: paramsStore.params
  })
      .then(response => {

        products.value = response.data.data;

        verifyName(products.value);

        pagination.value = response.data.meta;

        console.log(pagination.value);
      })
}

getProducts(paramsStore.params);

function verifyName(products) {
  for (let i = 0; i < products.length; ++i) {

    if (products[i].vehicle_name === "undefined undefined") {
      products[i].vehicle_name = 'Лада седан';
    }
  }
}

</script>

<template>

  <div class="page">

    <div class="page__header">
      <h1 class="title">Vechicles</h1>
    </div>

    <div class="container">
      <products-control :pagination="pagination" @getProducts="getProducts"></products-control>

      <div class="page__content">
        <div class="row items" v-if="products.length ">
          <product-item :product="product" v-for="product in products"></product-item>
        </div>

        <app-pagination :pagination="pagination" @load="getProducts"></app-pagination>
      </div>
    </div>
  </div>

</template>
