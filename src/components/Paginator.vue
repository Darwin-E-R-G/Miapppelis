<template>
  <div class="pagination-container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button class="page-link" @click="loadPreviousPage" :disabled="currentPage === 1">Anterior</button></li>
        <li class="page-item" v-for="page in pages" :key="page" :class="{ 'active': page === currentPage }">
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item"><button class="page-link" @click="loadNextPage" :disabled="currentPage === totalPages">Siguiente</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    loadPreviousPage: {
      type: Function,
      required: true,
    },
    loadNextPage: {
      type: Function,
      required: true,
    },
    goToPage: {
      type: Function,
      required: true,
    },
    pages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.page-item {
  margin-right: 5px; /* Espaciado entre los botones */
}

.page-link {
  cursor: pointer;
}

.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}
</style>
