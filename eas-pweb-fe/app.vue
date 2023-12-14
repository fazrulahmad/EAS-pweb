<template>
  <form @submit.prevent="register">
    <label>Nama:</label>
    <input type="text" v-model="formData.nama" required><br>
    
    <label>Email:</label>
    <input type="email" v-model="formData.email" required><br>
    
    <label>Asal Sekolah:</label>
    <input type="text" v-model="formData.asalSekolah" required><br>
    
    <button type="submit">Daftar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        asalSekolah: ''
      }
    };
  },
  methods: {
    register() {
      // Kirim data ke CMS (gunakan axios atau fetch untuk HTTP request)
      // Pastikan untuk menyesuaikan endpoint dan cara pengiriman data ke CMS
      // Misalnya, jika menggunakan Axios:
      axios.post('/api/pendaftar/657ab3d03135de08343b76d9?locale=undefined&draft=false&depth=1', this.formData)
         .then(response => {
           console.log('Pendaftaran berhasil!', response.data);
         })
         .catch(error => {
           console.error('Gagal mendaftar:', error);
         });
    }
  }
};
</script>
