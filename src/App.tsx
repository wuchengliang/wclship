import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'  
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
library.add(fas)

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Icon icon="arrow-down" theme="success" size="10x" />
        <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}} mode={'vertical'} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem> 
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>        
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
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
      </header>
    </div>
  );
}

export default App;