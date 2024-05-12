import Banner from '../components/Banner'
import Header from '../components/Header'
import SecondBanner from '../components/SecondBanner'
import TextBanner from '../components/TextBanner'
import ThirdBanner from '../components/ThirdBanner'
import TopBanner from '../components/TopBanner'

function Home() {

  return (
    <div>
        <TopBanner></TopBanner>
        <Header></Header>
        <Banner></Banner>
        <TextBanner></TextBanner>
        <SecondBanner></SecondBanner>
        <ThirdBanner></ThirdBanner>
    </div>
  )
}

export default Home