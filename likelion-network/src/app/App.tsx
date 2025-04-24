import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import GetPage from '../pages/Get';
import PostPage from '../pages/Post';
import DeletePage from '../pages/Delete';
import PatchPage from '../pages/Patch';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/get" element={<GetPage/>} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/delete" element={<DeletePage/>} />
          <Route path="/patch/:id" element={<PatchPage/>} />
          <Route path="/patch" element={<PatchPage/>} />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App
