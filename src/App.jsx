import Header from "./components/Header"
import Hero from "./components/Hero"
import First from "./components/First"
import Product from "./components/Prods"
import About from "./components/About"
import Message from "./components/Message"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#151719]">
      <Header />
      <Hero />
      <First />
      <Product />
      <About />
      <Message />
      <Footer />
    </div>
  )
}

export default App
