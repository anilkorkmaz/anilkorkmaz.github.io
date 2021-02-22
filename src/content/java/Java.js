import ContentSide from '../../container/ContentSide';

import default_in_interface from './content/01-default_in_interface.md'
import convert_date_types from './content/02-convert_date_types.md'
import timezone_convert from './content/03-timezone_convert.md'
import ldt_custom_format from './content/04-ldt_custom_format.md'
import double_float_with_decimal from './content/05-round-double_float_with_decimal.md'
import math_function_resolver from './content/06-math_function_resolver.md'
import object_equals from './content/07-object_equals.md'
import cast_object_list from './content/08-cast_object_list.md'

const Java = () => {

   const object = [
      {
         name: "Default usage in Interface",
         mdfile: default_in_interface
      },
      {
         name: "Convert Date Types",
         mdfile: convert_date_types
      },
      {
         name: "Time Zone Convert",
         mdfile: timezone_convert
      },
      {
         name: "LocalDateTime Custom Format",
         mdfile: ldt_custom_format
      },
      {
         name: "Round Double and Float with Decimal Place",
         mdfile: double_float_with_decimal
      },
      {
         name: "Math function calculator",
         mdfile: math_function_resolver
      },
      {
         name: "Null safe object equality",
         mdfile: object_equals
      },
      {
         name: "Cast object list",
         mdfile: cast_object_list
      }];
      
   return <ContentSide contentList={object} />

};

export default Java;