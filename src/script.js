import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const count = ref(0)

const app = createApp({
    data() {
        return {
            navbarDropdown: false
        }
    },
    methods: {
        onButtonNavbarDropdown() {
            this.navbarDropdown = !this.navbarDropdown
        }
    }
})

console.log(count.value)

app.mount('#app')