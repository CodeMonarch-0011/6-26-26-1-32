import "../../styles/home.css";
// import { DATA } from "../../static-contents/creative-style";

// function CreativeStyleCard({ title, content, id }) {
//   return (
//     <div className="creative-style-card">
//       <span>{id}</span>
//       <div className="creative-style-card-content">
//         <span>{title}</span>
//         <span>{content}</span>
//       </div>
//     </div>
//   );
// }

export function CreativeStyle() {
  return (
    <section className="creative-style">
      <span className="creative-style-hdr">The Power of Silence</span>

      <div className="creative-style-main">
        Unlike many celebrities, Foster rarely fed the media machine. She
        avoided oversharing. Avoided spectacle. Avoided the endless performance
        of public life. This made her fascinating.
        <br /> The less she revealed, the more people wanted to know. Yet
        mystery was never the goal. Privacy was. <br />
        She understood something many public figures struggle to accept: Fame
        and accessibility are not the same thing. You can be visible without
        becoming available. Throughout her career, she protected that boundary
        fiercely.
      </div>
    </section>
  );
}
