import React from 'react';



function Status(props) {

  console.log(props)


  return (

    <div className="status">
      <div className="user-info">
        <img src={props.profilePic} alt="My logo Logo" className="profile-pic" />
        <div className="user-text">
          <p><a href="#">{props.username}</a></p>
          <p><small>{props.postdate}</small></p>
        </div>
      </div>
      <p className="status-text">
        {props.text}
        
      </p>

        <hr />
      <div className="reaction-bar">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  )

}

export default Status