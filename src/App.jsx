import './App.css'
import FormularioDatos from './components/FormularioDatos'

function App() {

  return (
    <div className='w-full'>
      <h1 className="text-3xl font-bold text-center py-5 mb-3">
        Generador de Placas de Bronce
      </h1>
      <div className='flex mx-20'>
         <FormularioDatos />
      </div>
    </div>
  )
}

export default App
