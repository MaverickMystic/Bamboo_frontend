import { Outlet } from "react-router"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import SakuraBackground from "../components/sakura"

const Main = () => {
  return (
    <div className="bg-bg">
      <SakuraBackground />
    <Nav/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Main