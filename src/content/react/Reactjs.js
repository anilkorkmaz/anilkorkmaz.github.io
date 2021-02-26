import ContentSide from '../../container/ContentSide';

import react_hooks_useState from './content/01-react_hooks_useState.md'
import react_hooks_useEffects from './content/02-react_hooks_useEffects.md'
import redux_with_hooks from './content/03-redux_with_hooks.md'

const Reactjs = () => {

   const object = [
      {
         name: "React Hooks -> useState",
         mdfile: react_hooks_useState
      },
      {
         name: "React Hooks -> useEffects",
         mdfile: react_hooks_useEffects
      },
      {
         name: "Redux With Hooks",
         mdfile: redux_with_hooks
      }
   ];

   return <ContentSide contentList={object} />
   
};

export default Reactjs;