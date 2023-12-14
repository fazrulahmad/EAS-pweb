<template>
    <form @submit.prevent="checkStatus">
      <label>Masukkan Email:</label>
      <input type="email" v-model="email" required><br>
      
      <button type="submit">Periksa Status</button>
    </form>
    <div v-if="Status !== null">
      <p>Status Pendaftaran: {{ status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        status: null
      };
    },
    methods: {
      checkStatus() {
         axios.get(`/api/pendaftar/657ab3d03135de08343b76d9?locale=undefined&draft=false&depth=1=${this.email}`)
           .then(response => {
             this.Status = response.data.Status;
           })
           .catch(error => {
             console.error('Gagal memeriksa status:', error);
           });
      }
    }
  };
  </script>
  