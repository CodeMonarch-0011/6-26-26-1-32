import "../../styles/home.css";
// import { Data } from "../../static-contents/career-highlights";

// function FilmWorkListCard({ hdr, cnt, list }) {
//   function handleList() {
//     if (!list && Array.isArray(list)) {
//       return <></>;
//     }

//     return (
//       <ul>
//         {
//           // eslint-disable-next-line react/prop-types
//           list.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))
//         }
//       </ul>
//     );
//   }

//   return (
//     <div className="film-work-list-card">
//       <div className="film-work-list-card-hdr">
//         <div className="pointer" aria-hidden />
//         <span>{hdr}</span>
//       </div>

//       <div className="film-work-list-card-txt">
//         <span>{cnt}</span>
//         {handleList()}
//       </div>
//     </div>
//   );
// }

export function FilmWork() {
  return (
    <section className="film-work" id="film-work">
      <span className="film-work-hdr">
        Clarice Starling The Role That Became Legend
      </span>

      <div className="film-work-cnt">
        <div className="film-work-cnt-main">
          <span>
            In 1991, Foster starred as Clarice Starling in The Silence of the
            Lambs. The role transformed her from respected actress into
            cinematic icon. <br /> Clarice was not written as an action hero.
            She was intelligent. Disciplined. Vulnerable. Determined.
          </span>

          {/* <div className="film-work-list">
            {Data.map((dt, i) => (
              <FilmWorkListCard
                key={i}
                hdr={dt.hdr}
                cnt={dt.content}
                list={dt.list}
              />
            ))}
          </div> */}

          <div className="film-work-cnt-extra">
            A young woman entering rooms filled with powerful men and refusing
            to be intimidated. Foster’s performance anchored the film. Her quiet
            strength became the emotional center of a story filled with
            darkness.
            <br />
            The film swept the Academy Awards. Best Picture. Best Director. Best
            Actor. Best Actress. Best Adapted Screenplay. A rare achievement in
            film history. For Foster, it brought her second Academy Award. For
            audiences, it delivered one of cinema’s most memorable protagonists.
          </div>
        </div>
      </div>
    </section>
  );
}
