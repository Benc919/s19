//U20240015

document.getElementById('btnObtenerFrase').addEventListener('click', obtenerFrase);

function obtenerFrase() {
  const url = 'https://api.quotable.io/random';

  fetch(url)
      .then(respuesta => respuesta.json())  // Procesa la respuesta en formato JSON
      .then(data => {
          // Extrae la frase y el autor del objeto recibido
          const frase = data[0].q;
          const autor = data[0].a;
          
          // Muestra la frase y el autor en los elementos HTML
          document.getElementById('frase').textContent = `"${frase}"`;
          document.getElementById('autor').textContent = `- ${autor}`;
      })
      .catch(error => {
          // Maneja errores si la solicitud falla
          console.error('Error al obtener la frase:', error);
          document.getElementById('frase').textContent = 'Hubo un error al obtener la frase.';
      });
}
