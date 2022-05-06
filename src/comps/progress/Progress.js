import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage';
import './progress.css'

import {motion} from 'framer-motion/dist/framer-motion'

const Progress = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    useEffect(() => {
    
        if(url){
            setFile(null);
        }
      
    }, [url, setFile])
    

  return (
        <motion.div className='progress__bar' 
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >
    
        </motion.div>
    
    
    
  )
}

export default Progress