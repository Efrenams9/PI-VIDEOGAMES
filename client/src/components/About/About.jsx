import "./About.css";
import me from "./Efren_presentacion.jpg";

const About = () => {
  return (
    <div className="about_general">
      <h1>ABOUT ME</h1>
      <p>
        Hello, my name is Efren Marín. I am 20 years old and I am a student with
        the goal of becoming a Full Stack programmer at Soy Henry. Currently, I
        am studying the bootcamp and, at the same time, learning German
        independently from my home country, Mexico.
      </p>
      <div>
        <div className="formatoImagen">{
          <img
            src={me}
            alt="The image cannot be displayed"
            className="yop"
          ></img>
        }</div>
        
        <div>
          <li className="styleAbout">
            <h2>MY HOBBIES</h2>
            <h3>Language Learning</h3>
            <h3>Reading</h3>
            <h3>Programming</h3>
          </li>
        </div>
      </div>
      <p>
        I consider myself an inherently curious person, with an insatiable
        thirst for knowledge. In addition to my focus on technology and
        programming, I also have a deep interest in areas such as politics,
        philosophy, psychology, and physics.
      </p>
      <h2>TECHNOLOGIES I WORK WITH</h2>
      <div className="tech">
        <h3>{"JavaScript"}</h3>
        <h3>{"React"}</h3>
        <h3>{"Node.js"}</h3>
        <h3>HTML5</h3>
        <h3>CSS3</h3>
        <h3>express</h3>
        <h3>sequelize</h3>
        <h3>postgreSQL</h3>
      </div>
    </div>
  );
};

export default About;
