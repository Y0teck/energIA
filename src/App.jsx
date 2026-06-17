import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { ROUTES } from './routes'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
