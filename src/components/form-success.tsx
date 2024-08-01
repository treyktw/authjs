import React from 'react'
import { CheckCircle } from "lucide-react"


interface FormSuccessProps {
  message?: string
}
const FormSuccess = ({ message }: FormSuccessProps) => {
  if(!message) return null


  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <p>{message}</p>
      <CheckCircle size={16} />
    </div>
  )
}

export default FormSuccess