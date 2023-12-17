import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});
function AuthProvider({children}){
  const [userData, setUserData] = useState({});
  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password});
      console.log(response.data)
      const { user , token } = response.data;
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", JSON.stringify(token));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUserData({token, user})
    } catch (error) {
      console.log(error)
      if(error.response){
        return alert(error.response.data.message.message)
      }
      return alert("Não foi possível efetuar o login.")
    }
  }
  async function signOut(){
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
    setUserData({});
  }
  async function updateProfile({user, avatarFile}){
    try {
      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/user/avatar", fileUploadForm);
        user.avatar = response.data.user.avatar;
      }
      await api.put("/user", user);
      localStorage.setItem("@rocketmovie:user", user);
      setUserData({user, token: userData.token});
      alert("Perfil atualizado.")
    } catch (error) {
      if(error.response){
        return alert(error.response.data.message);
      }
      return alert("Não foi possível atualizar os dados.")
    }
  }
  useEffect(()=>{
    const token = String(localStorage.getItem("@rocketmovies:token")).replace('"', '');
    const user = localStorage.getItem("@rocketmovies:user");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if(user && token){
      setUserData({token,user: JSON.parse(user)});
    }
  }, [])
  return (
    <AuthContext.Provider value={{signIn, signOut, updateProfile, user: userData.user}}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
export {AuthProvider, useAuth}