import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";



function App() {
  return (
<>
<BrowserRouter>
<Routes>
        <Route path={'/'} element={<Layout/>}/>
        <Route path={'H'} element={<Home/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
