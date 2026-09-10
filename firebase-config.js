// ⚠️ IMPORTANTE: substitua os valores abaixo pelos dados do SEU projeto Firebase.
// Você encontra essas informações em:
// Firebase Console > Configurações do projeto (⚙️) > Seus apps > SDK setup and configuration

const firebaseConfig = {
  apiKey: "AIzaSyAH-bzmiKskqPxEsLOW4enr0RbEIHCnT2s",
  authDomain: "devtech-tecnologias.firebaseapp.com",
  projectId: "devtech-tecnologias",
  storageBucket: "devtech-tecnologias.firebasestorage.app",
  messagingSenderId: "1020067041961",
  appId: "1:1020067041961:web:183845ca3f44e6801acfb8"
};

// Inicializa o Firebase e cria os objetos que as páginas vão usar:
// "auth" para login/cadastro, "db" para salvar dados (Firestore).
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
