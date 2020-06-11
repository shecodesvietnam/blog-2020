import React from "react";
import { Card, Image } from 'semantic-ui-react';

const CardArticle = (props) => (
  <Card
    href={props.article.link}
    target = "_blank"
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