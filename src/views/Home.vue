<!-- Home.vue -->

<template>
    <div>
      <h1>Bienvenido a tu Aplicación</h1>
      <DescargaMasiva />
    </div>
  </template>
  
  <script>
  import DescargaMasiva from '@/components/DescargaMasiva.vue';
  
  export default {
    components: {
      DescargaMasiva,
    },
  };
  </script>
  