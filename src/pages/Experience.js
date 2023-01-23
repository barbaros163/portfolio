import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Berufsschule HTL, Bursa / Türkei
          </h3>
          <p>
            Fachrichtung Informatik / Web Programmierung. Gewerbeberechtigung
            mit Erfolg erhalten.
          </p>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universität Wien / Politikwissenschaft
          </h3>
          <p>Bachelorstudium erfolgreich abgeschlossen.</p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            HTML, CSS, and Javascript for Web Developers
          </h3>
          <p>Online Coursera Kurs mit Zertifikat erfolgreich abgeschlossen.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer Kurs
          </h3>
          <p>
            Online Bootcamp (240 Stunden) mit Zertifikaten (Html, Css,
            Javascript und React) erfolgreich abgeschlossen.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
