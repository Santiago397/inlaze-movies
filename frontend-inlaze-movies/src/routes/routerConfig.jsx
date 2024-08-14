import { Guest, HomePage, LoginPage } from "../pages";

export let routes = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/guest',
    element: <Guest />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
]
