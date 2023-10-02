import styled from "styled-components/macro";
import { Link } from "react-router-dom";



export const FooterOne = styled.footer`
    color: var(--clr-accent);
    text-align: center;
    font-size: var(--fs-h3);
    border-top: 1px solid rgba(0, 0, 0, 0.098);
    max-height: 100px;
    * {
        color: black;
        text-decoration: none;
    }

    a{

    font-size: 1rem;
    }

    a:hover{
        text-decoration: underline;

    }
`;

export const FooterUl = styled.ul`
display:flex;
justify-content: center;
/* margin: 2em 0 0; */
padding:0;
margin:0;
/* font-size: 3rem; */
`;

export const Footerli = styled.li`
    /* margin: 0 .5em; */
    list-style: none;
`;

export const Footerlink = styled(Link)`
    padding: 0.5em;

    &:hover{
        opacity: .7;
    }    
`;

