<template>
  <div class="container">
    <div class="container container1">
      <div class="header">
        <router-link :to="{ path: '/' }" class=" btn-outline-warning">IR AL INICIO</router-link>
      </div>
      <div class="col-md-12">
        <h1>Películas mejor calificadas</h1>
      </div>
      
      <div class="wrapper">
        <div class="card1" v-for="pelicula in paginatedResults" :key="pelicula.id">
          <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" :alt="pelicula.title" />
          <div class="info">
            <h5 class="card-title">{{ pelicula.title }}</h5>
            <p>Estreno {{ pelicula.release_date }}</p>
            <router-link :to="{ name: 'DetallePelicula', params: { id: pelicula.id } }" class="btn">DETALLES</router-link>
          </div>
        </div>
      </div>
    </div>
    <Paginator :currentPage="currentPage" :totalPages="totalPages" :loadPreviousPage="loadPreviousPage"
      :loadNextPage="loadNextPage" :goToPage="goToPage" :pages="pages" />
  </div>
</template>
<script>
import PeliService from '@/service/PeliService';
import Paginator from '@/components/Paginator.vue';


export default {
  components: {
    Paginator,
  },
  data() {
    return {
      paginatedResults: [],
      currentPage: 1,
      totalPages: 1,
      pagesToShow: 5,
    };
  },
  computed: {
    pages() {
      const startPage = Math.max(1, this.currentPage - Math.floor(this.pagesToShow / 2));
      const endPage = Math.min(this.totalPages, startPage + this.pagesToShow - 1);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
  },
  methods: {
    async loadData() {
      try {
        const data = await PeliService.getCalifica(this.currentPage);
        this.paginatedResults = data.results;
        this.totalPages = data.total_pages;
      } catch (error) {
        console.error('Error al cargar las películas mejor calificadas:', error);
      }
    },
    async loadPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadData();
      }
    },
    async loadNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadData();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.loadData();
    },
  },
  created() {
    this.loadData();
  },
};
</script>