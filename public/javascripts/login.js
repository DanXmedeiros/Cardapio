import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAQPDY_3pX7Pk3eJzlz_pNpI9ge4VgEk2M",
  authDomain: "cardapio-61561.firebaseapp.com",
  projectId: "cardapio-61561",
  storageBucket: "cardapio-61561.appspot.com",
  messagingSenderId: "933007227902",
  appId: "1:933007227902:web:c4d867ee78cae3c08b1eaf",
  measurementId: "G-7BK5WLMMCK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Usuário logado:', userCredential.user);
      alert('Login realizado com sucesso!');
      window.location.href = '/views/index.html';
    })
    .catch((err) => {
      console.error('Erro:', err.message);
      alert('Erro: ' + err.message);
    });
});

