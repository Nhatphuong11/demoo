import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {
  const param = useParams();
  return (
    <div>CourseDetail{param.id}</div>
  )
}

export default CourseDetail