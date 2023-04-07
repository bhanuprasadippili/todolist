import React, { useEffect } from 'react'

const UseEffect = () => {

    const timerfun = ()=>{
        const timer = setInterval(()=>{
            console.log("first")
        }, 1000)
    }

    useEffect(()=>{
        timerfun();
        return ()=>{
            clearInterval(timerfun());
        }
    }, [])
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect