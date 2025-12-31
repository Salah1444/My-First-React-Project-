import "./Form.css";

function Form(props) {
  return (
    <div className="Formulaire">
      <form onSubmit={(e)=>props.SubmitHandler(e)}>
        <h2>Formulaire</h2>
        <input type="text" placeholder="Votre Nom" name="nom" onChange={(e)=>props.change(e)} />
        <input type="text" placeholder="Votre Prénom" name="prenom" onChange={(e)=>props.change(e)} />
        <input type="email" placeholder="Votre Adresse  Email" name="email" onChange={(e)=>props.change(e)} />
        <textarea   placeholder="message" name="message"  onChange={(e)=>props.change(e)}>Votre Message</textarea>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
}

export default Form;

