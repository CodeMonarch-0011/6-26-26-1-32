import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">
        Jodie Foster’s story is not one of reinvention.
      </span>

      <div>
        It is one of refinement. A lifetime spent sharpening talent instead of
        image. While others chased attention, she pursued mastery.
        <br />
        And in doing so, she became something increasingly uncommon: A movie
        star admired not merely for fame, but for substance. Some actors become
        famous. Some actors become respected. Jodie Foster became both.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
