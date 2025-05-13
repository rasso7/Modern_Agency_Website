// components/Layout.jsx
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import MarqueeSection from './MarqueeSection'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the nested route (Home, About, etc.) */}
      </main>
      <MarqueeSection />
      <Footer />
    </>
  )
}

export default Layout
