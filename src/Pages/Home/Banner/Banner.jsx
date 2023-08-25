import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import './Banner.css'

import img1 from "../../../assets/Clip path group.png"
import img2 from "../../../assets/Clip path group (1).png"
import img3 from "../../../assets/Clip path group (2).png"
import img4 from "../../../assets/Clip path group (3).png"
import img5 from "../../../assets/Clip path group (4).png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


import vector1 from "../../../assets/Vector.png"
import vector2 from "../../../assets/Vector (1).png"
import vector3 from "../../../assets/Vector (2).png"


import star1 from "../../../assets/Group 87.png"
import star2 from "../../../assets/Group 81.png"
import star3 from "../../../assets/Group 85.png"
import star4 from "../../../assets/Group 88.png"
import star5 from "../../../assets/Group 84.png"

const Banner = () => {

  
    

const MockResults = [
  { title: 'ZARA',subTitle:'zara.com/tn', rating: 2.9/5, totalCount: '253 avis', image:vector1, color:'bg-[#FFF8BF]' },
  { title: 'BluZarTech Solutions',subTitle:'bluzartech.tn', rating: 4.8/5, totalCount: '11 avis', image:vector2, color:'bg-[#D0F3CB]' },
  { title: 'ProZarMax',subTitle:'prozarmax.tn', rating: 3.7/5, totalCount: '120 avis', image:vector3, color:'bg-[#F7CAFF]' },
 
];

 
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleInputChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setInputValue(value);

    const filtered = MockResults.filter((result) =>
      result.title.toLowerCase().includes(value)
    );
    setFilteredResults(filtered);
    setSelectedIndex(-1);
  };

  const handleResultClick = (result) => {
    setInputValue(result.title);
    setFilteredResults([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        (prevIndex + 1) % filteredResults.length
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        (prevIndex - 1 + filteredResults.length) % filteredResults.length
      );
    } else if (event.key === 'Enter' && selectedIndex !== -1) {
      event.preventDefault();
      setInputValue(filteredResults[selectedIndex].title);
      setFilteredResults([]);
    }

  }
   
    


    
  return (
    <div className="flex gap-14  items-center  px-[186px] py-10  bg-[#EAF4FC]" style={{borderRadius:'0px 0px 50px 50px'}}>
      <div className="w-1/2">
        <h2 className="text-[48px]  font-bold mt-[140px] w-[867px] text-[#000066]">
          Noty - Votre guide de confiance pour les services et produits en
          Tunisie.
        </h2>
        <p className="mt-4 text-[24px] text-[#667799]">
          Trouvez les meilleurs produits et services en un seul endroit.
        </p>
        <div className="flex   pr-32">
        <div className="max-w-md mx-auto">
        <div className="relative mt-40 h-[350px] bg-white" style={{boxShadow: '0px 1px 3px 1px rgba(0, 0, 102, 0.50)'}}>
          <input
            type="text"
            className=" w-[416px] px-6 py-4  rounded-full outline-none "
            placeholder="Zar"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <p className="relative left-64 bottom-[40px] w-28 bg-[#DAE4FF] text-[#000099] font-bold rounded-full text-center  text-[15px]">Rechercher</p>
          {filteredResults.length > 0 && (
            <div
              className="absolute w-[416px]  p-2 "
              style={{ maxHeight: '400px' }}
            >
              {filteredResults.map((result, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-1 border-b cursor-pointer result-item ${selectedIndex === index ? 'bg-blue-200' : ''}  ${result.subTitle ==='bluzartech.tn' ? 'bg-slate-200' : ''}`}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="">
                    <p className="text-lg font-bold text-[#0D0D0D]">{result.title}</p>
                    <p className="text[#D2D2D2]">{result.subTitle}</p>
                  </div>

                  <div className="flex gap-4">
                 <div className={`flex gap-2   p-1 ${[result.color]}`}>
                <img src={result.image} alt="" />
                  <p className="font-bold">
                  {result.rating}
                 </p></div>
                 <p className="font-bold text-[#000033]"> {result.totalCount}</p>
                  </div>
                  
                </div>
              ))}
              <div className="form-control mt-6">
                <p className="btn btn-outline rounded-full text-black font-bold">Afficher tous les résultats<BsArrowRight className="font-bold text-2xl ml-4"></BsArrowRight></p>
              </div>
            </div>
          )}
        </div>
      </div>
          <a className="btn w-[230px] hover:text-black ml-4 mt-40 bg-[#000066] text-white rounded-full text-[12px] ">
            Laissez votre avis <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div className="xl:w-4/5 crd  mb-32 px-10">
        <div className="first  flex gap-8">
          <div className="card w-[344px] h-[112px] p-2 bg-white">
            <div className="flex items-center">
              <img
                className="mt-2 w-[34px] h-[30px] px-2 rounded-full gap-10"
                src={img1}
                alt=""
              />
             <img className="w-[108] h-[20px]" src={star1} alt="" />
            </div>

            <div className="px-6  mt-2">
              <p className="bg-slate-100 p-2  text-[12px]">
                Awel mara mchit lil hotel hetha 3adit séjour 3alamiya ama l
                mekla flop 3alekher!!
              </p>
            </div>
          </div>

          <div className="card w-[233px] h-[97px] bg-white rotate-[11.978deg]">
            <div className="flex items-center">
              <img
                className="w-[34px] h-[30px] rounded-full gap-10 mt-2 px-2"
                src={img2}
                alt=""
              />
             <img className='w-[108px] mt-2 h-[30px]' src={star2}></img>
            </div>
            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2 text-[12px]">
              Service tayara!
              </p>
            </div>
          </div>
        </div>

        <div className="second mt-8   ">
          <div className="card w-[455px] p-2 h-[136px] bg-white rotate-[-0.871deg] mx-16">
            <div className="flex ">
              <img
                className="w-[34px] h-[30px] rounded-full gap-10 mt-2 px-2"
                src={img3}
                alt=""
              />
              <img className='w-[108px] mt-2 h-[20px]' src={star3}></img>
            </div>

            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2 text-[12px]">
              Cette salle de sport est vraiment généale. les équipements sont de qualités, le personel est compétent mais trouver une machine libre peut prendre du temps et devenir frustrant.
              </p>
            </div>
          </div>
        </div>

        <div className="third relative right-32 w-[900px] mt-8 flex gap-8">
          <div className="card   w-[428px] p-2 h-[133px] bg-white rotate-[2.186deg]">
            <div className="flex ">
              <img
                className="mt-2 px-2 w-[34px] h-[34px] rounded-full gap-10"
                src={img4}
                alt=""
              />
              <img className='w-[108px] mt-2 h-[30px]' src={star4}></img>
            </div>

            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2 text-[12px]">
              Honestly, their taxi drivers are awful and disrespectful. It’s true they get to you whenever you are but the customer satisfaction is not fulfilled at all.
              </p>
            </div>
          </div>

          <div className="card w-[306px] h-32 bg-white rotate-[-8.976deg]">
            <div className="flex ">
              <img
                className=" w-[34px] h-[34px] mt-2 px-2 rounded-full gap-10"
                src= {img5}
                alt=""
              />
              <img className='w-[108px] mt-2 h-[30px]' src={star5}></img>
            </div>
            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2 text-[12px]">
              تجربة  كارثية. ما  بعثوليش الأرتيكل <br />إلى  حبيت عليه
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
