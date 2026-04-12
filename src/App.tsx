import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'
import AdultsPage from './pages/AdultsPage'
import KidsPage from './pages/KidsPage'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<AdultsPage />} />
        <Route path="/kids" element={<KidsPage />} />
      </Routes>
      <CartDrawer />
    </CartProvider>
  )
}
