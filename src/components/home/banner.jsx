import "../../styles/home.css";
import image from "/images/jodie (7).jpeg";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-img">
        <img src={image} />
      </div>

      <div className="banner-text">
        <span>JODIE FOSTER</span>
        <span>A Mind That Refused To Be Simplified </span>
        <span>
          Some actors build careers. Some actors build brands. Jodie Foster
          built a reputation for intelligence. Not the manufactured kind. Not
          the carefully marketed version.
          <br /> The real thing. For more than five decades, she has occupied a
          rare space in popular culture — simultaneously one of Hollywood’s most
          recognizable faces and one of its most private figures.
          <br /> She is an actress. A director. A producer. A scholar. And
          perhaps most unusually for a movie star: She has spent her entire
          career resisting the mythology of celebrity itself.
        </span>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
