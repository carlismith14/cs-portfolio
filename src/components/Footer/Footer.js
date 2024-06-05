import React from "react";
import {
  FooterUl,
  Footer,
  Footerli,
  Footerlink,
  FooterOne,
} from "./Footer.elements";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaJs,
  FaSass,
  FaGitSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer1 = (props) => {
  return (
    <FooterOne props={props}>
      <a href="mailto:carli.t.smith1@gmail.com" className="footerlink">
        carli.t.smith1@gmail.com
      </a>

      <FooterUl>
        <Footerli>
          <Footerlink to="https://github.com/carlismith14" target="blank">
            <FaGithubSquare></FaGithubSquare>
          </Footerlink>
        </Footerli>
        <Footerli>
          <Footerlink
            to="https://www.linkedin.com/in/smithcarli"
            target="blank"
          >
            <FaLinkedin />
          </Footerlink>
        </Footerli>
      </FooterUl>
    </FooterOne>
  );
};

export default Footer1;
