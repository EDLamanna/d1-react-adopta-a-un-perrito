import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Seccion from './components/Seccion'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header Encabezado="Adopta un perrito"/>
      <Seccion />
      <Footer />
    </>
  )
}

export default App
