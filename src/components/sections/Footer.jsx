import "./../../assets/scss/Footer.scss";
import spriteFooter from "./../../assets/svg/spriteFooter.svg";

export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="section-footer_links">
        <div className="section-footer_titles">
          <h2 className="titleSection-size2">Sign Up Now</h2>
          <p>© Awaluddin 2023</p>
        </div>
        <div className="section-footer_link">
          <div className="section-footer_profile">
            <h4>Lorem Ipsum</h4>
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="section-footer_socmed">
            <ul>
              <li>
                <svg>
                  <use xlinkHref={`${spriteFooter}#linkedin`} />
                </svg>
              </li>
              <li>
                <svg>
                  <use xlinkHref={`${spriteFooter}#dribbble`} />
                </svg>
              </li>
              <li>
                <svg>
                  <use xlinkHref={`${spriteFooter}#medium`} />
                </svg>
              </li>
              <li>
                <svg>
                  <use xlinkHref={`${spriteFooter}#fiverr`} />
                </svg>
              </li>
              <li>
                <svg>
                  <use xlinkHref={`${spriteFooter}#behance`} />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
