// Importando o Firebase Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQPDY_3pX7Pk3eJzlz_pNpI9ge4VgEk2M",
  authDomain: "cardapio-61561.firebaseapp.com",
  projectId: "cardapio-61561",
  storageBucket: "cardapio-61561.appspot.com",
  messagingSenderId: "933007227902",
  appId: "1:933007227902:web:c4d867ee78cae3c08b1eaf",
  measurementId: "G-7BK5WLMMCK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const menuForm = document.getElementById('menuForm');
menuForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);

  if (name && description && price) {
    try {
      await addDoc(collection(db, "Menu"), {
        name,
        description,
        price
      });

      alert('Prato adicionado com sucesso!');
      menuForm.reset();
    } catch (error) {
      console.error("Erro ao adicionar prato: ", error);
      alert("Erro ao adicionar prato.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
