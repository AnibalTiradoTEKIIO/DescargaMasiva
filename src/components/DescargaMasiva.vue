<!-- DescargaMasiva.vue -->

<template>
    <div>
      <h2>Descarga Masiva</h2>
          <!-- Formulario para capturar datos del usuario -->
      <form @submit.prevent="enviarSolicitud">
      <label for="rfcEmisor">RFC Emisor:</label>
      <input type="text" id="rfcEmisor" v-model="rfcEmisor" required>
      <label for="rfcReceptor">RFC Receptor:</label>
      <input type="text" id="rfcReceptor" v-model="rfcReceptor" required>
    <!-- Otros campos del formulario -->
        <button type="submit">Enviar Solicitud</button>
      <button @click="consultarEstatus">Consultar Estatus</button>
      </form>
    </div>
  </template>
  
  <script>
        import axios from 'axios';
        const apiUrl = 'https://descargamasiva.pade.mx/api/';

        export default {
        data() {
            return {
            rfcEmisor: '',
            rfcReceptor: '',
            rfcSolicitante:'',
            fechaInicio:'',
            fechaFinal:'',
            tipoSolicitud:'',
            pfx:'',
            password:'',
            usuario:'',
            passPade:'',
            contrato:'',
            // Otros datos necesarios para la solicitud
            };
        },
        methods: {
            async enviarSolicitud() {
            try {
                const response = await axios.post(apiUrl + 'solicitud/generar', {
                rfcEmisor: this.rfcEmisor,
                rfcReceptor: this.rfcReceptor,
                // Otros datos de la solicitud
                });
                console.log('Solicitud enviada:', response.data);
                // Aquí puedes manejar la respuesta según tus necesidades (mostrar mensajes, redirigir, etc.)
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);
                // Manejo de errores
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
  