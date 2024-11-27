import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Usuário criado:", user);
    alert(`Conta criada para ${name}!`);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    alert(`Erro: ${error.message}`);
  }
});
