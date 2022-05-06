import React from 'react'
import useFirestore from '../../hooks/useFirestore'

import Image from '../image/Image';
import './ImageGrid.css'

const ImageGrid = ({ setSelectedImg }) => {

    const {docs} = useFirestore('images');

  return (
    <div className='img__grid'>
      {docs && docs.map(doc => (
          <div 
          onClick={() => setSelectedImg(doc.url)}
          key={ doc.id }
          >
              <Image doc={doc} key ={doc.id} />
          </div>
            
        ))}
        
        
    </div>
  )
}

export default ImageGrid