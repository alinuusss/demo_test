import './assets/style/app.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { createPinia } from 'pinia';
import languages from "@/helpers/languages.js";

import App from './App.vue'
import router from './router';

import AppPreloader from "@/core/AppPreloader.vue";
import AppPagination from "@/core/Pagination.vue";

const pinia = createPinia();

const app = createApp(App)
    .use(router)
    .use(pinia)

const i18n = createI18n({
    ...languages
})

app.component('AppPreloader', AppPreloader);
app.component('AppPagination', AppPagination);

if ('serviceWorker' in navigator) {

    let baseurl = import.meta.env.BASE_URL;

    if (baseurl === '/') {
        baseurl = '';
    }

    navigator.serviceWorker.register(
        import.meta.env.MODE === 'production' ? (baseurl + '/service-worker.js') : '/dev-sw.js?dev-sw',
        {
            type: import.meta.env.MODE === 'production' ? 'classic' : 'module'
        }
    )
        .then((reg) => {

            setInterval(() => {
                reg.update();
            }, 3 * 60 * 60 * 1000) // 3h

        });

}

app.use(i18n)
app.mount('#app')

