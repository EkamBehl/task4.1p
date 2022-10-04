import React, { Component } from 'react'

import './Menu.css'
function MenuF(props){
   
        
    return(
        <nav>
            <div class="icon">{props.name}</div>
            <div class="search-box">
            
                <input type='search' placeholder='search'></input>
                <span></span>

           </div>
           
            <ol>
                <li>
                    <a href='#'>Post</a>
                    <a href='#'>Login</a>
                </li>
            </ol>
            

        </nav>

    )
    




}
export default MenuF;
