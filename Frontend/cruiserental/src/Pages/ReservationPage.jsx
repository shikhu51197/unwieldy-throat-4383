import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_Data } from '../Redux/action'


const ReservationPage = () => {
    const state=useSelector((data)=>{return data})
    console.log(state)
    const dispatch=useDispatch()


    useEffect(()=>{
        dispatch(get_Data())
    },[])
  return (
    <div>
        
    </div>
  )
}

export default ReservationPage