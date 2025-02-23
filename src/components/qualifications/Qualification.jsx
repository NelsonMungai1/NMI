import { useState } from "react";
import "./qualification.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h3 className="section__title">Qualification</h3>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon "></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qualification_subtitle">Spain Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Spain-Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">Spain-Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Product Designer</h3>
                <span className="qualification_subtitle">Microsoft- Spain</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">UX Designer</h3>
                <span className="qualification_subtitle">Apple Inc-Spain</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Spain-Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">Spain-Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
