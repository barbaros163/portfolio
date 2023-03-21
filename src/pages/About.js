import "../styles/About.css";
// import AutoTyping from "react-auto-typing";

function About() {
  return (
    <>
      <h1 className="h1">Herzlich Willkommen auf meiner Homepage!</h1>
      <p className="p1">
        Ich beschäftige mich seit 4 Jahren in dem Bereich Web Development.
      </p>
      <p className="p1">
        Ich habe in dem Bereich Web Development 2 Ausbildungen erfolgreich
        abgeschlossen.
      </p>
      <p className="p1">Nach erfolgreich Abschluss habe ich die Zertifikaten</p>
      <p className="p1">
        Um mich in dem Bereich weiterzuentwickeln, versuche ich immer neue und
        aktuelle Projekte zu konstruieren.
      </p>
      <p className="p1">
        Sie können meine Projekte von der Link "Projekte" schauen.
      </p>

      <p className="p1">Ich freue mich auf Ihre Kontaktaufnahme.</p>
      {/* <AutoTyping
        className="autotyping"
        active // <boolean>
        textRef=" 
        



" // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000} // <number>
        delayToDelete={2000} // <number>
      /> */}
      {/* <BlinkCursor
        active // <boolean>
        blinkSpeed={500} // <number>
      /> */}

      {/* <div className="center">
        <button className="button">Projekte</button>
        <button className="button">Kontakt</button>
      </div> */}
    </>
  );
}

export default About;
