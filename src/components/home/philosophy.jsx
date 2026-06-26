import "../../styles/home.css";
import image from "/images/jodie (2).jpeg";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">Creative DNA</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>Jodie Foster’s artistic identity rests on five pillars:</span>

          <div>
            <ul>
              <li>
                Intelligence as Strength Her greatest characters succeed because
                they think.
              </li>

              <li>
                Emotional Precision She avoids excess and trusts subtlety.
              </li>

              <li>
                Fearless Material She repeatedly chooses challenging stories.
              </li>

              <li>
                Privacy as Principle She protects the distinction between public
                work and private life.
              </li>

              <li>
                Lifelong Curiosity Whether acting, directing, or studying,
                curiosity drives her choices.
              </li>
            </ul>
          </div>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
