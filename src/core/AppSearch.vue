<script setup>

import {ref, watch} from 'vue';
let emit = defineEmits(['searchProducts'])
import {useParamsStore} from "@/store/params.js";
import debounce from 'lodash/debounce.js';

let paramsStore = useParamsStore();

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  placeholder : {
    type: String,
    required: false
  }
});

let searchString = ref('');

function searchProduct() {
  paramsStore.setSearchParams(searchString.value.trim());
  emit('searchProducts', paramsStore.params);
}

let searchDebounce = debounce(searchProduct, 400);

function handleInput(e) {
  if (e.key === "Backspace" || e.key === "Delete") {
    searchProduct();
  }
}

watch(() => searchString.value, debounce((val) => {
  if (!val) {
    searchProduct();
  }
}, 400))


</script>

<template>

  <div class="search p_rel">

    <label class="label" v-if="label">{{  label  }}</label>
    <input type="text" class="input search__input"
           :placeholder="placeholder"
           v-model="searchString"
           @input="searchDebounce"
           @keyup.delete="handleInput"
    >
    <button class="search__btn zoom_icon"></button>

    <div class="search__dropdown">
      <div class="search__dropdown-item">

      </div>
    </div>

  </div>

</template>
