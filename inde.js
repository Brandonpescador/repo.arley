const express = require('express');
const inde = express();  // Cambiado de 'app' a 'inde'
const port = 10101;

// Endpoint de ejemplo
inde.get('/api', (req, res) => {
  res.json({ mensaje: '¡Hola, mundo!' });
});

// Manejo de errores para rutas no encontradas
inde.use((req, res, next) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Inicia el servidor en el puerto especificado
inde.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
