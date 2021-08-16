import ContentSide from '../../container/ContentSide';

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
import entity_relation from './content/14-entiy_relations.md'

const Springboot = () => {

   const object = [
      {
         name: "StopWatch Using",
         mdfile: stopwatch_using
      },
      {
         name: "Dependency Injection",
         mdfile: injenctions
      },
      {
         name: "Rest Controller",
         mdfile: rest
      },
      {
         name: "Rest DateTimeFormatter",
         mdfile: rest_date_time_format
      },
      {
         name: "Validation and MethodArgumentNotValidException",
         mdfile: validation
      },
      {
         name: "Create new Annotation for validation",
         mdfile: create_annotation
      },
      {
         name: "Global Exception Handler",
         mdfile: global_exeption_handler
      },
      {
         name: "Spring Boot And Postgres",
         mdfile: postgres_connection
      },
      {
         name: "Spring Boot And Cassandra",
         mdfile: cassandra_connection
      },
      {
         name: "Spring Boot And H2 Database",
         mdfile: h2_db_connection
      },
      {
         name: "Method execution time calculation with Annotation and AOP",
         mdfile: execution_time_aop
      },
      {
         name: "Lombok",
         mdfile: lombok
      },
      {
         name: "Spring task / Thread Executer",
         mdfile: spring_task
      },
      {
         name: "Entity relations",
         mdfile: entity_relation
      },
   ];

   return <ContentSide contentList={object} />
   
};

export default Springboot;