# useEffect - React Hooks

### useEffect - Handle side effects
  
Syntax ->  `useEffect(effectFunction, arrayDependencies)`

Import -> 
```javascript
  import React, { useState } from 'react';
```

### Use empty dependency array to only work when component is created 
```javascript
useEffect(() => {
    
  },[])
```

### Use empty dependency array to only work when component is created and return
```javascript
useEffect(() => {
    console.log("during componet creating");

    return () => {
      console.log("during componet cleaned up");
    };
  },[])
```

### Side effect is triggered when state variables has been changed
```javascript
useEffect(() => {
    console.log("variableX OR variableY are changed");
},[variableX,variableY])
```

### Side effect is triggered when each state elements changed

```javascript
useEffect(() => {
    console.log("variableX OR variableY are changed");
})
```