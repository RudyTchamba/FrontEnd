// First Way of creating a components

/*function App() {
  return <h1>Hello World !</h1>
}*/

/*const App = () => {
  return <h1>Hello World !</h1>
}*/

// For the Second Exercise

/*import Greet from "./components/Exercise2/Greet";

const App = () => {
  return <div>
    <Greet />
  </div>
}*/

// For the third Exercise

/*import Header from './components/Exercise3/Header';
import MainContent from './components/Exercise3/MainContent';
import Footer from './components/Exercise3/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}*/

//Learing JSX

/*
import JSXRules from "./components/Exercise5/JSXRules";

const App = () => {
  return (
    <section id="section">
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragrph Content</p>
      </article>
    </section>
  )
}*/

/* For  Exercise 4
import WelcomeMessage from './components/Exercice4/WelcomeMessage';

const App = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
  )
}*/

/* For  Exercise 5
export const App = () => {
  return (
    <div>
      <JSXRules />
    </div>
  )
}*/


/* Learning Jsx Expressions

const App = () => {

  const myName = "Rudy Tchamba";

  const multiply = (a, b) => a * b;

  const specialClass = 'simple-class';

  return <section>
    <p>2 + 2 = {2 + 2}</p>

    <h1>myName is {myName}</h1>

    <p>My Friends List: {["Meka", "Zogo", "Christian", "Ava"]}</p>

    <p>2 * 2 = {multiply(2, 2)}</p>

    <p className={specialClass}>This is special class</p>
  </section>
}*/


/* For  Exercise 6
import Greeting from "./components/Exercise6/Greeting";
import ProductInfo from "./components/Exercise6/ProductInfo";

const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
    </div>
  )
}*/

// Learning List in Reactjs
/*const App = () => {

  const numbers =  [1, 2, 3, 4, 5]

  return <main>

    {numbers.map((number) => (

      <ul key={number}>

        <li>{number}</li>

      </ul>

    ))}

  </main>
}*/

/*const App = () => {

  const userInfo = [
    {
      username: "Rudy",

      email: "rudy@gmail.com",

      location: "CMR",
    },

    {
      username: "Tchamba",

      email: "tchamba@gmail.com",

      location: "SAF",
    },
     
    {
      username: "itiel",

      email: "itiel@gmail.com",

      location: "NGR",
    }
  ]

  return <main>

    { userInfo.map((user) => (

      <ul key={Math.random()}>

        <li>{user.username}</li>
         
        <li>{user.email}</li>
         
        <li>{user.location}</li>

      </ul>

    ))}

    { userInfo.map(({username, email, location}) => (

      <ul key={Math.random()}>

        <li>{username}</li>
         
        <li>{email}</li>
         
        <li>{location}</li>

      </ul>

    ))}

  </main>
}*/


import ProductList from "./components/Exercise7/ProductList";
import UserList from "./components/Exercise7/UserList";

const App = () => {
  return (
    <div>
      {/* <UserList /> */}
      <ProductList />
    </div>
  )
}


export default App;