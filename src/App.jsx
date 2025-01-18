import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./Pages/Home"
import Details from "./Pages/Details"


const App =() =>{
  const routes = [
    {
      path: "/",
      element: <Home />
    },{
      path: "/Details/:imdbID",
      element: <Details />
    }
  ]
  const router =createBrowserRouter ( routes,{
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  })
  return<RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
  />
}
export default App
