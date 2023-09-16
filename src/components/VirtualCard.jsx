import React from 'react';

const VirtualCard = () => {
  return (

    <div>

         <div className="text-lg text-white font-bold mt-1 ">Virtual Card</div>

      <div className="bg-blue-900 shadow-md rounded-md h-[11rem] w-[22rem] mt-1">
               <div className="text-gray-600 mt-1"></div>
            <div className="flex mt-4">
                <div className="">
                   <div className="text-sm text-gray-500">Card Holder</div>
                   <div className="text-gray-700">John Doe</div>
                </div>
                <div className="">
                   <div className="text-sm text-gray-500">Expiration Date</div>
                   <div className="text-gray-700">12/25</div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default VirtualCard;
