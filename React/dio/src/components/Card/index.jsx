import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src = "https://avatars.githubusercontent.com/u/41271185?v=4"/>
          <div>
            <h4>Lucas Gomes</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4> Projeto para curso de HTML e CSS</h4>
          <p>
            {" "}
            Projeto feito no curso de HTML, CSS no bootcamp dio do Global
            avanede...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS e #Javascript</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
