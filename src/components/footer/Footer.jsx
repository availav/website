import "./footer.css";
import { LuTwitter } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function footer() {
  return (
    <section className="footer">
      <div className="container">
        <p className="del">Delicious</p>
        <p className="del-line" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="social">
        <a href="#" className="twitter">
          <LuTwitter />
        </a>
        <a href="#">
          <RiFacebookCircleLine />
        </a>
        <a href="#">
          <AiOutlineInstagram />
        </a>
        <a href="#">
          <IoLogoGithub />
        </a>
        <a href="#">
          <IoLogoLinkedin />
        </a>
      </div>
      <p className="copy">
        © Copyright Delicious. All Rights Reserved <br/>Designed by BootstrapMade
      </p>
    </section>
  );
}

export default footer;
