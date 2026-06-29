import { Outlet } from "react-router"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import SocialNav from "../components/socialNav"
// import SakuraBackground from "../components/sakura"

const Main = () => {
  return (
    <div className="relative bg-bg min-h-screen">
      {/* Fixed header with auto height to accommodate content */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <SocialNav /> 
        <Nav />
      </header>

      {/* 
        Content container with dynamic spacing.
        The padding-top accommodates:
        - SocialNav (~40px for small avatar + padding)
        - Nav (~60px on mobile with py-3, ~72px on desktop with h-18)
        Total: ~100px on mobile, ~112px on desktop (adjust as needed for your actual component heights)
      */}
      <div className="relative z-10 pt-[120px] md:pt-[100px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Main