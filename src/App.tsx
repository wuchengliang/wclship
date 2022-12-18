import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType} from './components/Alert/Alert'

const App: React.FC = () => {
  const [state, setState] =useState(false)
  const onClick = ()=>{
    setState(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom"> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank"> Baidu Link </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Disabled Link </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a onClick={onClick}>ppp</a>
        {state&&<Alert title="测试" type="warning"/>}
      </header>
    </div>
  );
}

export default App;