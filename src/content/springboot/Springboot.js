import React, { useState } from 'react';
import MdModal from '../../modal/MdModal';

import rest_date_time_format from './content/01-rest_date_time_format.md'
import stopwatch_using from './content/02-stopwatch_using.md'
import injenctions from './content/03-injenctions.md'
import rest from './content/04-rest.md'
import validation from './content/05-validation.md'
import create_annotation from './content/06-create_annotation.md'
import global_exeption_handler from './content/07-global_exeption_handler.md'
import postgres_connection from './content/08-postgres_connection.md'
import cassandra_connection from './content/09-cassandra_connection.md'
import h2_db_connection from './content/10-h2_db_connection.md'
import execution_time_aop from './content/11-execution_time_aop.md'
import lombok from './content/12-lombok.md'
import spring_task from './content/13-spring_task.md'

const Springboot = () => {

   const [elementClicked, setElementClick] = useState(false);
   const [content, setContent] = useState(" ");

   const onClick = async (md) => {

      fetch(md).then(res => res.text()).then(text => setContent(text));
      setElementClick(true)
   }

   const closeModal = () => {
      setElementClick(false)
      setContent(" ")
   }

   return (
      <div className="content">
         <ol>
            <li  onClick={() => {onClick(rest_date_time_format)}}>StopWatch Using</li>
            <li  onClick={() => {onClick(stopwatch_using)}}>Dependency Injection</li>
            <li  onClick={() => {onClick(injenctions)}}>Rest Controller</li>
            <li  onClick={() => {onClick(rest)}}>Rest DateTimeFormatter</li>
            <li  onClick={() => {onClick(validation)}}>Validation and MethodArgumentNotValidException</li>
            <li  onClick={() => {onClick(create_annotation)}}>Create new Annotation for validation</li>
            <li  onClick={() => {onClick(global_exeption_handler)}}>Global Exception Handler</li>
            <li  onClick={() => {onClick(postgres_connection)}}>Spring Boot And Postgres</li>
            <li  onClick={() => {onClick(cassandra_connection)}}>Spring Boot And Cassandra</li>
            <li  onClick={() => {onClick(h2_db_connection)}}>Spring Boot And H2 Database</li>
            <li  onClick={() => {onClick(execution_time_aop)}}>Method execution time calculation with Annotation and AOP</li>
            <li  onClick={() => {onClick(lombok)}}>Lombok</li>
            <li  onClick={() => {onClick(spring_task)}}>Spring task / Thread Executer</li>
         </ol>

         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content}/>

      </div>
   );
};

export default Springboot;