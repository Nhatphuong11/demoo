import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetailType() {
  const data = useParams();
  return (
    <div>CourseDetailType - {data.type} id:{data.id}</div>
  )
}

export default CourseDetailType