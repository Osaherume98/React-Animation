
import './App.css'
import { motion } from "motion/react";

function App() {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0}} 
    animate={{ opacity: 1}}
    transition={{ duration: 1}} >
      <h1>Learning Animation!</h1>
    </motion.div>
    </>
  )
}

export default App
