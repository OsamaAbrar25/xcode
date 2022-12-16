import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">XChat</span>
      <div className="user">
        <img src="https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?w=900&t=st=1671186591~exp=1671187191~hmac=bd5e05fc00ca47602c8f05b6b81d1c36c804f39b2ff4122f74525a999d600709" alt="" className="" />
        <span>Osama</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar