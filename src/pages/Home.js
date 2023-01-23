import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="about">
          <h2>Hallo, Mein Name ist Yasin</h2>

          <div className="prompt">
            <p> Herzlich Willkommen auf meiner Homepage!</p>
            <p>
              Ich beschäftige mich seit 4 Jahren in dem Bereich Web Development.
            </p>
            <p>Vielen Dank für Ihre Besuch.</p>
          </div>
        </div>
        <div className="skills">
          <h1>Skills</h1>

          <ol className="list">
            <li className="item">
              <h2>Front-End</h2>
              <span>
                Html, Css, Javascript, Git, Agile, Jira, Trello, Bootstrap,
                Sass, React, Kanban, Tailwindcss, Materialize, jQuery, Wordpress
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>NodeJS, Firebase</span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript, TypeScript</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
