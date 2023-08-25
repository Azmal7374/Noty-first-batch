import React from 'react';
import logo from "../../../assets/Official Logo (1) 4.png"
import { BsFacebook, BsTiktok, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import img1 from "../../../assets/Yuniqode white png 1.png"
const Footer = () => {
    return (
        <div className="bg-[#000033]">
 <div className="px-[189px]">
 
 <footer className="  py-[84px] footer    text-white">
       
 <div >
   <img className='w-[181.018px] h-[76px] ' src={logo} alt="" />
   <p className='text-[14px] font-[500]'>Construisant des ponts entre les consommateurs et <br /> les entreprises pour une meilleure expérience de <br /> consommation en Tunisie.</p>
 </div> 
 <div>
   <span className="text-[20px] font-[500] text-white">Noty</span> 
   <a className="mt-4 link link-hover text-[#D0D0D0] text-[16px]">Notre mission</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Carrières</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Nous contacter</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Guide d’utilisation</a>
 </div> 
 <div>
 <span className="text-[20px] font-[500]text-white">Entreprises</span> 

   <a className="mt-4 link link-hover text-[#D0D0D0]text-[16px]">Pourquoi Noty?</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Plans & tarifs</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Espace Entreprise</a> 
 </div> 
 <div>
 <span className="text-[20px] font-[500] text-white">Légal</span> 
   <a className="mt-4 link link-hover text-[#D0D0D0]text-[16px]">Conditions d'utilisation</a> 
   <a className="link link-hover text-[#D0D0D0] text-[16px]">Politique de confidentialité</a> 
 </div>      
</footer>
<div className="">
<hr className=" border-b border-gray-300  mx-auto" />

</div>

<footer className="footer   items-center mt-[21px] bg-[#000033] text-white">

<div className="items-center grid-flow-col">
  
 <p className='text-[16px]'> © 2023 Noty - Tous droits réservés. | <span className="text-[12px] font-[500]">Conçu et Développé par</span> </p>
 <img className="w-[92px] h-[22px] mt-2" src={img1} alt="" />
</div> 
<div className="grid-flow-col gap-4 md:place-self-center  text-2xl">
<AiFillInstagram className="w-[16.002px] h-[16px]"></AiFillInstagram>
<BsFacebook className="w-[16.002px] h-[16px]"></BsFacebook>
<BsTwitter className="w-[16.002px] h-[16px]"></BsTwitter>
 <BsTiktok className="w-[16.002px] h-[16px]"></BsTiktok>
</div>
</footer>
 </div>

        </div>
    );
};

export default Footer;