let corpo = document.getElementById('container');
corpo.style.background = '#F3F3F3';

let headerContainer = document.getElementById('header-container');
headerContainer.style.background = '#00B069';

let fundoDivsEsq = document.querySelectorAll('.emergency-tasks')[0];
fundoDivsEsq.style.background = '#FF9F84';

let fundoDivsDir = document.getElementsByClassName('no-emergency-tasks')[0];
fundoDivsDir.style.background = '#F9DB5E';

let h3Esq = [document.querySelectorAll('.emergency-tasks h3')[0], document.querySelectorAll('.emergency-tasks h3')[1]];

for (let i = 0; i < h3Esq.length; i += 1) h3Esq[i].style.background = '#A500F3';

let h3Dir = [document.querySelectorAll('.no-emergency-tasks h3')[0], document.querySelectorAll('.no-emergency-tasks h3')[1]];

for (let i = 0; i < h3Dir.length; i += 1) h3Dir[i].style.background = '#232525';

let rodape = document.getElementById("footer-container");

rodape.style.background = '#003533';