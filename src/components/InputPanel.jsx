import React from 'react'
import AddImage from '../img/add-image.png'

const InputPanel = () => {
  return (
    <div className='inputPanel'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <input type="file" style={{display: 'none'}} id='f'/>
        <label htmlFor="f"><img src={AddImage} alt="" /></label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default InputPanel