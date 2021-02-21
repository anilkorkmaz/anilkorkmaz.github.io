import React, { useState } from 'react';
import MdModal from '../../modal/MdModal';

import psql_basics from './content/01-psql_basics.md'
import postgres_backup from './content/02-postgres_backup.md'
import postgres_restore from './content/03-postgres_restore.md'
import pgpass from './content/04-pgpass.md'
import remote_psql_command from './content/05-remote_psql_command.md'

const Postgres = () => {

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
            <li onClick={() => {onClick(psql_basics)}}>Postgresql Psql basics</li>
            <li onClick={() => {onClick(postgres_backup)}}>Postgresql Backup</li>
            <li onClick={() => {onClick(postgres_restore)}}>Postgresql Restore</li>
            <li onClick={() => {onClick(pgpass)}}>Pgpass -Run psql command without passoword</li>
            <li onClick={() => {onClick(remote_psql_command)}}>Run remote psql command with any user</li>
         </ol>
         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content}/>

      </div>
   );
};

export default Postgres;