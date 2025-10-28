import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav.jsx'
import Hero from './Page/Hero.jsx'
import Section2 from "./Page/Section2.jsx";
import Section3 from './Page/Section3.jsx'
import Section4 from './Page/Section4.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        
      </div>
    </>
  );
}

export default App
