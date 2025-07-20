import React from "react"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { Navbar, Hero, Cocktails } from "./components/components.js"

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />

      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
