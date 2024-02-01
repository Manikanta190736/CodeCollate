import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = ()=>{
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const navigate= useNavigate();
      const {storetokenInLS} = useAuth();

      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:4002/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (response.ok) {
            
            alert("login successful");
            const res_data = await response.json();
            storetokenInLS(res_data.token);
            setUser({email:"", password:""});
            navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two cols">
                    <div className="registration-image">
                        <img src="/images/login.png" alt="lets fill the login form" width="400" height="500"/>
                    </div>
                    {/* registration form */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Login </h1>
                        <br />

                        <form  onSubmit={handleSubmit}>
                        
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                type="text"
                                name="email" 
                                    
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>

                             

                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="text"
                                name="password" 
                               
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
     </section>
     

     </>
     );
};