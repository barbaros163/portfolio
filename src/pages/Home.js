import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="about">
          <h2>Hi, My Name is Yasin</h2>
          <div className="prompt">
            <p> A passionate Frontend developer from Anatolien</p>

            <LinkedInIcon />

            <Email />
            <Github />
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
