<script setup>

defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false
  }
});

</script>

<template>

  <div class="preloader-wrap" v-if="loading">
    <div class="lds-spinner">
      <div></div><div></div><div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>

</template>
