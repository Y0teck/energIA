import { useTheme } from '../ThemeContext'

const SECTIONS = [
  {
    title: 'Comprendre',
    color: 'text-[#22D3EE]',
    resources: [
      {
        name: 'IPCC AR6 — Résumé pour décideurs (2022)',
        url: 'https://www.ipcc.ch/report/ar6/wg3/',
        description:
          "Le rapport de référence mondial sur l'atténuation du changement climatique. Contient les coefficients CO₂ utilisés dans ÉnergIA.",
      },
      {
        name: 'The Shift Project — Jancovici',
        url: 'https://theshiftproject.org/',
        description:
          "Think-tank sur la décarbonation de l'économie. Articles, rapports et conférences accessibles au grand public.",
      },
      {
        name: 'Conférence Jancovici — Mines ParisTech (YouTube)',
        url: 'https://www.youtube.com/watch?v=Fp6aJZQldFs',
        description:
          'Introduction complète aux enjeux énergie-climat en 2h. Point de départ recommandé.',
      },
      {
        name: 'Carbone 4',
        url: 'https://www.carbone4.com/',
        description:
          'Cabinet de conseil spécialisé en stratégie bas-carbone. Publications et outils de référence.',
      },
    ],
  },
  {
    title: 'Explorer les données',
    color: 'text-[#38F2B2]',
    resources: [
      {
        name: 'Electricity Maps',
        url: 'https://app.electricitymaps.com/map',
        description:
          "Carte mondiale du mix électrique et de l'intensité carbone en temps réel.",
      },
      {
        name: 'RTE — eCO2mix',
        url: 'https://www.rte-france.com/eco2mix',
        description:
          "Production électrique française par filière, en temps réel. Source des données France d'ÉnergIA.",
      },
      {
        name: 'IEA — World Energy Outlook 2025',
        url: 'https://www.iea.org/reports/world-energy-outlook-2025',
        description:
          "Rapport annuel de référence sur les tendances mondiales de l'énergie. Source des données pays d'ÉnergIA.",
      },
      {
        name: 'Ember — European Electricity Review',
        url: 'https://ember-energy.org/latest-insights/european-electricity-review-2024/',
        description:
          'Analyse annuelle du mix électrique européen par filière.',
      },
    ],
  },
  {
    title: 'Approfondir',
    color: 'text-[#F59E0B]',
    resources: [
      {
        name: 'Livre : "Le monde sans fin" — Jancovici & Blain',
        url: 'https://www.casterman.com/Bande-dessinee/Catalogue/Albums-Casterman/le-monde-sans-fin',
        description:
          'BD qui explique les liens entre énergie, économie et climat. Accessible et très complet.',
      },
      {
        name: 'Wikipedia — Mix énergétique',
        url: 'https://fr.wikipedia.org/wiki/Mix_%C3%A9nerg%C3%A9tique',
        description: "Vue d'ensemble du concept de mix énergétique.",
      },
      {
        name: "Wikipedia — Coût actualisé de l'énergie (LCOE)",
        url: 'https://fr.wikipedia.org/wiki/Co%C3%BBt_actualis%C3%A9_de_l%27%C3%A9nergie',
        description: 'Définition et méthode de calcul du LCOE utilisé dans ÉnergIA.',
      },
      {
        name: 'Wikipedia — Facteur de charge',
        url: 'https://fr.wikipedia.org/wiki/Facteur_de_charge',
        description:
          'Explication du facteur de charge par filière (nucléaire ~75%, solaire ~12%…).',
      },
    ],
  },
]

export default function AllerPlusLoinPage() {
  const theme = useTheme()
  const isLight = theme === 'light'
  const mutedColor = isLight ? 'text-[#64748B]' : 'text-[#9CA3AF]'
  const separatorColor = isLight ? 'border-[#E2E8F0]' : 'border-[#1F2937]'

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-mono text-2xl font-bold text-[#22D3EE]">Aller plus loin</h2>

      <p className={`mt-3 text-sm leading-relaxed ${mutedColor}`}>
        Ressources sélectionnées pour approfondir les enjeux du mix électrique, de la
        transition énergétique et du climat.
      </p>

      <div className="mt-8 space-y-8">
        {SECTIONS.map((section, index) => (
          <section key={section.title}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${section.color}`}>
              {section.title}
            </h3>

            <div className="mt-4 space-y-5">
              {section.resources.map((resource) => (
                <article key={resource.name}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#22D3EE]"
                  >
                    {resource.name}
                  </a>
                  <p className={`mt-1 text-sm leading-relaxed ${mutedColor}`}>
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>

            {index < SECTIONS.length - 1 ? (
              <hr className={`mt-8 border-t ${separatorColor}`} />
            ) : null}
          </section>
        ))}
      </div>
    </div>
  )
}
