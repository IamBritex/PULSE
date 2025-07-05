if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registrado con éxito'))
    .catch(error => console.log('Fallo al registrar Service Worker:', error));
}