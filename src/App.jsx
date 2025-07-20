import React from "react"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="h-screen bg-[#212121] flex-center">
      <h1 className="text-indigo-400 text-3xl">Hello, GSAP!</h1>
    </div>
  )
}

export default App
