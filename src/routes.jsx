import SimulateurPage from './pages/SimulateurPage'
import ComparaisonPage from './pages/ComparaisonPage'
import SourcesPage from './pages/SourcesPage'

export const ROUTES = [
  { path: '/', label: 'Simulateur', element: <SimulateurPage /> },
  { path: '/comparaison', label: 'Comparaison pays', element: <ComparaisonPage /> },
  { path: '/sources', label: 'Sources', element: <SourcesPage /> },
]
