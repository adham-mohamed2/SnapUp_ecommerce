import React from 'react'
import "./message.css"
import MessageLogo from "../../image/assits/correct.png"
function Message() {
  return (
    <div className="Message">
        <div className="content-message">
            <div class="img text-center mb-3">
                <img style={{width:"60px", height:"60px"}} src={MessageLogo} alt="" />
            </div>
            <p className='text-message text-capitalize text-white'>an item has been added to your shopping card</p>
        </div>
    </div>
  )
}

export default Message