import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsPeople } from 'react-icons/bs';
import logo from "../../../assets/Official Logo 5.png"
import { Link } from "react-router-dom";
import GoogleSignIn from "../../Authentication/GoogleSignIn/GoogleSignIn";
import FacebookSignIn from "../../Authentication/FacebookSignIn/FacebookSignIn";

import img from '../../../assets/bbbcc63f-011b-4dd3-bad0-e19625de2de3 1.png'

const Navbar = () => {

  const [error, setError] = useState("");
  

  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    if (activeModal) {
      activeModal.close();
    }

    const modal = document.getElementById(modalId);
    modal.showModal();
    setActiveModal(modal);
  };
  

   

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  

  const handleSubmit = (event) => {
    //  event.preventDefault();
    console.log('Hello')
  }



  return (
    <div className="px-48 navbar bg-[#EAF4FC]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-[#EAF4FC] rounded-box w-52"
          >
          <li>
          <a>À propos de nous</a>
        </li>
        <li>
          <a>Catégories</a>
        </li>
        <li>
          <a>Contactez</a>
        </li>
          </ul>
        </div>
       <div>
       <img src={logo} alt="" />
       </div>
      </div>
      <div className="navbar hidden lg:flex mr-[700px]">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>À propos de nous</a>
          </li>
          <li>
            <a>Catégories</a>
          </li>
          <li>
            <a>Contactez</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex items-center gap-2">
      
    <BsPeople></BsPeople>
      <Link className="font-semibold text-[#000066]">Connexion</Link>

     

      </div>
       
      <button
      className="btn ml-4 bg-[#000066] text-white rounded-full hover:text-black"
      onClick={() => openModal("my_modal_3")}
    >
      Pour Entreprises
    </button>
      <dialog id="my_modal_3" className="modal ">
        <form method="dialog" className="modal-box px-20 ">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
         
            {/* Form on the right side */}
            <div className="card  ">
            <p className="mt-4 font-bold text-[#000000] text-[16px]">Connectez-vous à votre compte</p>
            <p className="text-[#666666]">Accédez à votre espace personnel en quelques clics.</p>
            <GoogleSignIn ></GoogleSignIn>
            <FacebookSignIn></FacebookSignIn>

            <div className="flex flex-col w-full border-opacity-50">
  <div className="divider">OR</div>
</div>

              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#000000]">Adresse e-mail</span>
                  </label>
                  <input
                    type="email"
                    
                    placeholder="email"
                    name="email"
                    className="input input-bordered rounded-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label flex justify-between">
                    <span className="label-text text-[#000000]">Mot de passe</span>

                    <button
                    onClick={(event) => {
                      event.preventDefault();
                      const modal3 = document.getElementById("my_modal_3");
                      modal3.close(); // Close the previous modal
                      window.my_modal_4.showModal(); // Open the new modal
                    }}
                    className="underline"
                  >
                    Oublié?
                  </button>
                    {/* You can open the modal using ID.showModal() method */}
 
<dialog id="my_modal_4" className="modal ">
  <form onSubmit={handleSubmit} method="dialog" className="modal-box p-20">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <p className="mt-4 font-bold text-[#000000] text-[16px]">Besoin d'aide pour récupérer votre compte ?</p>
    <p className="text-[#666666]">Entrez votre adresse e-mail pour recevoir un code de vérification unique (OTP) et réinitialiser votre mot de passe.</p>
    <div className="form-control">
    <label className="label">
      <span className="label-text font-bold text-[#000000]">Adresse e-mail</span>
    </label>
    <input
      type="email"
      
      placeholder="Entrez votre adresse e-mai"
      name="email"
      className="input input-bordered rounded-full "
    />
  </div>

  <button  onClick={(event) => {
    event.preventDefault();
    const modal4 = document.getElementById("my_modal_4");
    modal4.close(); // Close the previous modal
    window.my_modal_5.showModal(); // Open the new modal
  }} className="btn w-full rounded-full  text-white hover:text-black bg-[#000066] mt-6"  >Envoyer le code</button>

<dialog id="my_modal_5" className="modal">
  <form onSubmit={handleSubmit} method="dialog" className="modal-box p-20">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <p className="mt-4 font-bold text-[#000000] text-[16px]">Code de Vérification OTP</p>
    <p className="text-[#666666]">Veuillez saisir le code de vérification à 7 chiffres que nous avons envoyé à votre adresse e-mail pour réinitialiser votre mot de passe.</p>

    <p className="mt-4 font-bold text-[#000000] text-[16px]">Code de Vérification</p>
    <div className="mt-4 flex gap-4">
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    <p className="border w-10 h-10 rounded-lg"></p>
    </div>
    <button   onClick={(event) => {
      event.preventDefault();
      const modal5 = document.getElementById("my_modal_5");
      modal5.close(); // Close the previous modal
      window.my_modal_6.showModal(); // Open the new modal
    }}  className="btn w-full rounded-full  text-white hover:text-black bg-[#000066] mt-6"  >Valider</button>

    
<dialog id="my_modal_6" className="modal">
  <form  onSubmit={handleSubmit} method="dialog" className="modal-box px-20">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <p className="mt-4 font-bold text-[#000000] text-[16px]">Réinitialisation de Mot de Passe</p>
    <p className="text-[#666666]">Veuillez saisir votre nouveau mot de passe ci-dessous pour réinitialiser votre compte. Assurez-vous qu'il est sécurisé et répond aux exigences de sécurité.</p>
    <div className="form-control mt-14">
    <label className="label">
      <span className="label-text font-bold text-[#000000]">Nouveau Mot de Passe</span>
    </label>
    <input
      type="email"
      
      placeholder="Entrez votre nouveau mot de passei"
      name="email"
      className="input input-bordered rounded-full "
    />
  </div>

  
  <div className="form-control mt-5">
    <label className="label">
      <span className="label-text font-bold text-[#000000]">Confirmer Votre Nouveau Mot de Passe</span>
    </label>
    <input
      type="email"
      
      placeholder="Re-entrez votre nouveau mot de passe"
      name="email"
      className="input input-bordered rounded-full "
    />
  </div>
  <div className="form-control mt-6">

  <button   onClick={(event) => {
    event.preventDefault();
    const modal6 = document.getElementById("my_modal_6");
    modal6.close(); // Close the previous modal
    window.my_modal_7.showModal(); // Open the new modal
  }}  className="btn  w-full rounded-full  text-white hover:text-black bg-[#000066] mt-3"  >Confirmer Votre Nouveau Mot de Passe</button>
   

  
<dialog id="my_modal_7" className="modal">
  <form onSubmit={handleSubmit} method="dialog" className="modal-box px-14 py-10">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     <img className="w-48 mx-auto" src={img} alt="" />

     <p className="mt-10 font-bold text-[#000000] text-[16px]">Votre mot de passe a été réinitialisé avec succès.</p>
    <p className="text-[#666666] mt-4">Vous pouvez désormais accéder à votre compte en utilisant votre nouveau mot de passe. N'hésitez pas à nous contacter si vous avez besoin d'aide supplémentaire. Merci pour votre confiance !</p>


    <button  className="btn mt-8 w-full rounded-full  text-white hover:text-black bg-[#000066] mt-3"  >Se connecter</button>
  </form>
</dialog>
</div>

  </form>
</dialog>
    
    <div className="form-control mt-6">
  <p className="btn btn-outline rounded-full text-black "><BsArrowLeft className="font-bold text-2xl mr-8"></BsArrowLeft>Retour à la page de connexion</p>
</div>
  </form>
</dialog>

<div className="form-control mt-6">
  <p className="btn btn-outline rounded-full text-black "><BsArrowLeft className="font-bold text-2xl mr-8"></BsArrowLeft> Retour à la page de connexion</p>
</div>

  </form>
</dialog>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                   
                    name="password"
                    placeholder="password"
                    className="input input-bordered rounded-full"
                  />
                  <div className="flex justify-between items-center">
                    <label className="mt-4">
                      <input type="checkbox" onChange={toggleShowPassword} />
                      <span className="label-text ml-2">Se souvenir de moi</span>
                    </label>
    
                    
                  </div>
                  <p className="text-xs px-1 font-semibold text-red-600">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <input className="btn rounded-full  text-white hover:text-black bg-[#000066]" type="submit" value="Se connecter" />
                </div>
               
               
              </form>
            </div>
    
            
        </form>
      </dialog>
      </div>
    </div>
  );
};

export default Navbar;
