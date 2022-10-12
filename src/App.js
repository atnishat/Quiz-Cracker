
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './Component/Topics/Topics';
import Statistic from './Component/Statistic/Statistic'
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import QuizName from './Component/Quizname/QuizName';
import Name from './Component/Name/Name';



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
              path:'/',
              loader:() => fetch('FakeData.json'),
              element:<QuizName></QuizName>
             },
            {
              path:'/:id',
              loader:async ({params}) => {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
              },
              element:<Topics></Topics>
            },
            {
              path:'/:quiz',
              loader:async ({params}) => {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quiz}`)
              },
              element:<Name></Name>
            },
            {
              path:'statistic',
              element:<Statistic></Statistic>
            },
            {
              path:'blog',
              element:<Blog></Blog>
            }
          ]},
        {
          path : '*' ,
           element: <div>this route not found</div>
          }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
