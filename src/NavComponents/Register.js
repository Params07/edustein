import React, {useState, useContext } from "react";
import {  GlobalStateContext } from "../UseContextComponents/GlobalStateProvider";
import Select from 'react-select'


const Register = () => {
    const customStyles = {
        control:(provided,state)=>({
            ...provided,
            borderColor: state.isFocused ? '#22c55e' : '#d1d5db', 
            outline: 'none', 
            boxShadow: 'none', 
            '&:hover': {
              borderColor: state.isFocused ? '#22c55e' : '#d1d5db'
              },
              borderWidth: '2px',
              paddingTop: '0.8rem', 
              paddingBottom: '0.8rem',
              paddingLeft: '1rem', 
              paddingRight: '1rem',
              borderRadius: '0.375rem'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#000000' 
          }),
          placeholder: (provided, state) => ({
            ...provided,
            color: '#d1d5db' 
          })
    }
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
   
    const [bootcamp,setBootCamp] = useState('');
    const options = [
        { value: 'bootcamp1', label: 'Bootcamp 1' },
        { value: 'bootcamp2', label: 'Bootcamp 2' },
        { value: 'bootcamp3', label: 'Bootcamp 3' }
      ];
      const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setBootCamp('');
      };
      console.log("hjaghj",bootcamp)
    const { showRegisterForm, closeRegisterForm } = useContext( GlobalStateContext);

    return (
       
        showRegisterForm ?( <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white w-full h-max sm:w-[580px] sm:h-[455px] rounded-lg p-6 font-redhat flex flex-col space-y-4 slide-in-left" >
         
         <span className="text-[#545454] font-semibold text-base">REGISTER FORM</span>
         <label className="relative">
             <input
                name="name"
                 type="text"
                 value={name}
                 onChange={(e)=>{setName(e.target.value)}}
                 
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className={`text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name ${name!=''?"bg-white  transform -translate-y-7 -translate-x-4 scale-75":""}`}>
                 Name
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="email"
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className={`text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name ${email!=''?"bg-white  transform -translate-y-7 -translate-x-4 scale-75":""}`}>
                 Email
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="number"
                 value={phone}
                 onChange={(e)=>{setPhone(e.target.value)}}
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className={`text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name ${phone!=''?"bg-white  transform -translate-y-7 -translate-x-4 scale-75":""}`}>
               Phone no
             </span>
         </label>
        
         <label className="relative">
         <Select className="" 
            name="bootcamp" 
            defaultValue={bootcamp}
            options={options}
            placeholder="Bootcamp Name"
            styles={customStyles} 
            onChange={(selectedOption) =>{ setBootCamp(selectedOption);}}
            />
         </label>
         <div className="flex space-x-4 font-semibold">
             <button onClick={()=>{closeRegisterForm();resetForm()}} className="w-full py-4 bg-white text-gray-500 hover:bg-gray-100   border-2 border-gray-300 rounded-lg ">CANCEL</button>
             <button className="w-full py-4 bg-line text-white border-2 border-line hover:text-line hover:bg-white  rounded-lg ">REGISTER</button>
 
         </div>
        </div>
        </div>):""
       
    );
}

export default Register;
