import React from "react";
import Article from './Article'
import './Article.css'
import contentList from "./contentList";

function articleComponent(article,i){
    return(
        <Article
        icon={article.icon}
        description={article.description}
        rating={article.rating}
        username={article.username}
        articleName={article.articleName}
        authorName={article.authorName}
    />
    )
}
const { faker } = require('@faker-js/faker');
const ArticleList=()=>{
    return(
        <div class="container">
            <h1 class="heading">Featured Articles</h1>
            
            <div className="box-container">
                {contentList.map(articleComponent)}
            
            </div>
        </div>
    )

}
export default ArticleList