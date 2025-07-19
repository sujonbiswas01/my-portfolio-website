import './App.css'
import MainLayout from './routes/Index'
import {HeroUIProvider} from "@heroui/react";
function App() {
  return (
    <>
    <HeroUIProvider>
      <MainLayout/>
    </HeroUIProvider>

    </>
  )
}

export default App
