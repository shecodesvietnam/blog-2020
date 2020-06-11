import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const CardArticle = (props) => (
  <Card
    href="https://www.facebook.com/shecodesvietnam/photos/a.204360333678703/691203938327671/?type=3&theater"
    target = "_blank"
    centered
    color='purple'>
    <Image src={props.article.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.article.title}</Card.Header>
      <Card.Description>
        {
          props.article.content.split('\\n').map((item, i) => {
            return <p key={i}>{item}</p>;
          })
        }
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardArticle;