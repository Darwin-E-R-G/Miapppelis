import axios from "axios"
const apiKey = '492d218f089fd8c20e9c3a945b482a9f'; 



const basUrl = 'https://api.themoviedb.org/3/'

export default{
    async getPelicula(){
        return await axios.get(`${basUrl}genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGeneroPelicula(id,currentPage){
        return await axios.get(`${basUrl}discover/movie?page=${currentPage}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getCartele(currentPage){
        return await axios.get(`${basUrl}movie/now_playing?page=${currentPage}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getCalifica(currentPage){
     
      return await axios.get(`${basUrl}movie/top_rated?page=${currentPage}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
      .then(response =>{
          return response.data
      })
      .catch(error =>{
          console.log (error)
      })
  },
  async getPopular(currentPage){
    return await axios.get(`${basUrl}movie/popular?page=${currentPage}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
    .then(response =>{
        return response.data
    })
    .catch(error =>{
        console.log (error)
    })
},
    async getDetallePelicula(peliculaId) {
        try {
          const response = await axios.get(`${basUrl}movie/${peliculaId}?api_key=${apiKey}&language=es-CO`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la película:', error);
          throw error; 
        }
    
    },
    async getTrailer(peliculaId) {
      try {
        const response = await axios.get(`${basUrl}movie/${peliculaId}/videos?api_key=${apiKey}&language=es-CO`);
        const videos = response.data.results;
        console.log(videos);
        if (videos.length > 0) {
          const KeyVideo = videos[0]; 
          console.log(KeyVideo.key); 
          return KeyVideo.key;
        } else {
          console.log('No se encontraron videos para la película.');
          return null; 
        }
      } catch (error) {
        console.error('Error al obtener el tráiler:', error);
        throw error;
      }
    },
    
    };
    


