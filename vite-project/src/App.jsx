import './App.css'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Conteudo from './components/Conteudo'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
  border-top-left-radius: 50%; /* Arredonda a borda superior esquerda */
  border-top-right-radius: 50%; /* Arredonda a borda superior direita */
`;

function App() {
  const [Carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <div className='center'>
    {Carregando ?(
      <Spinner 
      animate={{rotate:360}}
      transition={{duration:1, repeat:Infinity, ease:"linear"}}
      />
    ):(
     <Conteudo visivel={!Carregando}/>
    )
    
  }
      </div>
    </>
  )
}

export default App