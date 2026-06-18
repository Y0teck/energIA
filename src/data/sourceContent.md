# Source Content — Fiches par filière

Données pour `src/data/sourceContent.js`. Chaque filière a : label, icon, color, co2 (gCO₂eq/kWh), lcoe (€/MWh), loadFactor, description, advantages[], limits[], keyFigures[].

---

## nucleaire

- **label:** Nucléaire
- **icon:** ⚛️
- **color:** #A855F7
- **co2:** 12
- **lcoe:** 70
- **loadFactor:** ~75 %
- **description:** Produit de l'électricité par fission de l'uranium. Pilotable et très bas-carbone, c'est la principale source de décarbonation du mix français.

**advantages:**
- Très faibles émissions CO₂ sur cycle de vie (12 gCO₂eq/kWh)
- Pilotable : production ajustable à la demande
- Forte densité énergétique — faible emprise au sol
- Production stable et prévisible sur le long terme

**limits:**
- Déchets radioactifs à stocker sur des millénaires
- Coûts et délais de construction élevés (10–15 ans)
- Sensible aux vagues de chaleur (refroidissement des rivières)
- Risque perçu élevé malgré un bilan de sécurité favorable

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 12 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~70 €/MWh
- Facteur de charge → ~75 %
- Part dans le mix France (2025) → ~70 %

---

## eolien

- **label:** Éolien
- **icon:** 💨
- **color:** #22D3EE
- **co2:** 11
- **lcoe:** 50
- **loadFactor:** 25–45 %
- **description:** Convertit l'énergie cinétique du vent en électricité. Terrestre ou offshore, c'est la filière renouvelable la plus déployée mondialement.

**advantages:**
- Émissions CO₂ parmi les plus basses (11 gCO₂eq/kWh)
- Coût compétitif et en baisse continue
- Déploiement rapide (2–3 ans par parc)
- Complémentaire au solaire (vent plus fort l'hiver et la nuit)

**limits:**
- Intermittent — dépend de la météo
- Impact paysager et sonore pour les riverains
- Nécessite des capacités de backup ou de stockage
- Offshore plus coûteux mais facteur de charge supérieur (~45 %)

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 11 gCO₂eq/kWh
- LCOE terrestre (IRENA 2023) → ~50 €/MWh
- Facteur de charge terrestre → ~25–35 %
- Facteur de charge offshore → ~40–45 %

---

## solaire

- **label:** Solaire
- **icon:** ☀️
- **color:** #F59E0B
- **co2:** 45
- **lcoe:** 45
- **loadFactor:** ~12–15 % (France)
- **description:** Convertit le rayonnement solaire en électricité via des panneaux photovoltaïques. La filière dont le coût a le plus baissé ces 15 ans (−90 % depuis 2010).

**advantages:**
- LCOE parmi les plus bas mondialement
- Modulaire — du panneau résidentiel à la ferme solaire
- Sans bruit, sans émissions locales
- Durée de vie > 30 ans avec peu de maintenance

**limits:**
- Intermittent — nul la nuit, faible en hiver
- Facteur de charge bas en France (~12 %) vs pays ensoleillés
- Nécessite stockage ou backup pour la soirée/nuit
- Utilisation de terres agricoles pour les grandes fermes

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 45 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~45 €/MWh
- Facteur de charge France → ~12–15 %
- Baisse du coût depuis 2010 → −90 %

---

## hydraulique

- **label:** Hydraulique
- **icon:** 💧
- **color:** #3B82F6
- **co2:** 24
- **lcoe:** 40
- **loadFactor:** ~35–45 %
- **description:** Exploite l'énergie potentielle de l'eau. Seule source renouvelable pilotable à grande échelle, l'hydraulique joue un rôle clé dans l'équilibre du réseau.

**advantages:**
- Pilotable et modulable en quelques secondes
- LCOE très bas sur la durée de vie (installations amorties)
- STEP : stockage d'électricité à grande échelle ("batteries géantes")
- Très longue durée de vie des ouvrages (50–100 ans)

**limits:**
- Ressources géographiques limitées — sites déjà largement exploités en France
- Impact sur les écosystèmes aquatiques et la migration des poissons
- Sensible à la sécheresse (production en baisse avec le changement climatique)
- Construction coûteuse et complexe

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 24 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~40 €/MWh
- Facteur de charge → ~35–45 %
- Part dans le mix France (2025) → ~12 %

---

## gaz

- **label:** Gaz naturel
- **icon:** 🔥
- **color:** #F97316
- **co2:** 490
- **lcoe:** 100
- **loadFactor:** Variable (backup)
- **description:** Centrale à cycle combiné gaz (CCGT) ou turbine à combustion. Très utilisé comme source de backup pour compenser l'intermittence des renouvelables.

**advantages:**
- Pilotable avec démarrage rapide (minutes)
- Infrastructure de transport existante (réseaux gaziers)
- Émissions deux fois moindres que le charbon
- Indispensable comme backup dans les mix à forte part de renouvelables

**limits:**
- Émissions CO₂ élevées (490 gCO₂eq/kWh)
- Prix du gaz volatil et dépendant des importations
- Incompatible avec les objectifs climatiques à long terme
- Risques géopolitiques liés à l'approvisionnement

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 490 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~100 €/MWh
- Émissions vs charbon → ~2× moins
- Délai de démarrage → Quelques minutes

---

## charbon

- **label:** Thermique fossile
- **icon:** 🏭
- **color:** #6B7280
- **co2:** 820
- **lcoe:** 80
- **loadFactor:** ~50–70 %
- **description:** Centrales à charbon ou fioul. La source la plus émettrice de CO₂ par kWh produit, en cours d'élimination progressive dans l'UE d'ici 2030–2038.

**advantages:**
- Énergie abondante et stockable (charbon)
- Infrastructure existante dans de nombreux pays
- Pilotable et relativement stable

**limits:**
- Plus forte intensité carbone : 820 gCO₂eq/kWh
- Pollution locale : NOx, SOx, particules fines
- Incompatible avec les objectifs Accord de Paris
- Phase-out programmé dans l'UE d'ici 2030–2038

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 820 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~80 €/MWh
- Intensité vs mix France → ~24× plus élevé
- Phase-out UE → 2030–2038

---

## bioenergies

- **label:** Bioénergies
- **icon:** 🌿
- **color:** #10B981
- **co2:** 230
- **lcoe:** 90
- **loadFactor:** ~60–80 %
- **description:** Production d'électricité à partir de biomasse (bois, résidus agricoles), biogaz ou déchets. Pilotable et renouvelable, mais avec des enjeux de durabilité.

**advantages:**
- Pilotable — production ajustable comme une centrale thermique
- Valorise les déchets agricoles, forestiers et ménagers
- Renouvelable si la biomasse est gérée durablement
- Peut être couplé à CCS (BECCS) pour du CO₂ négatif

**limits:**
- Coefficient CO₂ élevé si la biomasse n'est pas locale et durable
- Compétition potentielle avec l'alimentation et les usages forestiers
- Surface nécessaire importante pour une production significative
- Durabilité des filières très variable selon les pratiques

**keyFigures:**
- CO₂ cycle de vie (IPCC AR6) → 230 gCO₂eq/kWh
- LCOE (IRENA 2023) → ~90 €/MWh
- Facteur de charge → ~60–80 %
- Part dans le mix France (2025) → ~2 %
