import React from "react"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { Navbar, Hero, Cocktails, About, Art, Menu, Contact } from "./components/components.js"

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />

      {/* <div className="h-dvh"></div> */}
    </main>
  )
}

export default App
