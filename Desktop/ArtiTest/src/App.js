import './App.css';
import axios from 'axios';
import React from 'react';
import users from './elnare.json';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result'
import NotFound from './Pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from 'react-router-dom';
function App() {
  // console.log(users[0]._id.$oid)
  // const [state,setState] = React.useState(null);
  // React.useEffect(()=>{
  //   setState(users)
  // },[])
  const OlEl = users?.map((val,ind)=>{
    return (
      <li key={ind}>Name:{val["Ad"]}</li>
    )
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='mark/:id' element={<Result result={users} />} />
          <Route path='notfound' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
