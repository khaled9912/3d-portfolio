import React from 'react'
import  {Html} from '@react-three/drei';

const Loader = () => {
  return (
    // to run a non 3d element inside 3d element you need to use drei
    <Html>
        <div className="flex justify-center items-center">
            <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500
            rounded-full animate-spin">
            </div>
        </div>
    </Html>
  )
}

export default Loader