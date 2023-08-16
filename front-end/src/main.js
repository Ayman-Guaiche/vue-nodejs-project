import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(), // hash, memory or undefined (default to "hash")
    routes : [{
        path : '/cart',
        component : ShoppingCartPage,
    },
    {
        path : '/products',
        component : ProductsPage,
    },
    {
        path : '/products/:productId',
        component : ProductDetailPage,
    }

    ]
}))
.mount('#app')
