self.addEventListener('install', (event) => {
    // Realizar as configurações iniciais do service worker
  });
  
  self.addEventListener('activate', (event) => {
    // Executar ações de ativação do service worker
  });
  
  self.addEventListener('fetch', (event) => {
    // Intercepta as requisições de rede, se necessário
  });
  
  function updateLocation() {
    // Coloque aqui o código para atualizar a localização do agente no Firestore
    // Isso pode ser baseado em tempo ou em algum evento específico
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const location = new firebase.firestore.GeoPoint(latitude, longitude);
            updateAgentLocation(use.email, location);
          },
          (error) => {
            console.error('Erro ao obter localização:', error);
          }
        );
      } else {
        console.error('Geolocalização não é suportada neste navegador');
      }
    };
  
    getLocation();
  }
  
  setInterval(() => {
    updateLocation();
  }, 5000); // Executar a cada 5 segundos
  