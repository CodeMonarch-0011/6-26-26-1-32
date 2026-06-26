import "../../styles/home.css";
import image from "/images/jodie (6).jpeg";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">The Performance That Changed Everything</span>
      <div className="rise-main">
        <div className="rise-txt">
          In 1976, Foster delivered the role that would permanently alter the
          trajectory of her career. As Iris, the young prostitute in Martin
          Scorsese’s Taxi Driver, she gave a performance that remains
          astonishing decades later.
          <br /> She was only twelve years old. The role was controversial. The
          film was controversial. But the talent was undeniable.
          <br /> The performance earned her an Academy Award nomination and
          established her as something far beyond a child actor. She wasn’t
          merely reciting lines. She understood character. Emotion. Subtext.
          Contradiction.
          <br /> The qualities that define great actors were already visible.
          The industry suddenly realized it was witnessing the arrival of
          someone extraordinary.
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
