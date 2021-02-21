import React, { useState } from 'react';
import MdModal from '../../modal/MdModal';

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
            <li onClick={() => {onClick(linux_usefull_files)}}>Linux files that should be learned</li>
            <li onClick={() => {onClick(user_management)}}>Linux User Management</li>
            <li onClick={() => {onClick(bash_script_get_parameters)}}>Get bash script parameters with name</li>
            <li onClick={() => {onClick(folder_or_file_size_command)}}>Folder size command with deeph</li>
            <li onClick={() => {onClick(zsh)}}>Zsh / Oh My Zsh / Autocomplete from history</li>
            <li onClick={() => {onClick(compress_extraxt_file)}}>Compress and extract a file or a directory</li>
            <li onClick={() => {onClick(enable_ssh)}}>Enable Ssh</li>
            <li onClick={() => {onClick(cast_object_list)}}>Run command as a user</li>
            <li onClick={() => {onClick(hide_grub)}}>Hide Grub</li>
            <li onClick={() => {onClick(scp_command)}}>Copy File with ssh , Scp</li>
            <li onClick={() => {onClick(display_branch_name)}}>Display Git Branch Name on Terminal</li>
            <li onClick={() => {onClick(kill_port_process)}}>Kill the active port’s process</li>
            <li onClick={() => {onClick(display_last_boot_logs)}}>Display logs during last boot</li>
            <li onClick={() => {onClick(create_bootable_disk)}}>Create bootable disk</li>
   
         </ol>
         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content}/>

      </div>
   );
};

export default Linux;