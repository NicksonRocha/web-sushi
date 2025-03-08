
document.getElementById('category-select').addEventListener('change', function() {
  const selectedCategory = this.value;
  
  const targetElement = document.getElementById(selectedCategory);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.sticky-category').offsetHeight,
      behavior: 'smooth'  
    });
  }
});

function verificarStatus() {
  const agora = new Date();
  const diaSemana = agora.getDay();
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  let status = 'Fechado'; 

  const horarios = {
    'terca-quinta': [
      { inicio: { h: 12, m: 0 }, fim: { h: 14, m: 0 } },  
      { inicio: { h: 18, m: 30 }, fim: { h: 22, m: 0 } }  
    ],
    'sexta-sabado': [
      { inicio: { h: 12, m: 0 }, fim: { h: 14, m: 0 } }, 
      { inicio: { h: 18, m: 30 }, fim: { h: 23, m: 20 } } 
    ],
    'domingo': [
      { inicio: { h: 12, m: 0 }, fim: { h: 14, m: 0 } },  
      { inicio: { h: 18, m: 30 }, fim: { h: 22, m: 0 } }  
    ]
  };

  function estaAberto(horario) {
    const { inicio, fim } = horario;
    const atualMinutos = horas * 60 + minutos;
    const inicioMinutos = inicio.h * 60 + inicio.m;
    const fimMinutos = fim.h * 60 + fim.m;
    return atualMinutos >= inicioMinutos && atualMinutos <= fimMinutos;
  }

  if (diaSemana >= 2 && diaSemana <= 4) { 
    horarios['terca-quinta'].forEach(horario => {
      if (estaAberto(horario)) status = 'Aberto';
    });
  } else if (diaSemana === 5 || diaSemana === 6) { 
    horarios['sexta-sabado'].forEach(horario => {
      if (estaAberto(horario)) status = 'Aberto';
    });
  } else if (diaSemana === 0) { 
    horarios['domingo'].forEach(horario => {
      if (estaAberto(horario)) status = 'Aberto';
    });
  }

  document.getElementById('status-restaurant').textContent = status;

  document.getElementById('status-restaurant').classList.toggle('text-success', status === 'Aberto');
  document.getElementById('status-restaurant').classList.toggle('text-danger', status === 'Fechado');
}

verificarStatus();
