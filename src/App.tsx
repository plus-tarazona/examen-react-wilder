import { lazy, Suspense } from 'react'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loading from './presentation/components/loading/loading';
import './app.scss'

const Login = lazy(()=> import('./presentation/pages/login/login'))
const Home = lazy(()=> import('./presentation/pages/home/home'))

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <HashRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
          </Routes>
        </HashRouter>
        </Suspense>
     </div> 
  )
}

export default App
