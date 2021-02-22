import ContentSide from '../../container/ContentSide';

import user_management from './content/01-user_management.md'
import bash_script_get_parameters from './content/02-bash_script_get_parameters.md'
import folder_or_file_size_command from './content/03-folder_or_file_size_command.md'
import zsh from './content/04-zsh.md'
import compress_extraxt_file from './content/05-compress_extraxt_file.md'
import enable_ssh from './content/06-enable_ssh.md'
import linux_usefull_files from './content/07-linux_usefull_files.md'
import cast_object_list from './content/08-run_command_with_user.md'
import hide_grub from './content/09-hide_grub.md'
import scp_command from './content/10-scp_command.md'
import display_branch_name from './content/11-display_branch_name.md'
import kill_port_process from './content/12-kill_port_process.md'
import display_last_boot_logs from './content/13-display_last_boot_logs.md'
import create_bootable_disk from './content/14-create_bootable_disk.md'

const Linux = () => {

   const object = [
      {
         name: "Linux files that should be learned",
         mdfile: linux_usefull_files
      },
      {
         name: "Linux User Management",
         mdfile: user_management
      },
      {
         name: "Get bash script parameters with name",
         mdfile: bash_script_get_parameters
      },
      {
         name: "Folder size command with deeph",
         mdfile: folder_or_file_size_command
      },
      {
         name: "Zsh / Oh My Zsh / Autocomplete from history",
         mdfile: zsh
      },
      {
         name: "Compress and extract a file or a directory",
         mdfile: compress_extraxt_file
      },
      {
         name: "Enable Ssh",
         mdfile: enable_ssh
      },
      {
         name: "Run command as a user",
         mdfile: cast_object_list
      },
      {
         name: "Hide Grub",
         mdfile: hide_grub
      },
      {
         name: "Copy File with ssh , Scp",
         mdfile: scp_command
      },
      {
         name: "Display Git Branch Name on Terminal",
         mdfile: display_branch_name
      },
      {
         name: "Kill the active port’s process",
         mdfile: kill_port_process
      },
      {
         name: "Display logs during last boot",
         mdfile: display_last_boot_logs
      },
      {
         name: "Create bootable disk",
         mdfile: create_bootable_disk
      }];
      
   return <ContentSide contentList={object} />

};

export default Linux;