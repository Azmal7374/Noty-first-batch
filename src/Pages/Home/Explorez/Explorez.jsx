import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


import img1 from '../../../assets/SVGRepo_iconCarrier.png'
import img2 from '../../../assets/SVGRepo_iconCarrier (1).png'
import img3 from '../../../assets/SVGRepo_iconCarrier (2).png'
import img4 from '../../../assets/SVGRepo_iconCarrier (3).png'
import img5 from '../../../assets/SVGRepo_iconCarrier (4).png'
import img6 from '../../../assets/Group 98.png'
import img7 from '../../../assets/SVGRepo_iconCarrier (5).png'
import img8 from '../../../assets/SVGRepo_iconCarrier (6).png'
import { BsArrowRight } from 'react-icons/bs';
 
 

const Explorez = () => {
    return (
        <div className="px-48 py-20 bg-[#F7FAFC]">
         <div className=" md:flex justify-between">
         <p className="text-[32px] text-[#000033] font-bold">Explorez par Catégorie</p>
         <p className="flex text-[16px] items-center gap-3 text-[#000066] font-bold">Voir Plus <BsArrowRight className="text-xl text-[#000066]"></BsArrowRight> </p>
         </div>

         <p className="text-[#4F637B] mt-3 text-[16px]">Plongez dans notre sélection des entreprises les mieux évaluées et les plus recommandées par nos utilisateurs satisfaits.</p>

         <div className='crd flex  gap-20 lg:block mt-10 '>
         <div className=' first-4 mt- lg:flex gap-10'>
         <div className="card  w-[352px] h-[139px]  bg-[#FFECDB] ">
         <div className=" ">
           <img
             className="w-14 h-14  gap-10 ml-4 mt-4"
             src={img1}
             alt=""
           />
            
         </div>
         <div className="px-5">
           <p className="  p-2 mt-2   font-bold text-[17px]">
           Hôtels et Maisons d’Hôte
           </p>
         </div>
       </div>
       <div className="card w-[352px] h-[139px] mt-6 xl:mt-0     bg-[#FFECDB] ">
       <div className=" ">
         <img
           className="w-14 h-14  gap-10 ml-4 mt-4"
           src={img2}
           alt=""
         />
          
       </div>
       <div className="px-5">
         <p className="  p-2 mt-2  font-bold text-[17px]">
         Hôtels et Maisons d’Hôte
         </p>
       </div>
     </div>

     <div className="card w-[352px] h-[139px]   bg-[#FFECDB] mt-6 xl:mt-0">
     <div className=" ">
       <img
         className="w-14 h-14  gap-10 ml-4 mt-4"
         src= {img3}
         alt=""
       />
        
     </div>
     <div className="px-5">
       <p className="  p-2 mt-2  font-bold text-[17px]">
       Hôtels et Maisons d’Hôte
       </p>
     </div>
   </div>

   <div className="card w-[352px] h-[139px]   bg-[#FFECDB] mt-6 xl:mt-0">
   <div className=" ">
     <img
       className="w-14 h-14  gap-10 ml-4 mt-4"
       src= {img4}
       alt=""
     />
      
   </div>
   <div className="px-5">
     <p className="  p-2 mt-2  font-bold text-[17px]">
     Hôtels et Maisons d’Hôte
     </p>
   </div>
 </div>
         
         </div>
         <div className='mt-8 md:mt-0 xl:mt-8 second-4 mt- lg:flex gap-10'>
         <div className="card w-[352px] h-[139px]   bg-[#FFECDB] ">
         <div className=" ">
           <img
             className="w-14 h-14  gap-10 ml-4 mt-4"
             src={img5}
             alt=""
           />
            
         </div>
         <div className="px-5">
           <p className="  p-2 mt-2  font-bold text-[17px]">
           Hôtels et Maisons d’Hôte
           </p>
         </div>
       </div>
       <div className="card w-[352px] h-[139px]  bg-[#FFECDB] mt-6 xl:mt-0">
       <div className=" ">
         <img
           className="w-14 h-14  gap-10 ml-4 mt-4"
           src= {img6}
           alt=""
         />
          
       </div>
       <div className="px-5">
         <p className="  p-2 mt-2  font-bold text-[17px]">
         Hôtels et Maisons d’Hôte
         </p>
       </div>
     </div>

     <div className="card w-[352px] h-[139px]   bg-[#FFECDB] mt-6 xl:mt-0">
     <div className=" ">
       <img
         className="w-14 h-14  gap-10 ml-4 mt-4"
         src={img7}
         alt=""
       />
        
     </div>
     <div className="px-5">
       <p className="  p-2 mt-2  font-bold text-[17px]">
       Hôtels et Maisons d’Hôte
       </p>
     </div>
   </div>

   <div className="card  w-[352px] h-[139px]   bg-[#FFECDB] mt-6 xl:mt-0">
   <div className=" ">
     <img
       className="w-14 h-14  gap-10 ml-4 mt-4"
       src={img8}
       alt=""
     />
      
   </div>
   <div className="px-5">
     <p className="  p-2 mt-2  font-bold text-[17px]">
     Hôtels et Maisons d’Hôte
     </p>
   </div>
 </div>
         
         </div>
         </div>
            
        </div>
    );
};

export default Explorez;