import { Link } from "react-router-dom";
import Collaboration from "../Collaboration/Collaboration";
const About = () => {
  return (
    <>
    <div class="about">
      <div class="about-content">
        <h1>À propos de nous</h1>
        <p>
          Bienvenue sur <strong>Sala Store</strong> — votre destination en ligne
          pour des produits de qualité à prix abordables. Nous sommes une équipe
          passionnée par l’innovation et le service client, toujours à la
          recherche des meilleures solutions pour simplifier votre quotidien.
        </p>
        <p>
          Depuis notre création, notre mission est simple : offrir une
          expérience d’achat moderne, fluide et de confiance. Grâce à une
          sélection rigoureuse et un service après-vente attentif, nous mettons
          la satisfaction de nos clients au centre de tout ce que nous faisons.
        </p>
        <Link to="/services" class="btn-about">
          Découvrir nos services
        </Link>
      </div>

      <div class="about-image">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Notre équipe"
        />
      </div>
    </div>
    <Collaboration />
    </>
  );
};
export default About;
