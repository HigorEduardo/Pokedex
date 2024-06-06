import {motion} from 'framer-motion'
import Pokedex from './Pokedex'


export default function Conteudo (visivel){
    return(
        <motion.div
        initial={{opacity: 0, y:-50}}
        animate={{opacity:1, y:0}}
        exit={{oapcity:0, y:-50}}
        transition={{duration:1}}
        >
        {visivel && <Pokedex/>}
        </motion.div>
    )
}