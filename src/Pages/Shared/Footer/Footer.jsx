import React from 'react';
import logo from "../../../assets/Official Logo (1) 4.png"
import { BsFacebook, BsTiktok, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="">
        <footer className="px-[186px] footer p-10 bg-[#000033] text-white">
        <div>
          <img src={logo} alt="" />
          <p>Construisant des ponts entre les consommateurs et <br /> les entreprises pour une meilleure expérience de <br /> consommation en Tunisie.</p>
        </div> 
        <div>
          <span className="text-xl text-white">Noty</span> 
          <a className="mt-4 link link-hover text-[#D0D0D0]">Notre mission</a> 
          <a className="link link-hover text-[#D0D0D0]">Carrières</a> 
          <a className="link link-hover text-[#D0D0D0]">Nous contacter</a> 
          <a className="link link-hover text-[#D0D0D0]">Guide d’utilisation</a>
        </div> 
        <div>
        <span className="text-xl text-white">Entreprises</span> 

          <a className="mt-4 link link-hover text-[#D0D0D0]">Pourquoi Noty?</a> 
          <a className="link link-hover text-[#D0D0D0]">Plans & tarifs</a> 
          <a className="link link-hover text-[#D0D0D0]">Espace Entreprise</a> 
        </div> 
        <div>
        <span className="text-xl text-white">Légal</span> 
          <a className="mt-4 link link-hover text-[#D0D0D0]">Conditions d'utilisation</a> 
          <a className="link link-hover text-[#D0D0D0]">Politique de confidentialité</a> 
        </div>      
      </footer>
      <div className="">
      <p className="border-b"></p>
      
      </div>
      <footer className="footer px-[186px] items-center p-4 bg-[#000033] text-white">
      
      <div className="items-center grid-flow-col">
         
        <p className='text-[16px]'> © 2023 Noty - Tous droits réservés. | - Conçu et Développé par</p>
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center  text-2xl">
      <AiFillInstagram></AiFillInstagram>
      <BsFacebook></BsFacebook>
      <BsTwitter></BsTwitter>
        <BsTiktok></BsTiktok>
      </div>
    </footer>

        </div>
    );
};

export default Footer;