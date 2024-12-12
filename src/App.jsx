import { useEffect } from 'react';
import './App.css'
import FormularioDatos from './components/FormularioDatos'

function App() {

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  

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
