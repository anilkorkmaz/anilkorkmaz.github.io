import ContentSide from '../../container/ContentSide';

import psql_basics from './content/01-psql_basics.md'
import postgres_backup from './content/02-postgres_backup.md'
import postgres_restore from './content/03-postgres_restore.md'
import pgpass from './content/04-pgpass.md'
import remote_psql_command from './content/05-remote_psql_command.md'

const Postgres = () => {

   const object = [
      {
         name: "Postgresql Psql basics",
         mdfile: psql_basics
      },
	  {
         name: "Postgresql Backup",
         mdfile: postgres_backup
      },
	  {
         name: "Postgresql Restore",
         mdfile: postgres_restore
      },
	  {
         name: "Pgpass -Run psql command without passoword",
         mdfile: pgpass
      },
	  {
         name: "Run remote psql command with any user",
         mdfile: remote_psql_command
      }];

      return <ContentSide contentList={object} />
};

export default Postgres;