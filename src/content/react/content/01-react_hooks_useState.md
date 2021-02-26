# useState - React Hooks

### useState - Handle state variables 
- Declare a state variable with initial value and set it
  
```javascript
import React, { useState } from 'react';
Age() => {
  const [count, setCount] = useState(28)
  const handleClick = () => setAge(age + 1)

  return (
    <div>
      I am {age} Years old.
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  )
}
```