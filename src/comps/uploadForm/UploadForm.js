import React, { useState } from 'react'
import Progress from '../progress/Progress';
import './uploadForm.css'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png' , 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError('Please select an Image file (png, jpeg or jpg');
        }
    }

  return (
    <form className='uploadForm'>
        <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
        </label>
        
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <p>{file.name}</p>}
        </div>
        {file && <Progress file={file} setFile={setFile}/>}
    </form>
  )
}

export default UploadForm