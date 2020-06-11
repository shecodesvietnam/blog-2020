import 'semantic-ui-css/semantic.min.css';

import React from "react";
import CardArticle from "../components/article";
import { graphql } from 'gatsby'

const IndexPage = (props) => {
  const articles = props.data.allMongodbBlogArticle.edges;
  return (
    <div>
      {articles.map(article =>
        <CardArticle article={article.node} key={article.node.id}/>
      )}
    </div>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMongodbBlogArticle {
      edges {
        node {
          id
          title
          content
          image
        }
      }
    }
  }
`;