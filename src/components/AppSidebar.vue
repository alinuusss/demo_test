<script setup>

import {ref} from 'vue';
import sidebarLinks from "@/sidebar/sidebarConfig.js";

const links = ref(sidebarLinks);

</script>

<template>

  <div class="sidebar">

    <div class="sidebar__title">
      {{ $t('mainTitle') }}
    </div>

    <div class="sidebar__nav-list" v-if="links.length">
      <template v-for="link in links">
        <router-link v-if="link.disabled && !link.target"
                     :to="{ name: link.url }"
                     :class="['sidebar__link', link.icon]"
        >
          {{ $t(`nav.${link.name}`) }}
        </router-link>

        <a :href="link.url" v-else :class="['sidebar__link', link.icon]">
          {{ $t(`nav.${link.name}`) }}
        </a>
      </template>
    </div>

    <div class="sidebar__bg"></div>
  </div>

</template>
