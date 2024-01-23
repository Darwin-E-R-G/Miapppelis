<template>
  <div class="container container1">
    <div class="header">
      <router-link :to="{ path: '/' }" class="btn-outline-warning">IR AL INICIO</router-link>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Detalle</h1>
      </div>
      <div class="col-md-6" v-if="pelicula">
        <div class="card">
          <img :src="'https://image.tmdb.org/t/p/w500/' + pelicula.backdrop_path" class="card-img-top"
            :alt="pelicula.title" />
        </div>
      </div>
      <div class="col-md-6">
        <h2 v-if="pelicula">{{ pelicula.title }}</h2>
        <p v-if="pelicula">Fecha de Estreno: {{ pelicula.release_date }}</p>
        <h2>Resumen</h2>
        <p>{{ pelicula.overview }}</p>
        <details open>
          <summary>Generos</summary>
          <ul class="genres-list">
            <template v-for="(genero, index) in pelicula.genres">
              <li>{{ genero.name }}{{ index < pelicula.genres.length - 1 ? ',' : '.' }}</li>
            </template>
          </ul>
        </details>
        <details open>
          <summary>Empresas productoras</summary>
          <ul class="genres-list">
            <template v-for="(productora, index) in pelicula.production_companies">
              <li>{{ productora.name }}{{ index < pelicula.production_companies.length - 1 ? ',' : '.' }}</li>
            </template>
          </ul>
        </details>
        <button type="button" class="btn btn-outline-primary" @click="cargarTrailer">TRÁILER</button>
      </div>
    </div>
  </div>
  <div v-if="mostrarInfo === 'trailer'" class="centered-container">
    <div v-if="trailerKey === null && errorCargaTrailer === null"></div>
    <iframe v-else-if="trailerKey" class=".responsive-iframe" width="450" height="200" :src="'https://www.youtube.com/embed/' + trailerKey"
      frameborder="0" allowfullscreen></iframe>
    <div v-else>
      <p>{{ errorCargaTrailer }}</p>
    </div>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService';

export default {
  name: 'DetallePeliculaView',
  data() {
    return {
      pelicula: {},
      trailerKey: null,
      errorCargaTrailer: null,
      mostrarInfo: 'trailer',
    };
  },
  async created() {
    try {
      const peliculaId = this.$route.params.id;
      this.pelicula = await PeliService.getDetallePelicula(peliculaId);
    } catch (error) {
      console.error('Error al cargar los detalles de la película:', error);
    }
  },
  methods: {
    async cargarTrailer() {
      try {
        const peliculaId = this.$route.params.id;
        const key = await PeliService.getTrailer(peliculaId);
        if (key) {
          this.trailerKey = key;
          this.errorCargaTrailer = null;
        } else {
          this.trailerKey = null;
          this.errorCargaTrailer = 'tráiler no disponible.';
        }
      } catch (error) {
        console.error('Error al cargar el tráiler:', error);
        this.trailerKey = null;
        this.errorCargaTrailer = 'Error al cargar el tráiler.';
      }
    },
  }
};
</script>

<style scoped>
.centered-container {
  widows: 400px;
  margin-top: 10px;
}

.centered-container>div {
  text-align: center;
}

/* Estilos para hacer el iframe responsivo */
.responsive-iframe {
  width: 400%;
  height: auto;
  padding-bottom: 80%;
  /* Ajusta este valor según tus necesidades */
}

/* Media query para ajustar el tamaño del iframe en pantallas más grandes */
@media (min-width: 1200px) {
  .responsive-iframe {
    padding-bottom: 80%;
    /* Mantén la proporción de aspecto 16:9 en pantallas más grandes */
  }
}
</style>