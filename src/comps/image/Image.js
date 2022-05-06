import React from 'react'
import './image.css'

import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Image = ({ doc }) => {
  return (
    <AnimatePresence>
        <motion.div className='img__wrap'
    layout
    whileHover={{ opacity : 1 }}
    >
        <motion.img src={doc.url} alt="uploadedpic" 
          initial={{opacity: 0}}
          animate={{ opacity: 1 }}
          transition= {{ delay: 1 }}
        />
        {/* <div>delete</div> */}
    </motion.div>
    </AnimatePresence>
    
  )
}

export default Image