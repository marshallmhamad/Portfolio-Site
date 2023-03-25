import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { translation } from "./I18n/i18n";

function Portfolio() {
  const lang = useSelector((state) => state.languageReducer.language);

  const [page, SetPage] = useState("1");

  useEffect(() => {
    window.scrollTo(0, 1100);
  }, [page]);

  if (page === "1") {
    return (
      <div id="portfolio" className="portfolio">
        <h2 className="titre-h1">{translation(lang, "titre03")}</h2>
        <span className="titre-soustitre">
          {translation(lang, "soustitre03")}
        </span>
        {}
        <div className="project">
          <img src="./resturant.png" alt="" width="520px" height="300px"></img>
          <div className="project-txt">
            <h3>{translation(lang, "titre00")}</h3>
            <span>{translation(lang, "soustitre00")}</span>
            <div className="language-used">
              <div>HTML</div>
              <div>CSS</div>
            </div>
            <p>{translation(lang, "p00")}</p>
            <div className="project-btn">
              <a
                href="https://github.com/marshallmhamad/Resturant-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-black">
                  {translation(lang, "btnblack01")}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* PROJET PAGE 1-1 board */}
        <div className="project">
          <img src="./board.PNG" alt="" width="520px" height="300px"></img>
          <div className="project-txt">
            <h3>{translation(lang, "titre05")}</h3>
            <span>{translation(lang, "soustitre05")}</span>
            <div className="language-used">
              <div>Firebase</div>
              <div>React</div>
              <div>REDUX</div>
              <div>Tailwind</div>
              <div>CSS</div>
            </div>
            <p>{translation(lang, "p05")}</p>
            <div className="project-btn">
              {}
              <a
                href="https://github.com/marshallmhamad/final-board-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-black">
                  {translation(lang, "btnblack02")}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* PROJET PAGE 1-2 IVALICE */}

        {/* PROJET PAGE 1-3 PORTFOLIO */}
        <div className="project">
          <img
            src="./portfolio personal.PNG"
            alt=""
            width="520px"
            height="300px"
          ></img>
          <div className="project-txt">
            <h3>{translation(lang, "titre11")}</h3>
            <span>{translation(lang, "soustitre11")}</span>
            <div className="language-used">
              <div>REACT.JS</div>
              <div>JSX</div>
              <div>REDUX</div>
              <div>ANT DESIGN</div>
              <div>CSS</div>

              <div>SWIPER.JS</div>
              <div>EMAIL.JS</div>
            </div>
            <p>{translation(lang, "p11")}</p>
            <div className="project-btn">
              <a
                href="https://github.com/marshallmhamad/Portfolio-Site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-black">
                  {translation(lang, "btnblack01")}
                </div>
              </a>
              <a
                href="https://github.com/marshallmhamad/Portfolio-Site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-black">
                  {translation(lang, "btnblack02")}
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="page-btn" onClick={() => SetPage("1")}>
            1
          </div>
          <div className="page-btn" onClick={() => SetPage("2")}>
            2
          </div>
          <div className="page-btn" onClick={() => SetPage("3")}>
            3
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
