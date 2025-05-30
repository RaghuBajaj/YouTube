// import React, { useState } from 'react';
// import './Auth.css';
// import axios from 'axios';
// // import { YouTubeContext } from '../../Context';

// const Auth = () => {
//     // const {user,setUser} = useContext(YouTubeContext);
//     const [ response, setResponse ] = useState();
//     const [ userInput, setUserInput ] = useState({
//       username:'',
//       email:'',
//       fullName:'',
//       password:'',
//     });

//     const handleInput = (e, setState, field) =>{ 
//       setState((pre) => ({ ...pre, [field] : e.target.value}))
//     };

//     const handleSubmit = async() =>{
//       try {
//         console.log("userInput is :",JSON.stringify(userInput));
//         const res = await axios.post('http://localhost:5500/api/v1/users/register1', userInput);
//         const data = res.data;
//         console.log("data is :", data);
//         console.log("msg is :", data.message);
//         setResponse(JSON.stringify(data));
//       } catch (error) {
//         if(error.response){
//           console.log("error response is :", error)
//           setResponse(error.response.data.message);
//         }
//         else{
//           console.log("error is :", error)
//         }
//       }
//     };
//     const handlelogin = async() =>{
//       try {
//         console.log("userInput is :",JSON.stringify(userInput));
//         const res = await axios.get('http://localhost:5500/api/v1/users/login1',{ params: {...userInput}});
//         const data = res.data;
//         console.log("login data is :", data);
//         console.log("login msg is :", data.message);
//         setResponse(JSON.stringify(data));
//       } catch (error) {
//         console.log("login error is :", error)
//       }
//     };
//     const handledelete = async() =>{
//       try {
//         console.log("userInput is :",JSON.stringify(userInput));
//         const res = await axios.delete('http://localhost:5500/api/v1/users/delete1',{ params: {...userInput}});
//         const data = res.data;
//         console.log("login data is :", data);
//         console.log("login msg is :", data.message);
//         setResponse(JSON.stringify(data));
//       } catch (error) {
//         console.log("login error is :", error)
//       }
//     };
//     const handleupdate = async() =>{
//       try {
//         console.log("userInput is :",JSON.stringify(userInput));
//         const res = await axios.put('http://localhost:5500/api/v1/users/update1', userInput);
//         const data = res.data;
//         console.log("update data is :", data);
//         console.log("update msg is :", data.message);
//         setResponse(JSON.stringify(data));
//       } catch (error) {
//         console.log("update error is :", error) 
//       }
//     };

//   return (
//     <div className='full'>
//       <div className='ContainerBox'>
//         <div className='sectionbox'>
//           <p className='title'>username</p>
//           <input type='text' placeholder='Your Name' onChange={(e)=>handleInput(e, setUserInput, "username")}/>
//         </div>      
//         <div className='sectionbox'>
//           <p className='title'>email</p>
//           <input type='text' placeholder='Your mail' onChange={(e)=>handleInput(e, setUserInput, "email")}/>
//         </div>      
//         <div className='sectionbox'>
//           <p className='title'>Phone No.</p>
//           <input type='text' placeholder='Your phone' onChange={(e)=>handleInput(e, setUserInput, "phone")}/>
//         </div>      
//         <div className='sectionbox'>
//           <p className='title'>fullName</p>
//           <input type='text' placeholder='Your phone' onChange={(e)=>handleInput(e, setUserInput, "fullName")}/>
//         </div>      
//         <div className='sectionbox'>
//           <p className='title'>password</p>
//           <input type='text' placeholder='Your phone' onChange={(e)=>handleInput(e, setUserInput, "password")}/>
//         </div>      
//       </div>
//       <button onClick={ handleSubmit }>Submit</button>
//       <button onClick={ handlelogin }>login</button>
//       <button onClick={ handledelete }>delete</button>
//       <button onClick={ handleupdate }>update</button>
//       <div className='response'>
//         { response }
//       </div>
//     </div>
//   )
// }

// export default Auth
