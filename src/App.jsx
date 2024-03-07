import { useEffect} from 'react'
import './App.css'
import { UseContext} from './context/newsContext'

function App() {
  const {news,getNewsF1 } = UseContext();

    useEffect(()=>{
      getNewsF1();
    },[])
  return (
    <>
    <div>hola </div>
    </>
  )
}

export default App
