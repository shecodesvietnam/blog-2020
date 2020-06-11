import 'semantic-ui-css/semantic.min.css';

import React from "react";
import CardArticle from "../components/article";
import { graphql } from 'gatsby'
import { Card } from 'semantic-ui-react';

const IndexPage = (props) => {
  const articles = props.data.allMongodbBlogArticle.edges;
  return (
    <Card.Group centered>
      {articles.map(article =>
        <CardArticle article={article.node} key={article.node.id}/>
      )}
    </Card.Group>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMongodbBlogArticle(sort: {order: DESC, fields: time}) {
      edges {
        node {
          id
          title
          content
          image
          link
        }
      }
    }
  }
`;