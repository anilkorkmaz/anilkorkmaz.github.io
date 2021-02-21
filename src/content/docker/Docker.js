import React, { useState } from 'react';
import MdModal from '../../modal/MdModal';
import docker_basic from './content/01-docker_basic.md'
import container_auto_restart from './content/02-container_auto_restart.md'
import dockerfile from './content/03-dockerfile.md'
import jdk_based_dockerfile from './content/04-jdk_based_dockerfile.md'
import start_stop_all_container from './content/05-start_stop_all_container.md'
import postgres_container_setup from './content/06-postgres_container_setup.md'
import keycloak_container_setup from './content/07-keycloak_container_setup.md'
import rabbitmq_container_setup from './content/08-rabbitmq_container_setup.md'

const Docker = () => {

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
            <li onClick={() => {onClick(docker_basic)}} >Docker Basics</li>
            <li onClick={() => {onClick(container_auto_restart)}}>Docker Container Auto Restart</li>
            <li onClick={() => {onClick(dockerfile)}}>DockerFile</li>
            <li onClick={() => {onClick(jdk_based_dockerfile)}}>JDK Based DockerFile</li>
            <li onClick={() => {onClick(start_stop_all_container)}}>Start Stop All containers</li>
            <li onClick={() => {onClick(postgres_container_setup)}}>Sample Postgres Container setup</li>
            <li onClick={() => {onClick(keycloak_container_setup)}}>Sample Keycloak Container setup</li>
            <li onClick={() => {onClick(rabbitmq_container_setup)}}>Sample RabbitMq Container setup</li>
         </ol>

         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content}/>
      </div>
   );
};

export default Docker;