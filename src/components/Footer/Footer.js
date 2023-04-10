import React from "react";
import { FooterUl, Footer, Footerli, Footerlink, FooterOne } from "./Footer.elements";
import { 
    FaHtml5,
    FaCss3Alt,
    FaReact, 
    FaFigma,
    FaJs,
    FaSass,
    FaGitSquare,
    FaGithubSquare,
    FaLinkedin
   } from "react-icons/fa";

const Footer1 = () => {
  return (
    <FooterOne>
      <a href="mailto:hello@jane.dev" className="footerlink">
        carli.t.smith1@gmail.com
      </a>

      <FooterUl>
        <Footerli>
          <Footerlink to="#">
            <FaGithubSquare></FaGithubSquare>
          </Footerlink>
        </Footerli>
        <Footerli>
          <Footerlink to="#">
            <FaLinkedin />
          </Footerlink>
        </Footerli>
      </FooterUl>
    </FooterOne>
  );
};

export default Footer1;
