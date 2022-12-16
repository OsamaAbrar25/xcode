import React from 'react'
import Messages from './Messages'
import InputPanel from './InputPanel'

const Chatbox = () => {
  return (
    <div className='chatbox'>
      <div className="chatInfo">
        <span>Uzma</span>
      </div>
      <Messages/>
      <InputPanel/>

    </div>
  )
}

export default Chatbox