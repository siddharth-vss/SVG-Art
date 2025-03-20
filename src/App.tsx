import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { Mahadev, SP, Spidey } from './components'
import logo from './assets/logo.svg'
import mahakal from './assets/mahakal.svg'
import spidy from './assets/spidy.svg'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/sp" element={<SP />} />
          <Route path="/mahadev" element={<Mahadev />} />
          <Route path="/spidy" element={<Spidey />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <Link to="/sp">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={logo} alt="SVG Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SP's LOGO</div>
            <p className="text-gray-700 text-base">
              This is a card that displays an SVG image and has the title
              "Folder".
            </p>
          </div>
        </div>
      </Link>
      <Link to="/mahadev">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={mahakal} alt="SVG Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MAHADEV</div>
            <p className="text-gray-700 text-base">
              This is a card that displays an SVG image and has the title
              "Folder".
            </p>
          </div>
        </div>
      </Link>
      <Link to="/spidy">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={spidy} alt="SVG Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SPidy</div>
            <p className="text-gray-700 text-base">
              This is a card that displays an SVG image and has the title
              "Folder".
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}