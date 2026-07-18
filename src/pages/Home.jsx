import Hero from '../components/sections/Hero'
import Plans from '../components/sections/Plans'
import TrustLogos from '../components/sections/TrustLogos'
import Gallery from '../components/sections/Gallery'
import Stats from '../components/sections/Stats'
import CityGrid from '../components/sections/CityGrid'
import Pricing from '../components/sections/Pricing'
import HowItWorks from '../components/sections/HowItWorks'
import MarketplaceLogos from '../components/sections/MarketplaceLogos'
import ComparisonTable from '../components/sections/ComparisonTable'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Plans />
      <TrustLogos />
      <Gallery />
      <Stats />
      <CityGrid />
      <Pricing />
      <HowItWorks />
      <MarketplaceLogos />
      <ComparisonTable />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
