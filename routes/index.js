document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  let isLoggedIn = false;
//sobre os botões de login e cadastro
  const updateButtons = () => {
    if (isLoggedIn) {
      loginBtn.classList.add('d-none');
      registerBtn.classList.add('d-none');
      logoutBtn.classList.remove('d-none');
    } else {
      loginBtn.classList.remove('d-none');
      registerBtn.classList.remove('d-none');
      logoutBtn.classList.add('d-none');
    }
  };

  loginBtn.addEventListener('click', () => {
    window.location.href = '/views/login.html';
  });

  registerBtn.addEventListener('click', () => {
    window.location.href = '/views/cadastro.html';
  });

  logoutBtn.addEventListener('click', () => {
    isLoggedIn = false;
    alert('Você saiu da conta!');
    updateButtons();
    window.location.href = '/views/index.html';
  });

  updateButtons();

  // Funcionalidade do header (ocultar o header ao rolar para baixo)
  let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}); 


});


