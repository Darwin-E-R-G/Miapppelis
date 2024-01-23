<template>
  <div class="container">
    <h2>Generos</h2>
    <div class="btn-group" role="group" aria-label="Basic example" v-for="(pelicula, index) in peliculas" :key="index">
      <button type="button" class="espacio btn" :class="BotomColor(index)" @click="irAGenero(pelicula.id,)">
        {{ pelicula.name }}
      </button>
    </div>
  </div>
  <div>
    <router-link :to="{ path: '/cartele' }" class="btn btn-info espacio">CARTELERA</router-link>
    <router-link :to="{ path: '/califi' }" class="btn btn-info espacio">MEJOR CALIFICADAS</router-link>
    <router-link :to="{ path: '/popular' }" class="btn btn-info espacio">POPULARES</router-link>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService'
export default {
  name: 'VistaPrincipal',
  data() {
    return {
      peliculas: []
    }
  },
  async created() {
    this.peliculas = await PeliService.getPelicula()
    console.log(this.peliculas)
  },
  methods: {
    irAGenero(id) {
      this.$router.push({ path: '/genero/' + id });
    },
    BotomColor(index) {
      const colors = [
        'btn-outline-primary', 'btn-outline-secondary',
        'btn-outline-success', 'btn-outline-danger',
        'btn-outline-warning', 'btn-outline-info'

      ];
      return colors[index % colors.length];
    }
  }

}
</script>
<style>
.espacio {
  margin-top: 20px;
  margin-left: 20px;
}
</style>