<script setup>

import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {useRouter} from "vue-router";

let router = useRouter();

if (router.currentRoute.value.path === '/') {
  router.push({name: 'products'})
}

</script>

<template>

  <div class="app">
    <div class="row">

      <app-sidebar></app-sidebar>

      <div class="app__content">

        <app-header></app-header>

        <router-view/>

      </div>

    </div>
  </div>

</template>
