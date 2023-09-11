import {Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Heading from './Heading';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';



const App2 = () => {
  return (
    <div>
    <Routes >
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
  </Route>
</Routes>

    </div>
  )
}

export default App2;
