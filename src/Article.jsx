import React from "react";
import './Article.css'
const Article=(props)=>{
    return(
        
    
        <div class='box'>
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="image">
                <img  src={props.icon} alt="article Image"/>
            </div>
            <div class="content">
                <h3>{props.articleName}</h3>
                <p>{props.description}</p>
                <h4>{props.authorName}</h4>
                <div class="icons">
                    <h4>{}</h4>
                    <span> <i class="fa fa-star checked"></i>{props.rating}</span>
                    <span><i class="fas fa-user"></i>{props.username}</span>
                </div>
            </div>
        </div>
        
        
    )

}
export default Article;