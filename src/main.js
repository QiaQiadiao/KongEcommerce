
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//自定义指令
app.directive('img-lazy', {
    mounted(el, binding) {
        useIntersectionObserver(
            el,
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    }
})
