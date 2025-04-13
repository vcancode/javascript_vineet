import React, { useState } from 'react'


const toogleswitch = () => {

    const [ison,setIson] = useState(false)

const toogleswitch = ()=>{
    setIson(!ison);
 }
  return (
    <div className={`toogleswithch w-[350px] h-[100px] flex items-center justify-center rounded-[50px] relative ${ison? `bg-green-400`: `bg-red-400`} transition-all duration-300 linear
`}  onClick={toogleswitch}>
        <div className={`text-center  tooglebutton absolute  rounded-[50%] w-[100px] h-[95%]   flex items-center justify-center border-4 border-gray-500 ${ison? `bg-green-400`: `bg-red-400`} ${ison? `translate-x-[100%]`:`translate-x-[-100%]`} transition-all duration-300 linear
 `}>
                <span className='toogletext w-full'>{ison? "ON" : "OFF"}</span>
        </div>
    </div>
  )
}

export default toogleswitch