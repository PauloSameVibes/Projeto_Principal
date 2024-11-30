
 const containers = document.querySelectorAll('.imagem-container');

 containers.forEach(container => {
     const original = container.querySelector('.primeiro_ativo__container__paises__imagem');
     const hover = container.querySelector('.primeiro_ativo__container__paises__imagem-hover');

     
     container.addEventListener('mouseenter', () => {
         original.style.display = 'none';
         hover.style.display = 'block';
     });

     
     container.addEventListener('mouseleave', () => {
         original.style.display = 'block';
         hover.style.display = 'none';
     });
 });    



const imagem1 = document.getElementById('favorito');
const imagem2 = document.getElementById('favorito1');


imagem1.addEventListener('click', function() {
  if (imagem1.src.includes('./Página--1/img/Favoritos1.svg')) {
    imagem1.src = './Página--1/img/Favoritos1.svg'; 
  } else {
    imagem1.src = './Página--1/img/FavoritosRed1.svg'; 
  }
    
});





imagem2.addEventListener('click', function() {
  if (imagem2.src.includes('./Página--1/img/Favoritos.svg')) {
    imagem2.src = './Página--1/img/FavoritosRed.svg'; 
  } else {
    imagem2.src = './Página--1/img/FavoritosRed.svg'; 
  }
});
