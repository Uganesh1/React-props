import React from 'react'

const User = (props) => {
  return (
    <div>
            <h1> Name: {props.name}</h1>
            <h1> Age:{props.age}</h1>
            <h1> Email:{props.mail}</h1>
            <h1> Phone:{props.phoneno}</h1>
    </div>
  )
}

export default User