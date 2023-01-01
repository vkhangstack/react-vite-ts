import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import khangLogo from './assets/k.png';
import './App.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const toLogin = () => {
    return navigate('/login');
  };
  const toLContact = () => {
    return navigate('/contact');
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://phamvankhang.name.vn" target="_blank">
          <img src={khangLogo} className="logo khang" alt="Khang logo" />
        </a>
      </div>
      <div className="card">
        <Button type="dashed" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button type="text" onClick={toLContact}>
          Contact
        </Button>
        <Button type="primary" onClick={toLogin}>
          Login
        </Button>
        <p>Build template by Pham Van Khang</p>
        <p>{new Date().toLocaleDateString() + ''}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
