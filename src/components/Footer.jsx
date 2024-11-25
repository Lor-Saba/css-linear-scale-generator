import svgLs from '../assets/ls.svg';
import svgGithub from '../assets/github.svg';

import './Footer.css';

const FOOTER_LINKS = [
  { 
    href: "https://github.com/Lor-Saba/cv", 
    imageSrc: svgLs, 
    title: "Main page", 
    inverted: true 
  },
  { 
    href: "https://github.com/Lor-Saba/css-linear-scale-generator", 
    imageSrc: svgGithub, 
    title: "Github repository", 
    inverted: false 
  }
];

export default function Footer(){
  return (
    <footer>
      {FOOTER_LINKS.map((item, index) => 
        <a key={index} href={item.href} title={item.title} className={item.inverted ? 'inverted' : null}>
          <img src={item.imageSrc}></img>
        </a>
      )}
    </footer>
  )
}
