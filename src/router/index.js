import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'
import CarteleraView from '../views/CarteleraView.vue'
import MejorCaliView from '../views/MejorCaliView.vue'
import PopularesView from '../views/PopularesView.vue'
import DetailView from '../views/DetailView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/genero/:id',
    name: 'genero',
    component: GeneroPeliculaView,
  },
  {
    path: '/cartele',
    name: 'cartelera',
    component: CarteleraView,
  },

  {
    path: '/califi',
    name: 'calificadas',
    component: MejorCaliView,
  },
  {
    path: '/popular',
    name: 'populares',
    component: PopularesView,
  },

  {
    path: '/details/:id',
    name: 'DetallePelicula',
    component: DetailView,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
