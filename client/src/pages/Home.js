import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Data from "../DataFake"

const Home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Data /> 
    </div>
  )
}

export default Home

