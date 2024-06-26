import React from 'react'
import "./Home.css"
import Sidebar from '../../Component/Sidebar/Sidebar'
import Feed from '../../Component/feed/Feed'

const Home = ({sidebar}) => {
  const [category , setCategory] = React.useState(0)
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
