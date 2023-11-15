import './App.css'
import {lazy,Suspense} from 'react'
// import HomePage from './pages/Home';
// import AboutPage from './pages/About';//import estatico
import { Router } from './Router';
import Page404 from './404';
import SearchPage from './pages/Search';
import {Route} from './Route';

const LazyHomePage = lazy(() => import('./pages/Home'))//importacion con 
const LazyAboutPage = lazy(() => import('./pages/About'))

const appRouter = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
];

function App() {
  
  return (
      <main>
        <Suspense fallback={null}>
          <Router routes = {appRouter} defaultComponent={Page404}>
            <Route path='/' Component={LazyHomePage}/>
            <Route path='/about' Component={LazyAboutPage}/>
          </Router>
        </Suspense>
      </main>
  )
}

export default App
