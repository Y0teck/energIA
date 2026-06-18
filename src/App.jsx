import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { ROUTES } from './routes'
import ScrollToTopButton from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {ROUTES.flatMap((route) =>
            (route.aliases ?? []).map((alias) => (
              <Route key={alias} path={alias} element={route.element} />
            )),
          )}
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  )
}
