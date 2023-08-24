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


const Banner = () => {

  const myStyles1 = {
    itemShapes: Star,
    activeFillColor: '#FCD700',
    inactiveFillColor: '#DCDCDC'
  }

  const myStyles2 = {
    itemShapes: Star,
    activeFillColor: '#43A047',
  }

  const myStyles3 = {
    itemShapes: Star,
    activeFillColor: '#8f28a1',
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
    <div className="flex  items-center  xl:px-48 py-20  bg-[#EAF4FC]" style={{borderRadius:'0px 0px 50px 50px'}}>
      <div className="xl:w-3/5 px-10 lg:px-0">
        <h2 className="text-3xl  font-bold mt-24 w-[540px]">
          Noty - Votre guide de confiance pour les services et produits en
          Tunisie.
        </h2>
        <p className="mt-4 text-[#667799]">
          Trouvez les meilleurs produits et services en un seul endroit.
        </p>
        <div className="flex  mt-48 pr-32">
        <div className="max-w-md mx-auto">
        <div className="relative  ">
          <input
            type="text"
            className=" w-[398px] px-6 py-4  rounded-full outline-none "
            placeholder="Zar"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <p className="relative left-64 bottom-[40px] w-28 bg-[#DAE4FF] text-[#000099] font-bold rounded-full text-center  ">Rechercher</p>
          {filteredResults.length > 0 && (
            <div
              className="absolute z-10 w-[400px] bg-white border-2   border-[#000066] p-5 rounded-lg shadow-lg "
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
          <a className="btn hover:text-black ml-4 bg-[#000066] text-white rounded-full text-[12px] ">
            Laissez votre avis <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div className="xl:w-4/5 crd mt-20 xl:mt-10 px-10">
        <div className="first  flex gap-8">
          <div className="card   h-32 bg-white">
            <div className="flex ">
              <img
                className="mt-2 px-2 rounded-full gap-10"
                src={img1}
                alt=""
              />
              <Rating
                className=""
                style={{ maxWidth: 120 }}
                itemStyles={myStyles1}
                value={3}
                readOnly
              />
            </div>

            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2">
                Awel mara mchit lil hotel hetha 3adit séjour 3alamiya ama l
                mekla flop 3alekher!!
              </p>
            </div>
          </div>

          <div className="card w-72 h-28 bg-white rotate-[11.978deg]">
            <div className="flex ">
              <img
                className=" rounded-full gap-10 mt-2 px-2"
                src={img2}
                alt=""
              />
              <Rating
                className=""
                style={{ maxWidth: 120 }}
                value={5}
                itemStyles={myStyles2}
                readOnly
              />
            </div>
            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2">
              Service tayara!
              </p>
            </div>
          </div>
        </div>

        <div className="second mt-8 flex justify-center gap-5">
          <div className="card w-[500px] h-40 bg-white rotate-[-0.871deg]">
            <div className="flex ">
              <img
                className=" rounded-full gap-10 mt-2 px-2"
                src={img3}
                alt=""
              />
              <Rating
                className=""
                style={{ maxWidth: 120 }}
                value={4}
                itemStyles={myStyles3}
                readOnly
              />
            </div>

            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2">
              Cette salle de sport est vraiment généale. les équipements sont de qualités, le personel est compétent mais trouver une machine libre peut prendre du temps et devenir frustrant.
              </p>
            </div>
          </div>
        </div>

        <div className="third  mt-8 flex gap-8">
          <div className="card w-[]  h-40 bg-white rotate-[2.186deg]">
            <div className="flex ">
              <img
                className="mt-2 px-2  rounded-full gap-10"
                src={img4}
                alt=""
              />
              <Rating
                className=""
                style={{ maxWidth: 120 }}
                value={2}
                itemStyles={myStyles4}
                readOnly
              />
            </div>

            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2">
              Honestly, their taxi drivers are awful and disrespectful. It’s true they get to you whenever you are but the customer satisfaction is not fulfilled at all.
              </p>
            </div>
          </div>

          <div className="card w-[700px] h-32 bg-white rotate-[-8.976deg]">
            <div className="flex ">
              <img
                className=" mt-2 px-2 rounded-full gap-10"
                src= {img5}
                alt=""
              />
              <Rating
                className=""
                style={{ maxWidth: 120 }}
                value={1}
                itemStyles={myStyles5}
                readOnly
              />
            </div>
            <div className="px-5 mt-2">
              <p className="bg-slate-100 p-2">
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
