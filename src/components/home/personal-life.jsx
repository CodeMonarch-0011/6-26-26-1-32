import "../../styles/home.css";
// import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">
        A Different Kind of Leading Woman
      </span>
      <div className="personal-life-txt">
        <span>
          Hollywood often rewards certainty. Confidence. Charisma. Jodie Foster
          offered something more complicated. Her characters think. They
          observe. They process. They solve. <br /> Whether playing Clarice
          Starling, Sarah Tobias in The Accused, or Eleanor Arroway in Contact,
          Foster gravitated toward women whose strength came from intellect
          rather than dominance.
        </span>

        {/* <div className="personal-life-text-mid">

        </div> */}

        <span>
          She challenged conventional ideas about female leads. Her characters
          were rarely defined by romance. Rarely rescued. Rarely ornamental.
          They carried stories through competence and conviction. Long before
          such portrayals became common, Foster was helping normalize them.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
