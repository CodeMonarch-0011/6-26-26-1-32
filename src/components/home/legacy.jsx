import "../../styles/home.css";
import image from "/images/jodie (1).jpeg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Cultural Legacy</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          Jodie Foster expanded what audiences expected from leading women in
          film. She demonstrated that intelligence could be compelling. That
          restraint could be powerful. That complexity could be commercial.
          <br />
          Her influence can be seen in generations of performers who followed.
          Women allowed to be brilliant. Complicated. Driven. Unapologetically
          capable.
          <br /> She helped make those characters possible. Not through
          speeches. Through performance.
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
