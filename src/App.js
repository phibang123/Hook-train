  // import logo from './logo.svg';
  // import './App.css';

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  // export default App;

import React, { Component } from 'react'

import ContextProvider from './Hooks/Context/ContextProvider'
import DemoHookReduxApp from './Hooks/DemoHookReduxApp'
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack'
import DemoHookUseContext from './Hooks/DemoHookUseContext'
import DemoHookUseEffect from './Hooks/DemoHookUseEffect'
import DemoHookUseMemo from './Hooks/DemoHookUseMemo'
import DemoHookUseReducer from './Hooks/DemoHookUseReducer'
import DemoHookUseRef from './Hooks/DemoHookUseRef'
import DemoHookUseSpring from './Hooks/ReactSpring/DemoHookUseSpring'
import DemoHookUseState from './Hooks/DemoHookUseState'
import Ex2DemoHookUseSpring from './Hooks/ReactSpring/Ex2DemoHookUseSpring'
import LifeCycleReact from './LifeCycleReact/LifeCycleReact'
import ToDoList from './BaiTapStyleComponent/BaiTapToDoList/ToDoList/ToDoList'

export default class App extends Component {
    render() {
      return (
        <ContextProvider>
          {/* <ToDoList></ToDoList> */}
          {/* <LifeCycleReact></LifeCycleReact> */}
          {/* <DemoHookUseState></DemoHookUseState> */}
          {/* <DemoHookUseEffect></DemoHookUseEffect> */}
          {/* <DemoHookUseCallBack></DemoHookUseCallBack> */}
          {/* <DemoHookUseMemo></DemoHookUseMemo> */}
          {/* <DemoHookUseRef></DemoHookUseRef> */}
          {/* <DemoHookUseReducer></DemoHookUseReducer> */}
          {/* <DemoHookUseContext></DemoHookUseContext> */}
          {/* <DemoHookReduxApp></DemoHookReduxApp> */}
          {/* <DemoHookUseSpring></DemoHookUseSpring> */}
          <Ex2DemoHookUseSpring></Ex2DemoHookUseSpring>
        </ContextProvider>
      )
    }
  }
  