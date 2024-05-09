import React, { useEffect } from "react";

import { AOS } from "aos";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OffreDemploi() {
  const [offre, setOffre] = useState([]);
const navigate =useNavigate()
  const fetchAllOffre = async () => {
    try {
      const res = await axios.get("http://localhost:5432/job-offers");
      setOffre(res.data);
      console.log(res.data, "data");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // AOS.init();
    fetchAllOffre();
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center">
        <h2
          className="h2 mb-6 xl:mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Some Offre d'emploi we offre
        </h2>
        <p
          className="lead max-w-[584px] mx-auto mb-16 xl:mb-24"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          With our app you can view the route of your order, from our local
          headquarters to the place where you are. Look for the app now!
        </p>
      </div>
 
      {offre.filter((elem)=>elem.type === "offre d'emploi").map((elem)=>(
      <div class="mx-5 my-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more </button>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-2 px-4" onClick={()=>navigate(`/apply/${elem.id}`)}>Apply</button>
      </div>
      ))}
    </div>
  );
}
