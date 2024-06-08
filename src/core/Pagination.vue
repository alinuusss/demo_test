<script setup>

let emit = defineEmits(['load']);
import {useParamsStore} from "@/store/params.js";

let paramsStore = useParamsStore();

let props = defineProps({
  pagination: {
    type: Object,
    required: false
  }
});

function prevPage() {
    if (props.pagination.current_page <= 1) {
      return;
    }
    paramsStore.setPageParams(props.pagination.current_page - 1);
    emit('load', paramsStore.params);
}
function nextPage() {
  if (props.pagination.current_page >= props.pagination.last_page) {
      return;
  }
  paramsStore.setPageParams(props.pagination.current_page + 1);
  emit('load', paramsStore.params);

}

</script>

<template>
  <div class="pagination-wrap" v-if="pagination && pagination.total !== 1">

    <div class="pagination__text">
      Showing {{ pagination.to }} out of {{ pagination.total }}
    </div>

    <ul class="pagination">
      <li class="pagination__item">
        <div class="pagination__link arrow_prev" @click="prevPage()"></div>
      </li>

      <li class="pagination__item">
        <div class="pagination__link" :class="{disabled : pagination.current_page <= 1}">
          {{ pagination.current_page }}
        </div>
      </li>
      <li class="pagination__item pagination_of">
        of
      </li>
      <li class="pagination__item">
        <div class="pagination__link" :class="{disabled : pagination.current_page >= props.pagination.last_page}">
          {{ pagination.last_page }}
        </div>
      </li>

      <li class="pagination__item">
        <div class="pagination__link arrow_next" @click="nextPage()"></div>
      </li>
    </ul>

  </div>

</template>
