export const SCENARIOS = [
  {
    id: 'ssp1_19',
    color: '#10B981',
    tempTarget: { fr: '+1,5°C', en: '+1.5°C' },
    label: { fr: 'SSP1-1.9 — Trajectoire 1,5°C', en: 'SSP1-1.9 — 1.5°C Pathway' },
    probability: { fr: 'Ambitieux mais encore atteignable', en: 'Ambitious but still achievable' },
    co2Target: 10,
    descriptionFr:
      "Scénario le plus ambitieux du GIEC. Il suppose une transformation radicale et immédiate du système énergétique mondial. Les émissions de CO₂ atteignent zéro net avant 2050, avec un recours massif aux énergies renouvelables, à l'efficacité énergétique et à la capture de carbone (BECCS). C'est la trajectoire compatible avec l'objectif 1,5°C de l'Accord de Paris.",
    descriptionEn:
      "The IPCC's most ambitious scenario. It assumes a radical and immediate transformation of the global energy system. CO₂ emissions reach net zero before 2050, with massive deployment of renewables, energy efficiency, and carbon capture (BECCS). This is the pathway compatible with the 1.5°C goal of the Paris Agreement.",
    mix: { nucleaire: 45, eolien: 35, solaire: 5, hydraulique: 15, gaz: 0, charbon: 0, bioenergies: 0 },
    implsFr: [
      "Sortie totale du charbon d'ici 2030 dans les pays développés, 2040 dans les pays en développement.",
      "Part des renouvelables dans l'électricité mondiale : ~85-90% en 2050 (contre ~30% en 2023).",
      "Investissements annuels en énergie propre : ~4 000 Md$ (x3 par rapport à 2023).",
    ],
    implsEn: [
      'Full coal phase-out by 2030 in developed countries, 2040 in developing countries.',
      'Renewables share of global electricity: ~85-90% by 2050 (vs ~30% in 2023).',
      'Annual clean energy investment: ~$4 trillion (x3 vs 2023).',
    ],
  },
  {
    id: 'ssp1_26',
    color: '#84CC16',
    tempTarget: { fr: '+2°C', en: '+2°C' },
    label: { fr: 'SSP1-2.6 — Trajectoire 2°C', en: 'SSP1-2.6 — 2°C Pathway' },
    probability: { fr: 'Réalisable avec politiques volontaristes', en: 'Achievable with proactive policies' },
    co2Target: 50,
    descriptionFr:
      "Scénario de forte atténuation compatible avec l'objectif 2°C de l'Accord de Paris. Il suppose des politiques climatiques ambitieuses mais légèrement moins contraignantes que SSP1-1.9. Le secteur électrique est largement décarboné d'ici 2050, mais quelques centrales à gaz naturel avec capture de carbone subsistent. C'est le scénario de référence des politiques climatiques actuelles les plus ambitieuses (IEA NZE 2050).",
    descriptionEn:
      'A strong mitigation scenario compatible with the 2°C Paris Agreement goal. It assumes ambitious climate policies, slightly less constraining than SSP1-1.9. The electricity sector is largely decarbonised by 2050, but a few gas plants with carbon capture remain. This is the reference scenario of the most ambitious current climate policies (IEA NZE 2050).',
    mix: { nucleaire: 15, eolien: 39, solaire: 20, hydraulique: 20, gaz: 6, charbon: 0, bioenergies: 0 },
    implsFr: [
      "Sortie du charbon non-abattu d'ici 2035-2040 dans les pays développés.",
      "Part des renouvelables dans l'électricité mondiale : ~70-80% en 2050.",
      'Prix du carbone nécessaire : 130-200 $/tCO₂ en 2030 pour rendre les fossiles non-compétitifs.',
    ],
    implsEn: [
      'Phase-out of unabated coal by 2035-2040 in developed countries.',
      'Renewables share of global electricity: ~70-80% by 2050.',
      'Carbon price needed: $130-200/tCO₂ by 2030 to make fossil fuels uncompetitive.',
    ],
  },
  {
    id: 'ssp2_45',
    color: '#F59E0B',
    tempTarget: { fr: '+2,7°C', en: '+2.7°C' },
    label: { fr: 'SSP2-4.5 — Trajectoire intermédiaire', en: 'SSP2-4.5 — Middle-of-the-road Pathway' },
    probability: { fr: 'Trajectoire des politiques actuelles', en: 'Current policies pathway' },
    co2Target: 200,
    descriptionFr:
      'Scénario "du milieu" : les tendances sociales, économiques et technologiques évoluent mais sans rupture majeure. Les politiques climatiques existent mais sont insuffisantes pour limiter le réchauffement à 2°C. C\'est approximativement la trajectoire dans laquelle se trouvent les politiques mondiales actuelles (NDCs 2023). Le secteur électrique se décarbone partiellement mais des centrales à gaz et quelques centrales à charbon subsistent en 2050.',
    descriptionEn:
      'A "middle-of-the-road" scenario: social, economic and technological trends evolve without major disruption. Climate policies exist but are insufficient to limit warming to 2°C. This approximately matches the trajectory of current global policies (2023 NDCs). The electricity sector partially decarbonises but gas plants and some coal plants remain in 2050.',
    mix: { nucleaire: 10, eolien: 20, solaire: 20, hydraulique: 10, gaz: 25, charbon: 5, bioenergies: 10 },
    implsFr: [
      "Réchauffement probable entre +2,5°C et +3°C d'ici 2100, au-delà des seuils critiques pour de nombreux écosystèmes.",
      'Multiplication des événements extrêmes : canicules, inondations, sécheresses, montée des eaux.',
      'La fenêtre pour rester sous 2°C se ferme définitivement si ce scénario se réalise.',
    ],
    implsEn: [
      'Likely warming of +2.5°C to +3°C by 2100, beyond critical thresholds for many ecosystems.',
      'Multiplication of extreme events: heatwaves, floods, droughts, sea-level rise.',
      'The window to stay below 2°C closes permanently if this scenario materialises.',
    ],
  },
  {
    id: 'ssp5_85',
    color: '#EF4444',
    tempTarget: { fr: '+4,4°C', en: '+4.4°C' },
    label: { fr: 'SSP5-8.5 — Trajectoire haute émission', en: 'SSP5-8.5 — High-emissions Pathway' },
    probability: { fr: 'Scénario catastrophe', en: 'Catastrophic scenario' },
    co2Target: 700,
    descriptionFr:
      'Scénario de très hautes émissions : développement économique rapide basé sur les combustibles fossiles, sans politiques climatiques significatives. Considéré comme peu probable mais non impossible, il sert de référence "worst case" dans les analyses de risque. En 2050, le charbon et le gaz dominent encore le mix électrique mondial. Le réchauffement attendu dépasse +4°C à la fin du siècle.',
    descriptionEn:
      'A very high emissions scenario: rapid fossil-fuel-based economic development with no significant climate policies. Considered unlikely but not impossible, it serves as a "worst case" reference in risk analyses. By 2050, coal and gas still dominate the global electricity mix. Expected warming exceeds +4°C by end of century.',
    mix: { nucleaire: 1, eolien: 2, solaire: 2, hydraulique: 2, gaz: 17, charbon: 75, bioenergies: 1 },
    implsFr: [
      "Réchauffement de +3,3°C à +5,7°C d'ici 2100, effondrement de nombreux écosystèmes.",
      "Fonte quasi-totale de la banquise arctique estivale dès 2050, montée des eaux de 1-2 m d'ici 2100.",
      "Régions tropicales et subtropicales rendues inhabitables une partie de l'année par les canicules humides.",
    ],
    implsEn: [
      'Warming of +3.3°C to +5.7°C by 2100, collapse of many ecosystems.',
      'Near-total loss of Arctic summer sea ice by 2050, sea-level rise of 1-2 m by 2100.',
      'Tropical and subtropical regions made uninhabitable part of the year by wet-bulb heat events.',
    ],
  },
]

export const CO2_TRAJECTORIES = [
  { year: 2020, ssp1_19: 450, ssp1_26: 450, ssp2_45: 450, ssp5_85: 450 },
  { year: 2030, ssp1_19: 200, ssp1_26: 280, ssp2_45: 380, ssp5_85: 520 },
  { year: 2040, ssp1_19: 60, ssp1_26: 130, ssp2_45: 290, ssp5_85: 610 },
  { year: 2050, ssp1_19: 10, ssp1_26: 50, ssp2_45: 200, ssp5_85: 700 },
]
