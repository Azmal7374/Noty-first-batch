import React from 'react';
import { FaFacebookF } from "react-icons/fa";

const FacebookSignIn = () => {
    return (
        <div>
        <div className="w-full  rounded-full ">
        <div
            onClick={0}
            className='flex justify-around items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer  rounded-full'
          >
            <FaFacebookF className=' text-blue-600' size={32} />
  
            <p className="font-bold">Continue with Facebook</p>
          </div>
          
        </div>
      </div>
    );
};

export default FacebookSignIn;