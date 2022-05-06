import React, { useState } from 'react'
import ImageGrid from '../ImageGrid/ImageGrid'
import Modal from '../modal/Modal'
import UploadForm from '../uploadForm/UploadForm'
import './home.css'

const Home = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="home">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
    
  )
}

export default Home