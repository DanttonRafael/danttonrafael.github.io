// Obtém a referência dos botões
const simButton = document.getElementById('simButton');
const naoButton = document.getElementById('naoButton');

// Define o evento de passar o mouse por cima do botão "Não"
naoButton.addEventListener('mouseover', moveButton);

// Função para mover o botão "Não" para uma posição aleatória
function moveButton() {
  // Obtém as dimensões do botão "Não"
  const buttonWidth = naoButton.offsetWidth;
  const buttonHeight = naoButton.offsetHeight;

  // Obtém as dimensões do container
  const containerWidth = document.querySelector('.content').offsetWidth;
  const containerHeight = document.querySelector('.content').offsetHeight;

  // Calcula as coordenadas x e y para uma posição aleatória dentro do container
  const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

  // Aplica as novas coordenadas ao estilo do botão "Não"
  naoButton.style.left = `${randomX}px`;
  naoButton.style.top = `${randomY}px`;
}


// Se clicar em "Sim", exibe vai para uma pagina com um texto
simButton.addEventListener('click', function() {
    window.location.href = 'aceite.html';
    }
);