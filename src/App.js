import React from 'react'
import MenuF from './Menu'
import BGI from './MBGImg';
import ArticleList from './ArticleList';
import "./Article.css"
import "./loadMore"
import LoadMore from './loadMore';
import "./FooterElement"
import Foot from './Foot';
import TutorialList from './TutorialList';

import Subscribe from './Subscribe';
const { faker } = require('@faker-js/faker');


function App(){
    return(
    <div>
        
        <MenuF name="Dev@Deakin" />
        <BGI  
        img={faker.image.animals()}/>
        <ArticleList/>
        <LoadMore/>
        <TutorialList/>
        <LoadMore/>
        <Subscribe/>
        <signUp/>
        <Foot/>

        
        
    </div>);
}
export default App;