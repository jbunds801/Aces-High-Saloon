import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home"
import Events from './pages/Events';
import FoodDrinks from './pages/FoodDrinks';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <section id="center">
        <>
          <BrowserRouter>
            <PageLayout />
            <Routes>
              <Route>
                <Route path='/' element={<Home />} />
                <Route path='/events' element={<Events />} />
                <Route path='/fooddrinks' element={<FoodDrinks />} />
                <Route path='/cart' element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      </section>
    </>
  )
}

export default App
