# Redux with hooks

### Set up dependencies
  
```bash
npm install redux@next react-redux@next
```

### Create Root Reducer
RootReducer.js
```javascript
const initialState = {
    counter: 1,
}

function RootReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter+1,
            };
        case "DECREAMENT":
            return {
                ...state,
                counter: state.counter-1,
            };
        default:
            return state;
    }
}

export default RootReducer;
```

### Configure Store
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import the following dependencies 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/RootReducer'

// use createStore with created rootReducer
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
   {/*use Provider with store*/}
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

### Use useSelector and useDispatch  
App.js
```javascript
import { useSelector, useDispatch } from 'react-redux';

function App() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({type: "INCREMENT" });
  }

  const onClickDecrement = () => {
    dispatch({type: "DECREMENT" });
  }

  return (
    <div >
      <header>
        <h1>Counter : {counter}</h1>
        <div >
          <button onClick={()=>onClickIncrement()}>+</button>
          <button onClick={()=>onClickDecrement()}>-</button>
        </div>
      </header>
    </div>
  );
  
}

export default App;
```

# Use redux thunk

- Used to pass a function instead of passing an object into dispatch
```bash
npm install redux-thunk
```

- index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/RootReducer'

// import the following dependencies 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// pass applyMiddleware function to createStore
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

- Create Actions.js file

```javascript
export const resetCounter = (counter) => {
    return async function (dispatch) {
        const action = {
            type: 'RESET',
            counter
        }
        dispatch(action);
    }
}
```

- **Update** RootReducer.js for reset actions

```javascript
const initialState = {
    counter: 1,
}

function RootReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter+1,
            };
        case "DECREAMENT":
            return {
                ...state,
                counter: state.counter-1,
            };
        // Add Reset case
        case "RESET":
            return {
                ...state,
                counter: action.counter,
        };
        default:
            return state;
    }
}

export default RootReducer;
```

- **Update** App.js for reset actions

```javascript
import { useSelector, useDispatch } from 'react-redux';
// Import Actions javascript file
import {resetCounter} from './redux/Actions';

function App() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({type: "INCREMENT" });
  }

  const onClickDecrement = () => {
    dispatch({type: "DECREMENT" });
  }

  return (
    <div >
      <header>
        <h1>Counter : {counter}</h1>
        <div >
          <button onClick={()=>onClickIncrement()}>+</button>
          <button onClick={()=>onClickDecrement()}>-</button>
          {/* 
          pass a function into dispatch
          You couldn't do this without the redux thun, you can only pass objects 
          */}
          <button onClick={()=>dispatch(resetCounter(1))}>reset</button>

        </div>
      </header>
    </div>
  );
  
}

export default App;
```