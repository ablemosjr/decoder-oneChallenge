const receivedText = document.querySelector('#textDecoder');
const buttonCryptograph = document.querySelector('#btn-crypto');
const buttonDescriptograph = document.querySelector('#btn-descripto');
const decodedArea = document.querySelector('.decodedArea');

const Views = {
  DecodedArea: () => {
    return `
      <img class="decodedArea__image" src="./assets/images/hero-image.svg" alt="Hero image">
      
      <p class="decodedArea__void">
        Nenhuma mensagem encontrada
      </p>
      <h1 class="decodedArea__description">
        Digite um texto que você deseja criptografar ou descriptografar.
      </h1>
    `;
  },

  DecodedAreaReturned: (text) => {
    return `   
      <p class="decodedArea__response">${text}</p>
  
      <button class="btn btn--transparent">Copiar</button>
    `;
  }
}

function isTextNull(text) {
  return text == null || text.trim().length == 0;
}

function cryptograph() {
  const text = receivedText.value;
  const cryptoMap = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };

  if (isTextNull(text)) {
    decodedArea.classList.remove('decodedArea--returned');
    decodedArea.innerHTML = Views.DecodedArea();
  } else {
    const newText = text.split('').map((word) => 
      cryptoMap[word] || word).join('');

    decodedArea.classList.add('decodedArea--returned');
    decodedArea.innerHTML = Views.DecodedAreaReturned(newText);
  }
}

function descriptograph() {
  const text = receivedText.value;
  const descriptoMap = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };
  const pattern = /ai|enter|imes|ober|ufat/g;

  if (isTextNull(text)) {
    decodedArea.classList.remove('decodedArea--returned');
    decodedArea.innerHTML = Views.DecodedArea();
  } else {
    const newText = text.split(' ').map((word) => 
    word.replace(pattern, match => 
      descriptoMap[match])
    ).join(' ');

    decodedArea.classList.add('decodedArea--returned');
    decodedArea.innerHTML = Views.DecodedAreaReturned(newText);
  }
}

buttonCryptograph.addEventListener('click', () => {
  cryptograph();
});

buttonDescriptograph.addEventListener('click', () => {
  descriptograph();
});

