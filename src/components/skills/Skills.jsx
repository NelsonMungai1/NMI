import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h3 className="section__title">Skills</h3>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
