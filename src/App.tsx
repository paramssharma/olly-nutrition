import Header from './components/Header'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Transparency from './components/Transparency'
import Products from './components/Products'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Transparency />
        <Products />
        <SocialProof />
        <HowItWorks />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
