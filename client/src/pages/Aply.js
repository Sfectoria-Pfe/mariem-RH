import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Titles from "../components/Titles";
// import wire from "../assets/img/wire.png";
export default function Aply() {
  const [demande, setDemande] = useState({
    name: "",
    lastName: "",
    age: "",
    adress: "",
    email: "",
    phoneNumber: "",
    note: "",
    cv: "",
    offerId: "",
    type: "offre d'emploi",
  });
  const { id } = useParams();
  const [cv, setCv] = useState("");
  console.log(demande, "demande");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDemande({
      ...demande,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("pdf", cv);
      formData.append("offerId", id);

      const response = await axios.post(
        "http://localhost:4000/cv/upload/",
        formData
      );
      console.log(response, "responnnnnnnn");
      const demandewithCv = {
        ...demande,
        cv: response.data.data.frontPath,
        offerId: id,
        age: +demande.age,
        phoneNumber: +demande.phoneNumber,
      };
      console.log(demandewithCv, "demandewithCv");
      const responsedemande = await axios.post(
        "http://localhost:4000/demande",
        demandewithCv
      );
      console.log(responsedemande.data.id, "iddemande");
      var score = response.data.matchScore;
      await axios.patch(
        `http://localhost:4000/demande/${responsedemande.data.id}`,
        { score } 
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (


<div>
<div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://tecdn.b-cdn.net/img/new/textures/full/142.jpg')]">


  </div>

  <div class="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
    <div class="text-center">
      <div
        class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
         <Titles title="Job " subtitle="Take the Next Step in Your Professional Journey" marked="Submission"/>

        {/* <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          The best offer on the market <br /><span class="text-primary">for your business</span>
        </h1>
        <a class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
        <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a> */}
      </div>
    </div>
  </div>

    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      
      <div class="container max-w-screen-lg mx-auto">
        <div>
          

          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-3">
                    <label for="full_name">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => handleInputChange(e)}
                      name="name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="full_name">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={(e) => handleInputChange(e)}
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label>Age</label>
                    <input
                      type="number"
                      name="age"
                      onChange={(e) => handleInputChange(e)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="adress">Phone Number</label>
                    <input
                      type="number"
                      name="phoneNumber"
                      onChange={(e) => handleInputChange(e)}
                      id="adress"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="adress">Adress</label>
                    <input
                      type="text"
                      name="adress"
                      id="adress"
                      onChange={(e) => handleInputChange(e)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="country">Email</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="email"
                        id="country"
                        onChange={(e) => handleInputChange(e)}
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="email@domain.com"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-5">
                    <label for="country">CV</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="cv"
                        id="country"
                        onChange={(e) => handleFileChange(e)}
                        type="file"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="Note"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-5">
                    <label for="country">Note</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="note"
                        id="country"
                        onChange={(e) => handleInputChange(e)}
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        placeholder="Note"
                      />
                    </div>
                  </div>

                  {/* <div class="md:col-span-2">
                  <label for="state">State / province</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                    <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                  </div>
                </div>
  
                <div class="md:col-span-1">
                  <label for="zipcode">Zipcode</label>
                  <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
                </div> */}

                  {/* <div class="md:col-span-5">
                  <div class="inline-flex items-center">
                    <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                    <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                  </div>
                </div>
  
                <div class="md:col-span-2">
                  <label for="soda">How many soda pops?</label>
                  <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div> */}

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
</div>

  );
}
