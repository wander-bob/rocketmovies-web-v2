import {FiCamera, FiLock, FiMail,  FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Header, Avatar, ProfileSettings } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useState } from "react";
import {useAuth} from "../../hooks/auth";
import { api } from "../../services/api";
export function Profile(){
  const {user, updateProfile} = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate();
  async function handleUpdate(){
    const userData = {name, email, password: newPassword, old_password: oldPassword};
    const userUpdated = Object.assign(user, userData);
    await updateProfile({user: userUpdated, avatarFile});
  }
  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  function handleBack(){
    navigate(-1)
  }
  return(
    <Container>
      <Header>
        <LinkButton onClick={handleBack} title="Voltar" />
      </Header>
      <Avatar>
        <img src={ avatar } alt={ user.name  } />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" onChange={handleChangeAvatar}/>
        </label>
      </Avatar>
      <ProfileSettings>
        <Input icon={<FiUser />} value={name} placeholder="Nome" onChange={(event) => setName(event.target.value)}/>
        <Input icon={<FiMail />} value={email} placeholder="email@domain.local" type="email"  onChange={(event) => setEmail(event.target.value)} />
        <Input icon={<FiLock />} placeholder="Senha atual" type="password" onChange={(event) => setOldPassword(event.target.value)} />
        <Input icon={<FiLock />} placeholder="Nova senha" type="password" onChange={(event) => setNewPassword(event.target.value)} />
        <Button title="Atualizar" onClick={handleUpdate}/>
      </ProfileSettings>
    </Container>
  )
}