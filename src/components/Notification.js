import React from 'react';

function Notification({ showNotification }) {
  return (

    <div className={`notification-box ${showNotification ? 'show' : ''}`}>
      <p>You pressing the same keyboard.</p>
    </div>

  )
}

export default Notification;