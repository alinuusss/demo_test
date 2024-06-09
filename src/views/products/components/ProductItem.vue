<script setup>

let props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

</script>

<template>

  <div class="product-item p_rel" v-if="product">
    <div class="product-item__more icon_more"></div>

    <div class="product-item__img-wrap">
      <template v-if="product.photo?.url">
        <img :src="product.photo?.url" class="product-item__img" alt="">
      </template>
      <template v-else>
        <div>
         Нет фото
        </div>
      </template>
    </div>

    <div class="product-item__name">
     {{ product.vehicle_name ? product.vehicle_name : 'Без названия'}}
    </div>

    <div class="product-item__article">
      {{ product.vin }} {{ product.vin_postfix }}
    </div>

    <div class="row product-item__footer">

      <div class="product-item__qty" :class="{'_success success_icon' : product.id === 10}">
        {{ product.id === 10 ? '30/30' : '17/30' }}
      </div>

      <div class="product-item__days">
        3 days left
      </div>

    </div>

  </div>

</template>
