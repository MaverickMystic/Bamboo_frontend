import { Outlet } from "react-router"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import SocialNav from "../components/socialNav"
// import SakuraBackground from "../components/sakura"

const Main = () => {
  return (
    <div className="relative bg-bg min-h-screen">
     
      {/* <SakuraBackground /> */}
   
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <SocialNav /> 
        <Nav />
        
      </header>

      {/* 3. Main layout presentation view window */}
      <div className="relative z-10 pt-[50px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Main