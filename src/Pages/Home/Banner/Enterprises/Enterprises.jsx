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




const Enterprises = () => {

    const myStyles1 = {
        itemShapes: Star,
        activeFillColor: '#43A047',
        inactiveFillColor: '#DCDCDC'
      }

      const myStyles2 = {
        itemShapes: Star,
        activeFillColor: '#FCD700',
        inactiveFillColor: '#DCDCDC'
      }


      const myStyles3 = {
        itemShapes: Star,
        activeFillColor: '#9227a4',
        inactiveFillColor: '#DCDCDC'
      }



      const myStyles4 = {
        itemShapes: Star,
        activeFillColor: '#ff7a00',
        inactiveFillColor: '#DCDCDC'
      }


      const myStyles5 = {
        itemShapes: Star,
        activeFillColor: '#ea0000',
        inactiveFillColor: '#DCDCDC'
      }

      const myStyles6 = {
        itemShapes: Star,
        activeFillColor: '#fcd700',
        inactiveFillColor: '#DCDCDC'
      }
    return (
        <div className="bg-[#F2F2F2]">
        <div className="bg-[#F2F2F2] px-48 py-20">

        <p className="text-2xl text-[#000080] font-semibold">Entreprises les mieux notéese</p>
        <p className="text-[#0066CC] mt-3">Plongez dans notre sélection des entreprises les mieux évaluées et les plus recommandées par nos utilisateurs satisfaits.</p>


        <div className='mt-20  gap-20'>
          <div className='grid grid-cols-3 gap-10'> 
          <div className="card      bg-white ">
         <div className=" flex items-center">
           <img
             className="w-24 h-24  gap-10 mb-14 ml-4"
             src={img1}
             alt=""
           />
          <div className="mt-14 ml-4">
          <h2 className="text-[#000066] font-bold text-2xl">Darty</h2>
          <p className="text-[#333333]">Entreprise de vente au détail</p>
          <div className="flex my-4">
         <Rating
         className=""
         style={{ maxWidth: 130 }}
         value={4.5}
         itemStyles={myStyles1}
         readOnly
       />
       <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
         </div>
         <p className='text-xl  '>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className='mt-10 px-4 flex justify-between mb-4'>

         <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>

       <div className="card     mt-8 xl:mt-0  bg-white ">
       <div className=" flex items-center">
         <img
           className="w-24 h-24  gap-10 mb-14 ml-4"
           src={img2}
           alt=""
         />
        <div className="mt-14 ml-4">
        <h2 className="text-[#000066] font-bold text-2xl">Ennakl Automobiles</h2>
        <p className="text-[#333333]">Concessionnaire de Voitures</p>
        <div className="flex my-4">
       <Rating
       className=""
       style={{ maxWidth: 120 }}
       value={2.5}
       itemStyles={myStyles2}
       readOnly
     />
     <p className="text-[#FCD700]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
       </div>
       <p className='text-xl  '>Score: <span className='text-[#000099]'>2.5/5</span> </p>
       <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
        </div>
          
       </div>
       

       <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

       <div className='mt-10 px-4 flex justify-between mb-4'>

       <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
       <div>
       <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
       </div>
       
       </div>
     </div>

   <div className="card    mt-8 xl:mt-0  bg-white ">
         <div className=" flex items-center">
           <img
             className="w-24 h-24  gap-10 mb-14 ml-4"
             src={img3}
             alt=""
           />
          <div className="mt-10 ml-4">
          <h2 className="text-[#000066] font-bold text-xl">La Cigale Tabarka Hôtel-Thalasso & Spa - Golf</h2>
          <p className="text-[#333333]">Entreprise de vente au détail</p>
          <div className="flex my-4">
         <Rating
         className=""
         style={{ maxWidth: 120 }}
         value={4.5}
         itemStyles={myStyles3}
         readOnly
       />
       <p className="text-[#7B1FA2]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
         </div>
         <p className='text-xl  '>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className='mt-7 px-4 flex justify-between mb-4'>

         <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>
          
          </div>

          <div className='grid mt-10 md:mt-0 xl:mt-10 grid-cols-3 gap-10'> 
          <div className="card mt-8 xl:mt-0 bg-white ">
         <div className=" flex items-center">
           <img
             className="w-24 h-24  gap-10 mb-14 ml-4"
             src={img4}
             alt=""
           />
          <div className="mt-14">
          <h2 className="text-[#000066] font-bold text-2xl">DARTY</h2>
          <p className="text-[#333333]">Entreprise de vente au détail</p>
          <div className="flex my-4">
         <Rating
         className=""
         style={{ maxWidth: 120 }}
         value={4.5}
         itemStyles={myStyles4}
         readOnly
       />
       <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
         </div>
         <p className='text-xl  '>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className='mt-10 px-4 flex justify-between mb-4'>

         <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>

       <div className="card    mt-8 xl:mt-0 bg-white ">
       <div className=" flex items-center">
         <img
           className="w-24 h-24  gap-10 mb-14 ml-4"
           src= {img5}
           alt=""
         />
        <div className="mt-14 ml-4">
        <h2 className="text-[#000066] font-bold text-2xl">DARTY</h2>
        <p className="text-[#333333]">Entreprise de vente au détail</p>
        <div className="flex my-4">
       <Rating
       className=""
       style={{ maxWidth: 120 }}
       value={4.5}
       itemStyles={myStyles5}
       readOnly
     />
     <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
       </div>
       <p className='text-xl  '>Score: <span className='text-[#000099]'>4.3/5</span> </p>
       <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
        </div>
          
       </div>
       

       <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

       <div className='mt-10 px-4 flex justify-between mb-4'>

       <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
       <div>
       <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
       </div>
       
       </div>
     </div>

   <div className="card    mt-8 xl:mt-0  bg-white ">
         <div className=" flex items-center">
           <img
             className="w-24 h-24  gap-10 mb-14 ml-4"
             src= {img6}
             alt=""
           />
          <div className="mt-14 ml-4">
          <h2 className="text-[#000066] font-bold">DARTY</h2>
          <p className="text-[#333333]">Entreprise de vente au détail</p>
          <div className="flex my-4">
         <Rating
         className=""
         style={{ maxWidth: 120 }}
         value={4.5}
         itemStyles={myStyles6}
         readOnly
       />
       <p className="text-[#43A047]   flex  items-center"> <BsDot className='text-2xl'></BsDot> EXCELLENT</p>
         </div>
         <p className='text-xl  '>Score: <span className='text-[#000099]'>4.3/5</span> </p>
         <p className='text-xl '>Nombre d’avis: <span className='text-[#000099]'>250</span>  </p>
          </div>
            
         </div>
         

         <hr className='mt-6 border-[2px] border-[#DAE4FF]' />

         <div className='mt-10 px-4 flex justify-between mb-4'>

         <div className='flex items-center gap-2  font-bold text-[#000066]'>Lire les avis <BsArrowRight></BsArrowRight>  </div>
         <div>
         <button className='bg-[#DAE4FF] p-2 w-32 rounded-full flex items-center gap-2  font-bold text-[#000066]'> <CiShare1 className='text-[#000066] font-bold'></CiShare1> Site Web</button>
         </div>
         
         </div>
       </div>
          
          </div>
         
        </div>
            

        </div>
        <div className="px-48 flex justify-between items-center">
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