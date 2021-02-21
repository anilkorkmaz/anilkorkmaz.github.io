import React from 'react';
import {
   Link
 } from "react-router-dom";
const Category = () => {
   return (
      <div>
         <h2>cd </h2>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/java">Java</Link></li>
            <li><Link to="/springboot">Spring Boot Framework</Link></li>
            <li><Link to="/postgres">Postgresql</Link></li>
            <li><Link to="/linux">Linux</Link></li>
            <li><Link to="/">Git</Link></li>
            <li><Link to="/docker">Docker</Link></li>
         </ul>
      </div>
   );
};

export default Category;