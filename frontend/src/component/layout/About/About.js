import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/r4hul_pr4j4p4ti";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dnjp3nabc/image/upload/v1692294488/products/20221016_120836_xor3e2.jpg"
              alt="Founder"
            />
            <Typography>Rahul Prajapati</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Welcome to ECOMMERCE, your premier destination for quality shopping. Our platform offers a diverse selection of products that cater to your needs and style. With a commitment to exceptional service and a seamless experience, we're here to make your online shopping journey a delight.
          

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* <a
              href=""
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a> */}

            <a href="https://instagram.com/r4hul_pr4j4p4ti" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
