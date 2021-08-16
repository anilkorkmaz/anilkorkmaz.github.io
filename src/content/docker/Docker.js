import ContentSide from '../../container/ContentSide';

import docker_basic from './content/01-docker_basic.md'
import container_auto_restart from './content/02-container_auto_restart.md'
import dockerfile from './content/03-dockerfile.md'
import jdk_based_dockerfile from './content/04-jdk_based_dockerfile.md'
import start_stop_all_container from './content/05-start_stop_all_container.md'
import postgres_container_setup from './content/06-postgres_container_setup.md'
import keycloak_container_setup from './content/07-keycloak_container_setup.md'
import rabbitmq_container_setup from './content/08-rabbitmq_container_setup.md'
import docker_compose from './content/09-docker_compese.md'

const Docker = () => {

   const object = [
      {
         name: "Docker Basics",
         mdfile: docker_basic
      },
	  {
         name: "Docker Container Auto Restart",
         mdfile: container_auto_restart
      },
	  {
         name: "DockerFile",
         mdfile: dockerfile
      },
	  {
         name: "JDK Based DockerFile",
         mdfile: jdk_based_dockerfile
      },
      {
         name: "Start Stop All containers",
         mdfile: start_stop_all_container
      },
      {
         name: "Sample Postgres Container setup",
         mdfile: postgres_container_setup
      },
      {
         name: "Sample Keycloak Container setup",
         mdfile: keycloak_container_setup
      },
      {
         name: "Sample RabbitMq Container setup",
         mdfile: rabbitmq_container_setup
      },
      {
         name: "Docker Compose",
         mdfile: docker_compose
      }];

      return <ContentSide contentList={object} />

};

export default Docker;