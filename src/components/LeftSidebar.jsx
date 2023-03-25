import React from 'react';
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import {useState} from "react";
import {setmore} from "react";

const tags = [
  "react",
  "graphql",
  "nodejs",
  "sass",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "sql",
  "ubuntu",
  "aws",
];

const LeftSidebar = (props) => {
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu" id="navbar">
          <ul>
            <li className="un-li">
              <a href="/home">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li >
            <li className="un-li">
              <a href="/reading">
                <i>
                  <FcReading />
                </i>
                Reading List
              </a>
            </li>
            <li className="un-li">
              <a href="/list">
                <i>
                  <FcTodoList />
                </i>
                list
              </a>
            </li>
            <li className="un-li">
              <a href="/podcast">
                <i>
                  <AiFillAudio />
                </i>
                Podcasts
              </a>
            </li>
            <li className="un-li">
              <a href="/videos">
                <i>
                  <FcVideoCall />
                </i>
                Videos
              </a>
            </li>

            <li className="un-li">
              <a href="/tags">
                <i>
                  <FaTags />
                </i>
                Tags
              </a>
            </li>

            <li className={more ? "more hidden" : "more"}>
              <i></i>
              <a href="/#" onClick={toggle}>
                More...
              </a>
            </li>

            <div className={more ? "list" : "list hidden"}>
              <li className="un-li">
                <a href="/code">
                  <i>
                    <FcAbout />
                  </i>
                  Code of Conduct
                </a>
              </li>
              <li className="un-li">
                <a href="/FAQ">
                  <i>
                    <FcIdea />
                  </i>
                  FAQ
                </a>
              </li>
              <li className="un-li">
                <a href="/DEV">
                  <i>
                    <FcShop />
                  </i>
                  DEV Shop
                </a>
              </li>
              <li className="un-li">
                <a href="/sponsers">
                  <i>
                    <FcLike />
                  </i>
                  Sponsers
                </a>
              </li>
              <li className="un-li">
                <a href="/about">
                  <i>
                    <FaDev />
                  </i>
                  About
                </a>
              </li>
              <li className="un-li">
                <a href="/privacy">
                  <i>
                    <FcBriefcase />
                  </i>
                  Privacy Policy
                </a>
              </li>

              <li className="un-li">
                <a href="/terms">
                  <i>
                    <FcDisclaimer />
                  </i>
                  Terms of use
                </a>
              </li>
              <li >
                <a href="/contact">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <a href="/twitter">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a href="/facebook">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="/github">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="/instagram">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a href="/twitch">
            <i>
              <RiTwitchLine />
            </i>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger" id="hamburger-menu">
          <div className="hamburger__content" >
            <header>
              <h2>DEV Community</h2>
              <button onClick={() => props.closeMenu}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              <nav className="leftBar__menu">
                <ul>
                  <li className="burger-li">
                    <a href="/home" className="burger-li">
                      <i>
                        <FcHome />
                      </i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/reading" className="burger-li">
                      <i>
                        <FcReading />
                      </i>
                      Reading List
                    </a>
                  </li>
                  <li>
                    <a href="/list" className="burger-li">
                      <i>
                        <FcTodoList />
                      </i>
                      list
                    </a>
                  </li>
                  <li>
                    <a href="/podcast" className="burger-li">
                      <i>
                        <AiFillAudio />
                      </i>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="/videos" className="burger-li">
                      <i>
                        <FcVideoCall />
                      </i>
                      Videos
                    </a>
                  </li>

                  <li>
                    <a href="/tags" className="burger-li">
                      <i>
                        <FaTags />
                      </i>
                      Tags
                    </a>
                  </li>

                  <li className={more ? "more hidden" : "more"}>
                    <i></i>
                    <a href="/#" onClick={toggle}>
                      More...
                    </a>
                  </li>

                  <div className={more ? "list" : "list hidden"}>
                    <li>
                      <a href="/code" className="burger-li">
                        <i>
                          <FcAbout />
                        </i>
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="/FAQ" className="burger-li">
                        <i>
                          <FcIdea />
                        </i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/DEV" className="burger-li">
                        <i>
                          <FcShop />
                        </i>
                        DEV Shop
                      </a>
                    </li>
                    <li>
                      <a href="/sponsers" className="burger-li">
                        <i>
                          <FcLike />
                        </i>
                        Sponsers
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="burger-li">
                        <i>
                          <FaDev />
                        </i>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="burger-li">
                        <i>
                          <FcBriefcase />
                        </i>
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a href="/terms" className="burger-li">
                        <i>
                          <FcDisclaimer />
                        </i>
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="burger-li">
                        <i>
                          <FcBusinessContact />
                        </i>
                        Contact
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
              <div
                className={more ? "leftBar__social" : "leftBar__social hidden"}
              >
                <a href="/twitter">
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a href="/facebook">
                  <i>
                    <IoLogoFacebook />
                  </i>
                </a>
                <a href="/github">
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a href="/instagram">
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
                <a href="/twitch">
                  <i>
                    <RiTwitchLine />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar
