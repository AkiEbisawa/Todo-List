// import Register from './components/Register';
import Login from './components/Login';
import Todo from './Todos';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Todo' element={<Todo />} />
    </Routes>
    </BrowserRouter>
    
    </>
    // <main className="App">
    //   <Login />
    // </main>
  );
}

export default App;