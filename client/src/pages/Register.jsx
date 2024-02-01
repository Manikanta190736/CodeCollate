import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = ()=>{

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
      });

      

      const navigate= useNavigate();
      const {storetokenInLS} = useAuth();

      const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };

      //handling form submission

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    
        try {
          const response = await fetch("http://localhost:4002/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
           
          if (response.ok) {
            const res_data = await response.json();
            console.log("res from server",res_data);
            storetokenInLS(res_data.token);
            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/login");
          } 
          console.log(response);
        } catch (error) {
          console.error("register", error);
        }
      };




     return <>
     <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two cols">
                    <div className="registration-image">
                        <img src="/images/register.png" alt="error" width="500" height="500" />
                    </div>
                    

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Register</h1>
                        <br />

                        <form  onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                type="text"
                                name="username" 
                                id="username"
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                type="text"
                                name="email"  
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input 
                                type="number"
                                name="phone"  
                                id="phone"
                                required
                                autoComplete="off"
                                value={user.phone}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="text"
                                name="password" 
                                id="password"
                                required
                                autoComplete="off"
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
};