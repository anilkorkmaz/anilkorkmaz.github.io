import React, { useState } from 'react';
import MdModal from '../../modal/MdModal';
import default_in_interface from './content/01-default_in_interface.md'
import convert_date_types from './content/02-convert_date_types.md'
import timezone_convert from './content/03-timezone_convert.md'
import ldt_custom_format from './content/04-ldt_custom_format.md'
import double_float_with_decimal from './content/05-round-double_float_with_decimal.md'
import math_function_resolver from './content/06-math_function_resolver.md'
import object_equals from './content/07-object_equals.md'
import cast_object_list from './content/08-cast_object_list.md'

const Java = () => {

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
            <li onClick={() => {onClick(default_in_interface)}}>Default usage in Interface</li>
            <li onClick={() => {onClick(convert_date_types)}}>Convert Date Types</li>
            <li onClick={() => {onClick(timezone_convert)}}>Time Zone Convert</li>
            <li onClick={() => {onClick(ldt_custom_format)}}>LocalDateTime Custom Format</li>
            <li onClick={() => {onClick(double_float_with_decimal)}}>Round Double and Float with Decimal Place</li>
            <li onClick={() => {onClick(math_function_resolver)}}>Math function calculator</li>
            <li onClick={() => {onClick(object_equals)}}>Null safe object equality</li>
            <li onClick={() => {onClick(cast_object_list)}}>Cast object list</li>
         </ol>
         <MdModal modalIsOpen={elementClicked} closeModal={closeModal} contentLabel="mdcontent" content={content}/>

      </div>
   );
};

export default Java;