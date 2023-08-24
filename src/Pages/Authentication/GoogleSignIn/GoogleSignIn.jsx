import React from 'react';
import { FcGoogle } from 'react-icons/fc'

const GoogleSignIn = () => {
    return (
        <div className='mt-6'>
        <div className="w-full   my-4">
          <div
            onClick={0}
            className='flex justify-around rounded-full items-center space-x-5 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
          >
            <FcGoogle size={32} />
            <p className="font-bold">Continue with Google</p>
          </div>
        </div>
      </div>
    );
};

export default GoogleSignIn;