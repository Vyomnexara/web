import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Values from '../components/sections/Values'
import Credentials from '../components/sections/Credentials'
import Industries from '../components/sections/Industries'
import Methodology from '../components/sections/Methodology'
import CTABand from '../components/sections/CTABand'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <WhyUs />
      <Values />
      <Credentials />
      <Industries />
      <Methodology />
      <CTABand />
      <Contact />
    </main>
  )
}

export default Home
