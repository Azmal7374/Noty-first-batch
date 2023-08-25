import { Rating, Star } from '@smastrom/react-rating';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { BsArrow90DegRight, BsArrowLeftCircle, BsArrowRight, BsArrowRightCircle, BsDot } from 'react-icons/bs';


import img1 from '../../../../assets/logo_darty 1.png'
import img2 from '../../../../assets/347607172_617243330089630_28312197502042379_n 1.png'
import img3 from '../../../../assets/326732265_612793127524990_8319150349199829063_n 1.png'
import img4 from '../../../../assets/399010_10151170752048874_483975833_n 1.png'
import img5 from '../../../../assets/unnamed 1.png'
import img6 from '../../../../assets/106046609_10158285942070907_7859076810884144613_n 1.png'


import star1 from "../../../../assets/Group 87.png"
import star2 from "../../../../assets/Group 81.png"
import star3 from "../../../../assets/Group 85.png"
import star4 from "../../../../assets/Screenshot_55.png"
import star5 from "../../../../assets/Group 84 (1).png"
import star6 from "../../../../assets/Screenshot_1.png"
import star7 from "../../../../assets/Screenshot_2.png"
import star8 from "../../../../assets/Screenshot_3.png"



const Enterprises = () => {

   
     
    return (
        <div className="bg-[#F2F2F2]">
        <div className="bg-[#F2F2F2] px-[186px] py-20">

        <p className="text-[32px] text-[#000080] font-semibold">Entreprises les mieux notéese</p>
        <p className="text-[#0066CC] mt-2 text-[16px] font-[500]">Plongez dans notre sélection des entreprises les mieux évaluées et les plus recommandées par nos utilisateurs satisfaits.</p>


        <div className='mt-20  gap-20'>
          <div className='grid grid-cols-3 gap-10'> 
          <div className="card p-2  w-[484px] h-[275px]    bg-white ">
         <div className=" flex items-center">
           <img
             className="w-[70px] h-[70px]  gap-10 mb-20 ml-4"
             src={img1}
             alt=""
           />
          <div className=" ml-4">
          <h2 className="text-[#000066] font-bold text-[24px] mt-4">Darty</h2>
          <p className="text-[#333333] text-[15px]">Entreprise de vente au détail</p>
          <div className="flex my-4">
         <img className="w-[108px] h-[20px]" src={star6} alt="" />
       <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> <span className="text-[13px] font-semibold">EXCELLENT</span> </p>
         </div>
         <p className='text-[15px]  font-[500px]'>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className=' text-[15px]  font-[500px]'>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] opacity-25 border-[#DAE4FF]' />

         <div className=' px-4 flex justify-between py-2 '>

         <div className='flex items-center gap-2 text-[15px] font-[500] text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2   rounded-full flex items-center gap-2  font-bold text-[#000066] w-[133px] h-[40px]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>

       <div className="card   w-[484px] h-[275px]   mt-8 xl:mt-0  bg-white ">
       <div className=" flex items-center">
         <img
         className="w-[70px] h-[70px]  gap-10 mb-20 ml-4"
           src={img2}
           alt=""
         />
        <div className=" ml-4">
        <h2 className="text-[#000066] font-bold text-[24px] mt-4">Ennakl Automobiles</h2>
        <p className="text-[#333333]">Concessionnaire de Voitures</p>
        <div className="flex my-4">
       <img src={star7} alt="" />
     <p className="text-[#FCD700]   flex  items-center"> <BsDot className='text-2xl'></BsDot> MOYEN</p>
       </div>
       <p className='text-[15px]  font-[500] '>Score: <span className='text-[#000099]'>2.5/5</span> </p>
       <p className='text-[15px]  font-[500] '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
        </div>
          
       </div>
       

       <hr className='mt-6 border-[2px] opacity-25 border-[#DAE4FF]' />

       <div className=' px-4 flex justify-between py-2'>

       <div className='flex items-center gap-2    text-[#000066] text-[15px] font-[500]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
       <div>
       <button className='w-[133px] h-[40px] bg-[#DAE4FF] p-2   rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
       </div>
       
       </div>
     </div>

   <div className="card p-2 w-[484px] h-[275px]   mt-8 xl:mt-0  bg-white ">
         <div className=" flex items-center">
           <img
           className="w-[70px] h-[70px]  gap-10 mb-20 ml-4"
             src={img3}
             alt=""
           />
          <div className=" ml-4">
          <h2 className="text-[#000066] font-bold text-[15px] mt-4">La Cigale Tabarka Hôtel-Thalasso & Spa - Golf</h2>
          <p className="text-[#333333] text-[15px] font-[500]">Entreprise de vente au détail</p>
          <div className="flex my-4">
        <img className="w-[108px] h-[20px]" src={star3} alt="" />
       <p className="text-[#7B1FA2]   flex  items-center"> <BsDot className='text-2xl'></BsDot> <span className="text-[13px] font-semibold">BON</span> </p>
         </div>
         <p className='text-[15px]  font-[500px]'>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-[15px]  font-[500px]'>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 opacity-25 border-[2px] border-[#DAE4FF]' />

         <div className=' px-4 flex justify-between py-3'>

         <div className='flex items-center gap-2  text-[15px] font-[500] text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2  w-[133px] h-[40px] rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>
          
          </div>

          <div className='grid mt-10 md:mt-0 xl:mt-10 grid-cols-3 gap-10'> 
          <div className="card p-2  w-[484px] h-[275px]     bg-white ">
         <div className=" flex items-center">
           <img
           className="w-[70px] h-[70px]  gap-10 mb-20 ml-4"
             src={img4}
             alt=""
           />
          <div className="ml-4">
          <h2 className="text-[#000066] font-bold text-[24px] mt-4">GlobalNet</h2>
          <p className="text-[#333333]text-[15px]">Entreprise de vente au détail</p>
          <div className="flex my-4">
        <img className="w-[108px] h-[20px]" src={star4} alt="" />
       <p className="text-[#FF7A00]   flex  items-center"> <BsDot className='text-2xl'></BsDot> DÉCEVANT</p>
         </div>
         <p className='text-[13px] font-semibold'>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-[15px]  font-[500px]'>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className=' px-4 flex justify-between py-2'>

         <div className='flex items-center gap-2   text-[#000066]  text-[15px] font-[500]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2 w-[133px] h-[40px] rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>

       <div className="card  p-2  w-[484px] h-[275px]  bg-white ">
       <div className=" flex items-center">
         <img
         className="w-[70px] h-[70px]  gap-10 mb-20 ml-4"
           src= {img5}
           alt=""
         />
        <div className=" ml-4">
        <h2 className="text-[#000066] font-bold text-[24px] mt-4">Bolt</h2>
        <p className="text-[#333333] text-[15px]">Services de Taxi et VTC</p>
        <div className="flex my-4">
       <img className="w-[108px] h-[20px]" src={star5} alt="" />
     <p className="text-[#EA0000]   flex  items-center"> <BsDot className='text-2xl'></BsDot> <span className=""></span> MÉDIOCRE</p>
       </div>
       <p className='text-[13px] font-semibold'>Score: <span className='text-[#000099]'>4.3/5</span> </p>
       <p className='text-[15px]  font-[500px] '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
        </div>
          
       </div>
       

       <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

       <div className=' px-4 flex justify-between py-2'>

       <div className='flex items-center gap-2  text-[15px] font-[500] text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
       <div>
       <button className='bg-[#DAE4FF] p-2 w-[133px] h-[40px] rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
       </div>
       
       </div>
     </div>

   <div className="card  p-2  w-[484px] h-[275px]   mt-8 xl:mt-0  bg-white ">
         <div className=" flex items-center">
           <img
             className="w-[70px] h-[70px]  gap-10 mb-14 ml-4"
             src= {img6}
             alt=""
           />
          <div className=" ml-4">
          <h2 className="text-[#000066] font-bold text-[24px] mt-4">Zara</h2>
          <p className="text-[#333333]text-[15px]">Magasin de Vêtements</p>
          <div className="flex my-4">
        <img className="w-[108px] h-[20px]" src={star8} alt="" />
       <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> <span className="text-[13px] font-semibold">MOYEN</span> </p>
         </div>
         <p className='text-[13px] font-semibold'>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-[15px]  font-[500px]'>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className=' px-4 flex justify-between py-2'>

         <div className='flex items-center gap-2    text-[#000066] text-[15px] font-[500]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2  w-[133px] h-[40px] rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>
          
          </div>
         
        </div>
            

        </div>
        <div className="px-[186px] flex justify-between items-center">
       <div>
       <p className='flex items-center gap-8 py-14 font-bold text-[#000066] text-[15px]'>Trouver d'autres entreprises recommandées <BsArrowRight className="text-2xl"></BsArrowRight>  </p>
       </div>

       <div className='flex gap-4'>
       <BsArrowRightCircle className='text-5xl'></BsArrowRightCircle>
       <BsArrowLeftCircle className='text-5xl'></BsArrowLeftCircle>
       </div>
        </div>
        
        </div>
    );
};

export default Enterprises;