// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQPDY_3pX7Pk3eJzlz_pNpI9ge4VgEk2M",
    authDomain: "cardapio-61561.firebaseapp.com",
    projectId: "cardapio-61561",
    storageBucket: "cardapio-61561.firebasestorage.app",
    messagingSenderId: "933007227902",
    appId: "1:933007227902:web:c4d867ee78cae3c08b1eaf",
    measurementId: "G-7BK5WLMMCK"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Manipular o formulário de login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Tentar autenticar o usuário
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Exibe informações do usuário no console para depuração
        console.log('Usuário logado:', userCredential.user);
  
        // Redireciona após login bem-sucedido
        alert('Login realizado com sucesso!');
        window.location.href = 'pagina_destino.html'; // Substitua pelo caminho correto
      })
      .catch((err) => {
        // Exibe erro, caso a autenticação falhe
        console.error('Erro:', err.message);
        alert('Erro: ' + err.message);
      });
  });