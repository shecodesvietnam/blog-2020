import React from "react";
import { Card, Image, Divider } from 'semantic-ui-react';

const CardArticle = (props) => (
  <Card
    href={props.article.link}
    target = "_blank"
    color='purple'
    style={{backgroundColor: '#000'}}>
    <Image src={props.article.image} wrapped ui={false} />
    <Card.Content style={{paddingBottom: '20px'}}>
      <span>{props.article.title}</span>
    </Card.Content>
  </Card>
);

export default CardArticle;