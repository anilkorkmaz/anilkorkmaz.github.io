import React from 'react';

const Whoami = () => {

   return (
      <div>
         <h2>Notes To Myself</h2>
         <img src={process.env.PUBLIC_URL + '/doge.gif'} style={{ maxWidth: '80%' }} alt="logo" />
         <div>
            <div >
               <b style={{ fontWeight: 600 }}>Anıl Korkmaz</b> - Software Developer
               <br />
               <p style={{ fontWeight: 300 , display:'inline'}}> anil.korkmaz@mail.com</p>
            </div>

            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/an%C4%B1l-korkmaz/">
               <img src={process.env.PUBLIC_URL + '/lnkedin.png'} style={{ width: '33px' }} alt="linkedin" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/AnilK0RKMAZ">
               <img src={process.env.PUBLIC_URL + '/tw.png'} style={{ width: '33px', marginLeft: '8px' }} alt="twitter" />
            </a>

         </div>
      </div >
   );
};

export default Whoami;