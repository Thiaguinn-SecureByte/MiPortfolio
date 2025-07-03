const btnVolverArriba = document.querySelector('.btn-volver-arriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnVolverArriba.classList.add('show');
    } else {
      btnVolverArriba.classList.remove('show');
    }
  });