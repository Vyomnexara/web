import ITHero from '../../components/it/ITHero'
import ITTicker from '../../components/it/ITTicker'
import ITAbout from '../../components/it/ITAbout'
import ITServices from '../../components/it/ITServices'
import ITWhyUs from '../../components/it/ITWhyUs'
import ITValues from '../../components/it/ITValues'
import ITTechStack from '../../components/it/ITTechStack'
import ITIndustries from '../../components/it/ITIndustries'
import ITMethodology from '../../components/it/ITMethodology'
import ITCTABand from '../../components/it/ITCTABand'
import Contact from '../../components/sections/Contact'

const ITHome = () => {
  return (
    <main>
      <ITHero />
      <ITTicker />
      <ITAbout />
      <ITServices />
      <ITWhyUs />
      <ITValues />
      <ITTechStack />
      <ITIndustries />
      <ITMethodology />
      <ITCTABand />
      <Contact />
    </main>
  )
}

export default ITHome
