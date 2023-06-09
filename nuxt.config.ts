// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/main.css'
    ],
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome'
        ]
    },
    app: {
        baseURL: '/qbiak-code.github.io/'
    }
})
