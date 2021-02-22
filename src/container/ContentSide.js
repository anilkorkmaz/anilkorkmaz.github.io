import React, { useState } from 'react';
import MdModal from '../modal/MdModal';

const ContentSide = (props) => {

   const [elementClicked, setElementClick] = useState(false);
   const [content, setContent] = useState(" ");
   const [ searchTerm, setSearchTerm] = useState("");

   const { contentList } = props;

   const onClick = async (md) => {

      fetch(md).then(res => res.text()).then(text => setContent(text));
      setElementClick(true)
   }

   const closeModal = () => {
      setElementClick(false)
      setContent(" ")
   }

   const dynamicSearch = () => {
      return contentList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
   }

   return (
      <div className="content">
         {contentList.length === 0 ? 
            <p style={{color:"grey"}}>
               Content not entered yet :(
            </p>
            :
            <>
            <input type="text" onChange={(event)=>{setSearchTerm(event.target.value)}} className="searchbox" placeholder="Search" autocomplete="off"/>
            <ol>
               {dynamicSearch().map(val => <li onClick={() => { onClick(val.mdfile) }}>{val.name}</li>)}
            </ol>
            </>
         }
         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content} />

      </div>
   );
};

export default ContentSide;