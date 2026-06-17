import { useTheme } from '../ThemeContext'

const SOURCES = [
  {
    title: 'Mix électrique — données pays',
    name: 'IEA World Energy Outlook 2025 — Free Dataset',
    url: 'https://www.iea.org/data-and-statistics/data-product/world-energy-outlook-2025-free-dataset',
    description:
      'Données historiques 2023 de production électrique par source et par pays, converties en pourcentages. Utilisées pour les 9 pays hors France.',
  },
  {
    title: 'Mix électrique — France',
    name: 'ODRÉ / RTE — Bilan électrique annuel 2025',
    url: 'https://odre.opendatasoft.com/explore/dataset/prod-national-annuel-filiere/',
    description:
      'Données de production nationale annuelle par filière (TWh), converties en pourcentages. Millésime 2025.',
  },
  {
    title: 'Coefficients CO₂',
    name: 'IPCC AR6 — Annexe III (2022)',
    url: 'https://www.ipcc.ch/report/ar6/wg3/',
    description:
      'Émissions de CO₂ en cycle de vie (gCO₂eq/kWh) par technologie de production électrique. Valeurs médianes utilisées.',
  },
  {
    title: 'Coûts de production (LCOE)',
    name: 'IRENA — Renewable Power Generation Costs 2023',
    url: 'https://www.irena.org/Publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023',
    description:
      "Coût actualisé de l'énergie (€/MWh) par filière. Valeurs indicatives, moyennes mondiales pondérées.",
  },
  {
    title: 'Indicateur de stabilité réseau',
    name: 'Méthodologie interne',
    url: null,
    description:
      "Score calculé comme la somme des parts (%) des sources pilotables (dispatchables) : nucléaire, hydraulique, gaz, thermique fossile, bioénergies. Les sources intermittentes (éolien, solaire) n'y contribuent pas.",
  },
]

export default function SourcesPage() {
  const theme = useTheme()
  const isLight = theme === 'light'
  const mutedColor = isLight ? 'text-[#64748B]' : 'text-[#9CA3AF]'
  const separatorColor = isLight ? 'border-[#E2E8F0]' : 'border-[#1F2937]'

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="mb-8 font-mono text-2xl font-bold text-[#22D3EE]">
        Sources & méthodologie
      </h2>

      <div>
        {SOURCES.map((source) => (
          <section key={source.title} className={`mb-6 border-b pb-6 ${separatorColor}`}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${mutedColor}`}>
              {source.title}
            </h3>

            <div className="mt-3">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#22D3EE]"
                >
                  {source.name}
                </a>
              ) : (
                <p className={isLight ? 'font-semibold text-[#111827]' : 'font-semibold text-[#F9FAFB]'}>
                  {source.name}
                </p>
              )}
            </div>

            <p className={`mt-2 text-sm ${mutedColor}`}>{source.description}</p>
          </section>
        ))}
      </div>

      <p className={`text-xs ${mutedColor}`}>
        Les valeurs affichées dans le simulateur sont des approximations à visée pédagogique.
        Pour des analyses précises, référez-vous directement aux sources ci-dessus.
      </p>
    </div>
  )
}
