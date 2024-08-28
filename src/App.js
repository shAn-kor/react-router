import {Routes, Route} from 'react-router-dom';

import Home from './component/Home';
import User from './component/User';
import Info from './component/Info';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/info' element={<Info/>}/>
    </Routes>
  );
}

export default App;
