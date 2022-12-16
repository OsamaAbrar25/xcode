import React from 'react'

const Message = () => {
  return (
    <div className='message ownerMessage'>
      <div className="messageInfo">
        <img src="https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?w=900&t=st=1671186591~exp=1671187191~hmac=bd5e05fc00ca47602c8f05b6b81d1c36c804f39b2ff4122f74525a999d600709" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?w=900&t=st=1671186591~exp=1671187191~hmac=bd5e05fc00ca47602c8f05b6b81d1c36c804f39b2ff4122f74525a999d600709" alt="" />
      </div>
    </div>
  )
}

export default Message