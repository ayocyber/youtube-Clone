import React from 'react'
import "./Video.css"
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recomended from '../../Component/Recommended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId ,categoryId } = useParams()
  console.log(videoId)
  return (
    <div className='play-container'>
         <PlayVideo videoId={videoId}/>
         <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video
