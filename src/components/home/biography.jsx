import "../../styles/home.css";
import image from "/images/jodie (3).jpeg";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">
        The Child Who Grew Up Under a Spotlight
      </span>

      <div className="biography-txt">
        <div>
          Born Alicia Christian Foster in Los Angeles, California, in 1962,
          Jodie Foster entered the entertainment industry before most children
          learn long division. Commercials came first. Then television. Then
          films.
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>

        <div>
          While other children spent afternoons playing in neighborhoods, Foster
          spent hers on soundstages. The camera became familiar long before
          adulthood arrived.
          <br /> Yet unlike many child performers, she never seemed consumed by
          fame. Even as a young girl, there was an unusual seriousness about
          her. A sense of observation. A quiet intelligence that often felt
          decades older than her age. People noticed it immediately. Directors
          noticed it. Audiences noticed it. Hollywood noticed it.
        </div>
      </div>
    </section>
  );
}
