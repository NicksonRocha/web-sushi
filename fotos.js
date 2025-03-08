
const fotos = [
    { src: 'public/restaurante-1.jpg', alt: 'Foto do restaurante 1' },
    { src: 'public/restaurante-2.jpg', alt: 'Foto do restaurante 2' },
    { src: 'public/restaurante-3.jpg', alt: 'Foto do restaurante 3' },
  ];
  
  const carouselInner = document.getElementById('carouselInner');
  
  fotos.forEach((foto, index) => {
    const div = document.createElement('div');
    div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    div.innerHTML = `
      <img src="${foto.src}" class="d-block w-100" alt="${foto.alt}">
    `;
    carouselInner.appendChild(div);
  });
  