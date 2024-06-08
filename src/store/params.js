import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useParamsStore = defineStore('params', () => {

  const params = ref({
    page: 1,
    search: '',
    per_page: 9
  });

  function setPageParams(newValue) {
    params.value.page = newValue;
  }

  function setSearchParams(newValue) {
    params.value.search = newValue;
  }

  function setPerPageParams(newValue) {
    params.value.per_page = newValue;
  }

  return {
    params,
    setPageParams,
    setSearchParams,
    setPerPageParams
  }
});