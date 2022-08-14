import React from 'react'

const Home = (props) => {
  return (
    <div>{props.title || "Home"}</div>
  )
}

export default Home