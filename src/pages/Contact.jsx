import { useState } from "react";
import Form from "../Formulaire/Form";
const Contact = () => {
  const [userData, SetUserData] = useState({});
  const change = (e) => {
    const { name, value } = e.target;
    SetUserData({ ...userData, [name]: value });
  };
const [Visible,SetVisible]=useState(false);
  const Submitandler = (e) => {
    e.preventDefault();
    console.log(userData);
    SetVisible(!Visible);
  };
  return (
   <>
      <Form change={change} SubmitHandler={Submitandler} />
      {
          Visible ?
      <table className="table_userDonne">
        <tr>
          <th>nom </th>
          <th>prenom</th>
          <th>email</th>
          <th>Description</th>
        </tr>
        <tr>
            <td>{userData.nom}</td>
            <td>{userData.prenom}</td>
            <td>{userData.email}</td>
            <td>{userData.Des}</td>
          </tr>
      </table>:
      null
}
     </> 
  );
      
};
export default Contact;
