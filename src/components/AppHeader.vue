<script setup>

import {useI18n} from "vue-i18n";
let test = useI18n();

import {onMounted, ref} from 'vue';
import {useLgStore} from "@/store/language.js";

let language = useLgStore();

let lgs = ref(['Ru', 'En']);

function setLg(lg) {
  test.locale.value = lg;
  language.setLanguage(lg);
}

if (!localStorage.hasOwnProperty('lg')) {
  localStorage.setItem('lg', 'En');
  language.setLanguage('En');
  test.locale.value = language.lg;
}

if (localStorage.getItem('lg') === 'En') {
  language.setLanguage('En');
  test.locale.value = language.lg;
} else {
  language.setLanguage('Ru');
  test.locale.value = language.lg;
}

</script>

<template>

  <header class="row header">

    <button class="btn btn_outline header__btn icon_plus icon_plus_red"></button>

    <div class="row row_center header__profile">
      <div class="header__profile-icon">
        <img src="@/assets/images/header/user.png" alt="John Doe">
      </div>
      <div class="header__profile-name">
        John Doe
      </div>
    </div>

    <div class="lg"> <!-- lg - language -->
      <div class="row row_center lg__current-value chevron_icon chevron_down_icon">
        <div class="lg__icon">
          <img src="@/assets/images/header/uk.png" alt="En">
        </div>
        {{ language.lg }}
      </div>

      <div class="lg__dropdown">

        <div class="lg__dropdown-item" v-for="lg in lgs" @click="setLg(lg)">
          {{ lg }}
        </div>

      </div>
    </div>

  </header>

</template>

<style scoped>

</style>