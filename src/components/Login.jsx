// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/Logo-Transperant.png'
// import { Link } from 'react-router-dom';
// const Login = () => {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/login', formData); // Replace with your backend URL
//       const token = res.data.token;

//       // Store JWT in localStorage (or use httpOnly cookie for better security)
//       localStorage.setItem('jwtToken', token);
//       navigate('/dashboard');
//       setSuccess('Login successful!');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed.');
//     }
//   };

//   return (
//     <div>
//         <div className='w-full bg-[#098de4]'><Link to='/'><img className='w-48 mx-auto' src={logo} alt="" /></Link></div>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
//         {success && <p className="text-green-600 text-sm mt-4 text-center">{success}</p>} 
//         <p className='text-right mt-3'>reset password</p>
//       </div>
       
//     </div>
   
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [step, setStep] = useState("login");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/login", {
//         email,
//         password,
//       });
//       alert(res.data);
//     } catch (err) {
//       alert(err.response.data);
//     }
//   };

//   const handleForgot = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/forgot-password", { email });
//       alert(res.data);
//       setStep("verify");
//     } catch (err) {
//       alert(err.response.data);
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
//       alert(res.data);
//       setStep("reset");
//     } catch (err) {
//       alert(err.response.data);
//     }
//   };

//   const handleReset = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/reset-password", {
//         email,
//         otp,
//         newPassword,
//       });
//       alert(res.data);
//       setStep("login");
//     } catch (err) {
//       alert(err.response.data);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       {step === "login" && (
//         <>
//           <h2>Login</h2>
//           <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
//           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
//           <button onClick={handleLogin}>Login</button>
//           <p onClick={() => setStep("forgot")} style={{ cursor: "pointer" }}>Forgot Password?</p>
//         </>
//       )}

//       {step === "forgot" && (
//         <>
//           <h2>Forgot Password</h2>
//           <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
//           <button onClick={handleForgot}>Send OTP</button>
//         </>
//       )}

//       {step === "verify" && (
//         <>
//           <h2>Verify OTP</h2>
//           <input placeholder="OTP" onChange={(e) => setOtp(e.target.value)} /><br />
//           <button onClick={handleVerify}>Verify</button>
//         </>
//       )}

//       {step === "reset" && (
//         <>
//           <h2>Reset Password</h2>
//           <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} /><br />
//           <button onClick={handleReset}>Reset Password</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo-Transperant.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    otp: '',
    newPassword: ''
  });
  const [step, setStep] = useState('login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('https://next-tog-backend.onrender.com/api/login', {
        email: formData.email,
        password: formData.password,
      });
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      navigate('/dashboard');
      setSuccess('Login successful!');
    } catch (err) {
      setError(err.response?.data || 'Login failed.');
    }
  };

  const handleForgot = async () => {
    try {
      const res = await axios.post('https://next-tog-backend.onrender.com/api/forgot-password', { email: formData.email });
      alert(res.data);
      setStep('verify');
    } catch (err) {
      alert(err.response?.data);
    }
  };

  const handleVerify = async () => {
    try {
      const res = await axios.post('https://next-tog-backend.onrender.com/api/verify-otp', { email: formData.email, otp: formData.otp });
      alert(res.data);
      setStep('reset');
    } catch (err) {
      alert(err.response?.data);
    }
  };

  const handleReset = async () => {
    try {
      const res = await axios.post('https://next-tog-backend.onrender.com/api/reset-password', {
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      });
      alert(res.data);
      setStep('login');
    } catch (err) {
      alert(err.response?.data);
    }
  };

  return (
    <div>
      <div className='w-full bg-[#098de4]'>
        <Link to='/'><img className='w-48 mx-auto' src={logo} alt="Logo" /></Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">

          {step === 'login' && (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 h-10 pl-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1 h-10 pl-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
              {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
              {success && <p className="text-green-600 text-sm mt-4 text-center">{success}</p>}
              <p className='text-right mt-3 cursor-pointer text-blue-600' onClick={() => setStep('forgot')}>Forgot Password?</p>
            </>
          )}

          {step === 'forgot' && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center">Forgot Password</h2>
              <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} className="w-full p-2 h-10 pl-3 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-4" />
              <button onClick={handleForgot} className="w-full  bg-blue-600 text-white py-2 rounded">Send OTP</button>
            </>
          )}

          {step === 'verify' && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center">Verify OTP</h2>
              <input type="text" placeholder="Enter OTP" name="otp" onChange={handleChange} className="w-full p-2 border h-10 pl-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-4" />
              <button onClick={handleVerify} className="w-full bg-blue-600 text-white py-2 rounded">Verify</button>
            </>
          )}

          {step === 'reset' && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center">Reset Password</h2>
              <input type="password" placeholder="New Password" name="newPassword" onChange={handleChange} className="w-full p-2 border h-10 pl-3 rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-4" />
              <button onClick={handleReset} className="w-full bg-blue-600 text-white py-2 rounded">Reset Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

