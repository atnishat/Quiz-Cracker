
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './Component/Topics/Topics';
import Statistic from './Component/Statistic/Statistic'
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';



function App() {
  const router = createBrowserRouter([
        {
          path:'/',
          element:<Main></Main>,
          children:[
            {
             path:'/',
             loader:() => fetch(`https://openapi.programming-hero.com/api/quiz`),
             element:<Home></Home>
            },
            {
              path:'/:id',
              loader:async ({params}) => {
                // console.log(params.id);
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
              },
              element:<Topics></Topics>
            },
            {
              path:'statistic',
              element:<Statistic></Statistic>
            },
            {
              path:'blog',
              element:<Blog></Blog>
            }
          ]

        }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
