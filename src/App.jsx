import Navbar from './components/Navbar'
import ArtistName from "./components/ArtistName"
import { Outlet } from 'react-router-dom'
import './App.css'


export default function App() {

  return (
    <>
      <Navbar />
      <ArtistName />
      <Outlet />
    </>
  )
}

