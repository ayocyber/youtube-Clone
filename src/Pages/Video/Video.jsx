import React from 'react'
import "./Video.css"
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recomended from '../../Component/Recommended/Recomended'
import { useParams } from 'react-router-dom'

const Video = ({searchedText}) => {

  const {videoId ,categoryId } = useParams()
  console.log(videoId)
  return (
    <div className='play-container'>
         <PlayVideo videoId={videoId}/>
         <Recomended categoryId={categoryId} searchedText={searchedText}/>
    </div>
  )
}

export default Video
