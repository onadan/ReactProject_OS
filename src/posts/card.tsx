import React from 'react'

export interface   IPost{
    id?:number
    title:string
    completed:boolean
}

const Card:React.FC<IPost> = ({title,completed}) => {
  return (
<div className="border border-gray-300 rounded-lg p-4 m-4 w-64 ">
<h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{completed ? 'Completed' : 'Not Completed'}</p>

    </div>
  )
}

export default Card