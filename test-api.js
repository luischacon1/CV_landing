// Script de prueba para verificar la API de chat
const testAPI = async () => {
  try {
    console.log('🧪 Probando API de chat...');
    
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hola Luis, cuéntame sobre ti',
        currentSection: 'home'
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ API funcionando correctamente!');
      console.log('📝 Respuesta de Luis:', data.content);
    } else {
      console.log('❌ Error en la API:', data.error);
      if (data.error.includes('API key')) {
        console.log('🔑 Necesitas poner tu API key real en .env.local');
      }
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message);
  }
};

// Ejecutar la prueba
testAPI(); 