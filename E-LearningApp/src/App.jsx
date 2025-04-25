import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

function App() {

  const browerRouter = createBrowserRouter([
    {
      path:'/',
      element:<Nav />,
      children:[
        {
          index:true,element: <Hero />
        },
        {
          path:'/courses',
          element: <Courses />,
        },
      ],
    },
  ])
  
  return (
    <RouterProvider router={browerRouter} />
  );
}

export default App;
