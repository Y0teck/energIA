# ÉnergIA — Roadmap

Statuts : ✅ Fait · 🚧 En cours · 💡 À faire

---

## Infrastructure & UI

| Statut | Fonctionnalité |
|--------|---------------|
| ✅ | Architecture multi-pages avec React Router extensible |
| ✅ | Navigation menu (Simulateur, Comparaison, Sources) |
| ✅ | Thème dark / light |
| ✅ | Logo SVG + favicon custom |
| ✅ | Footer avec liens sociaux (GitHub, Mastodon, Bluesky) |
| ✅ | Page Sources & méthodologie avec liens vers IEA, IPCC, IRENA, RTE |

---

## Simulateur

| Statut | Fonctionnalité |
|--------|---------------|
| ✅ | Sliders par filière avec indicateurs temps réel (CO₂, coût, stabilité, renouvelables, bas-carbone) |
| ✅ | Seuils couleurs cohérents sur tous les indicateurs (vert / ambre / rouge) |
| ✅ | Sélecteur de pays en grille (10 pays, état actif marqué) |
| ✅ | Titre dynamique "Mix énergétique de [pays]" |
| ✅ | Reset du label preset au mouvement des sliders |
| 💡 | Auto-normalisation des sliders à 100% (le total reste toujours égal à 100 en rééquilibrant les autres sources) |
| 💡 | Contraintes réalistes par source (capacité max installée par pays) |
| 💡 | Alerte si mix physiquement incohérent |
| 💡 | Indicateur "Accord de Paris" avec écart par rapport à l'objectif 50 gCO₂eq/kWh |

---

## Comparaison pays

| Statut | Fonctionnalité |
|--------|---------------|
| ✅ | Comparateur côte à côte (2 pays, indicateurs différenciés) |
| ✅ | 10 pays préconfigurés avec données IEA WEO 2025 (historique 2023) |
| ✅ | État par défaut : France à gauche, aucun pays à droite |
| ✅ | Pays déjà sélectionné de l'autre côté grisé |
| 💡 | Carte choroplèthe mondiale colorée par CO₂/kWh |
| 💡 | Ajout de pays supplémentaires (UK, Japon, Australie…) |

---

## Mode pédagogique

| Statut | Fonctionnalité |
|--------|---------------|
| 💡 | Fiches par source d'énergie (avantages, limites, chiffres clés) |
| 💡 | Tooltips explicatifs sur chaque indicateur |
| 💡 | Mode quiz/défi : atteindre un objectif CO₂ ou coût imposé |
| 💡 | Glossaire des termes (LCOE, pilotable, bas-carbone…) |

---

## Évolution temporelle

| Statut | Fonctionnalité |
|--------|---------------|
| 💡 | Historique du mix France 2000–2024 avec slider temporel |
| 💡 | Scénarios prospectifs 2030/2050 (PPE, IEA STEPS, RTE S3…) |
| 💡 | Courbe d'évolution des indicateurs en fonction du temps |

---

## Partage & export

| Statut | Fonctionnalité |
|--------|---------------|
| 💡 | URL partageable encodant le mix custom (query params) |
| 💡 | Export PNG du résumé indicateurs |
| 💡 | Sauvegarde de scénarios nommés en localStorage |
