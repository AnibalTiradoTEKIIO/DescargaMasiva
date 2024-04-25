<!-- DescargaMasiva.vue -->

<template>
    <div>
      <h2>Descarga Masiva</h2>
      <button @click="generarSolicitud">Generar Solicitud</button>
      <button @click="consultarEstatus">Consultar Estatus</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const apiUrl = 'https://descargamasiva.pade.mx/api/';
  
  export default {
    methods: {
      async generarSolicitud() {
        try {
          const response = await axios.post(apiUrl + 'solicitud/generar', {
            // Aquí colocarías los parámetros requeridos para generar la solicitud
            rfcEmisor: 'RFC del emisor',
            rfcReceptor: 'RFC del receptor',
            rfcSolicitante: rfcSolicitante,


          });
          console.log('Solicitud generada:', response.data);
        } catch (error) {
          console.error('Error al generar la solicitud:', error);
        }
      },
      async consultarEstatus() {
        try {
          const response = await axios.post(apiUrl + 'solicitud/estatus', {
            numeroSolicitud: 'Número de solicitud a consultar',
            // Otros parámetros necesarios
          });
          console.log('Estatus de la solicitud:', response.data);
        } catch (error) {
          console.error('Error al consultar el estatus:', error);
        }
      },
    },
  };
  </script>
  