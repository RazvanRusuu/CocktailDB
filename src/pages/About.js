import React from "react";
import classes from "./About.module.css";
const About = () => {
  return (
    <section>
      <div className="container">
        <h1 className='heading-primary'>About us</h1>
        <div className={classes.content}>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptate rerum ab! Natus ratione error nostrum cupiditate
            exercitationem ex ipsum in molestias aut. Modi aut quo praesentium,
            minus voluptates nesciunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi dignissimos quae sapiente aut, culpa
            voluptatum sed, placeat voluptates et possimus facilis vitae
            obcaecati consequatur repellendus dolores beatae provident ratione
            impedit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
