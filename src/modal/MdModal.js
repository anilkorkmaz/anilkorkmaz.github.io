import './Mdmodal.css';

import React from 'react';
import Modal from 'react-modal';
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { VscChromeClose } from "react-icons/vsc";
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
   code: ({language, value}) => {
     return <SyntaxHighlighter style={dracula} language={language} children={value} />
   }
 }
 
const MdModal = (props) => {

   return (
      <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel={props.contentLabel}
      ariaHideApp={false}
      >
      
      <div className="close" onClick={props.closeModal}><VscChromeClose/></div>
      <ReactMarkdownWithHtml allowDangerousHtml renderers={renderers} children={props.content} className="modal" />
   </Modal>
   );
};

const customStyles = {
   overlay: {
      backgroundColor: '#282c34',
      opacity:'95%'
   },
   content: {
      top: '2%',
      left: '20%',
      right: '20%',
      bottom: '2%',
   }
};


export default MdModal;