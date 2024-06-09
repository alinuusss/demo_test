import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useLgStore = defineStore('language', () => {

    const lg = ref('Ru');

    function setLanguage(newValue) {
        lg.value = newValue;
        localStorage.setItem('lg', newValue);
    }

    return {
        lg,
        setLanguage,
    }
});