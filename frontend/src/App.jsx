
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route
          path="/"
          element={<Registration/>}
        />
        <Route
          path="/home"
          element={<Home/>}
        />
    </Route>
  )
);




function App() {

  return (
    <>
    <RouterProvider
    router={router}
  />
    

    </>
  )
}

export default App
