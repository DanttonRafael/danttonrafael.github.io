var showButton = document.getElementById('showImageBtn');
showButton.addEventListener('click', function() {
  var imageContainer = document.getElementById('imageContainer');
  // Verifica se o conteúdo já foi adicionado na página
  if (!imageContainer.querySelector('img')) {
    var image = document.createElement('img');
    image.src = 'banner.jpeg';
    imageContainer.appendChild(image);

    // Adicione também um texto abaixo da imagem.
    var text = document.createElement('p');
    text.innerHTML = 'A pessoa com quem tive uma conexão imensa, que me apoia e está comigo, que me motiva e me faz bem, é você. A que tem o sorriso mais lindo que já vi em toda a minha vida, que faz gracinhas para eu rir. Amor, você é maravilhosa. Me orgulho de você todos os dias, da pessoa em que és, da sua inteligência e esforço, da sua competência e capacidade. É nervosinha às vezes, é errado eu achar isso um charme? Quero continuar fazendo parte da sua vida, você é a minha pessoa! Obrigada por cada momento, por tudo que já fez por mim...';
    imageContainer.appendChild(text);

    // Adicione um botão para ir para uma outra pagina
    var button = document.createElement('button');
    button.innerHTML = 'Agora vamos ver um pouco nossa historia?';
    button.addEventListener('click', function() {
      window.location.href = 'calendar.html';
    });
    imageContainer.appendChild(button);
  }
  
  // Desabilita o botão para evitar que o conteúdo seja exibido novamente
  showButton.disabled = true;
});
