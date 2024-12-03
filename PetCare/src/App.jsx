import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import avatar from "./assets/smarties.jpg";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyButton() {
  return <button>Je suis un bouton</button>;
}

function AdminPanel() {
  return <h2>Bienvenue dans le panneau admin</h2>;
}

function LoginForm() {
  return <h2>Veuillez vous connecter</h2>;
}

function AboutPage() {
  return (
    <>
      <h1>À propos</h1>
      <p>
        Bien le bonjour.
        <br />
        Comment ça va ?
      </p>
      <img className="avatar" src={avatar} alt="Mon avatar"></img>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} />
    </>
  );
}

export default function MyApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Bienvenue dans mon appli</h1>
      <MyButton />
      <AboutPage />

      <div>
        <h1>Mon Application</h1>
        <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Déconnexion" : "Connexion"}
        </button>
      </div>
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
