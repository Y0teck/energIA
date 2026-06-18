# Glossaire ÉnergIA — contenu FR/EN

Données pour `src/pages/GlossairePage.jsx`. Chaque terme a : id, termFr, termEn, definitionFr, definitionEn, category.

Categories : "technique" | "concept" | "source"

---

## Termes techniques

### lcoe
- **termFr:** LCOE (Coût actualisé de l'énergie)
- **termEn:** LCOE (Levelized Cost of Energy)
- **definitionFr:** Le coût actualisé de l'énergie (LCOE, Levelized Cost of Energy) représente le coût moyen de production d'un MWh sur toute la durée de vie d'une centrale, en incluant la construction, l'exploitation, la maintenance et le démantèlement. Il s'exprime en €/MWh et permet de comparer les sources d'énergie indépendamment de leur profil de production.
- **definitionEn:** The Levelized Cost of Energy (LCOE) represents the average cost of producing one MWh over the full lifetime of a power plant, including construction, operation, maintenance, and decommissioning. Expressed in €/MWh, it allows comparing energy sources regardless of their production profile.
- **category:** technique

### facteur-de-charge
- **termFr:** Facteur de charge
- **termEn:** Capacity factor
- **definitionFr:** Le facteur de charge est le rapport entre l'énergie réellement produite par une centrale sur une période donnée et l'énergie qu'elle aurait produite si elle avait fonctionné à pleine puissance pendant toute cette période. Il s'exprime en %. Exemples typiques : nucléaire ~75%, éolien terrestre ~25%, solaire ~12%.
- **definitionEn:** The capacity factor is the ratio of actual energy produced by a power plant over a period to the energy it would have produced at full capacity throughout. Expressed as %. Typical values: nuclear ~75%, onshore wind ~25%, solar ~12%.
- **category:** technique

### pilotable
- **termFr:** Source pilotable (dispatchable)
- **termEn:** Dispatchable source
- **definitionFr:** Une source d'énergie est dite pilotable (ou dispatchable) lorsqu'elle peut être activée, modulée ou arrêtée à la demande, indépendamment des conditions météo. Sont pilotables : le nucléaire, le gaz, le charbon, l'hydraulique (avec retenue), les bioénergies. Les sources intermittentes (éolien, solaire) ne le sont pas. La stabilité du réseau dépend de la part des sources pilotables dans le mix.
- **definitionEn:** An energy source is dispatchable when it can be switched on, adjusted, or turned off on demand, regardless of weather conditions. Dispatchable sources include nuclear, gas, coal, reservoir hydro, and bioenergy. Intermittent sources (wind, solar) are not. Grid stability depends on the share of dispatchable sources in the mix.
- **category:** technique

### co2eq
- **termFr:** CO₂eq (équivalent CO₂)
- **termEn:** CO₂eq (CO₂ equivalent)
- **definitionFr:** Le CO₂ équivalent (CO₂eq) est une unité qui exprime l'impact climatique de tous les gaz à effet de serre (CO₂, méthane, protoxyde d'azote…) en équivalent CO₂, en tenant compte de leur pouvoir de réchauffement respectif. Dans ÉnergIA, l'intensité carbone est exprimée en gCO₂eq/kWh — la masse de CO₂ équivalent émise pour produire un kilowattheure d'électricité.
- **definitionEn:** CO₂ equivalent (CO₂eq) is a unit expressing the climate impact of all greenhouse gases (CO₂, methane, nitrous oxide…) in CO₂ terms, weighted by their global warming potential. In ÉnergIA, carbon intensity is expressed in gCO₂eq/kWh — the mass of CO₂ equivalent emitted to produce one kilowatt-hour of electricity.
- **category:** technique

### acv
- **termFr:** Analyse du cycle de vie (ACV)
- **termEn:** Life cycle assessment (LCA)
- **definitionFr:** L'analyse du cycle de vie (ACV) comptabilise toutes les émissions de gaz à effet de serre d'une filière énergétique, de l'extraction des matières premières jusqu'au démantèlement, en passant par la construction et l'exploitation. Les coefficients CO₂ d'ÉnergIA sont des médianes issues du rapport AR6 du GIEC, calculées en cycle de vie complet.
- **definitionEn:** Life cycle assessment (LCA) accounts for all greenhouse gas emissions of an energy technology, from raw material extraction to decommissioning, including construction and operation. ÉnergIA's CO₂ coefficients are medians from the IPCC AR6 report, calculated on a full life cycle basis.
- **category:** technique

### intensite-carbone
- **termFr:** Intensité carbone
- **termEn:** Carbon intensity
- **definitionFr:** L'intensité carbone d'un mix électrique est la quantité de CO₂ équivalent émise en moyenne pour produire un kilowattheure d'électricité. Elle dépend du mix de sources utilisées. L'Union européenne affichait ~242 gCO₂eq/kWh en 2023. L'objectif de l'Accord de Paris pour le secteur électrique est < 50 gCO₂eq/kWh à horizon 2030–2035.
- **definitionEn:** The carbon intensity of an electricity mix is the average amount of CO₂ equivalent emitted to produce one kilowatt-hour of electricity. It depends on the mix of sources used. The European Union showed ~242 gCO₂eq/kWh in 2023. The Paris Agreement target for the electricity sector is < 50 gCO₂eq/kWh by 2030–2035.
- **category:** technique

---

## Concepts énergie & climat

### mix-electrique
- **termFr:** Mix électrique
- **termEn:** Electricity mix
- **definitionFr:** Le mix électrique désigne la répartition des différentes sources d'énergie (nucléaire, renouvelables, fossiles…) utilisées pour produire l'électricité d'un pays ou d'une région à un instant donné. Il est exprimé en pourcentage de la production totale. Le mix électrique influe directement sur l'intensité carbone, le coût et la stabilité du réseau.
- **definitionEn:** The electricity mix refers to the breakdown of energy sources (nuclear, renewables, fossil fuels…) used to produce electricity in a country or region at a given time. It is expressed as a percentage of total production and directly affects carbon intensity, cost, and grid stability.
- **category:** concept

### transition-energetique
- **termFr:** Transition énergétique
- **termEn:** Energy transition
- **definitionFr:** La transition énergétique désigne le passage d'un système énergétique basé sur les combustibles fossiles (charbon, pétrole, gaz) vers un système plus sobre en carbone, reposant sur les énergies renouvelables et la maîtrise de la demande. Elle vise à réduire les émissions de gaz à effet de serre pour limiter le réchauffement climatique.
- **definitionEn:** The energy transition refers to the shift from a fossil fuel-based energy system (coal, oil, gas) to a lower-carbon system relying on renewables and demand reduction. It aims to cut greenhouse gas emissions to limit global warming.
- **category:** concept

### neutralite-carbone
- **termFr:** Neutralité carbone (Net zéro)
- **termEn:** Carbon neutrality (Net zero)
- **definitionFr:** La neutralité carbone (ou net zéro) est atteinte lorsque les émissions résiduelles de gaz à effet de serre sont compensées par des absorptions équivalentes (forêts, captage carbone…). L'Accord de Paris vise la neutralité carbone mondiale à l'horizon 2050. Pour le secteur électrique, cela implique une quasi-décarbonation d'ici 2035 dans les pays développés.
- **definitionEn:** Carbon neutrality (or net zero) is achieved when residual greenhouse gas emissions are offset by equivalent absorptions (forests, carbon capture…). The Paris Agreement targets global carbon neutrality by 2050. For the electricity sector, this implies near-complete decarbonisation by 2035 in developed countries.
- **category:** concept

### accord-de-paris
- **termFr:** Accord de Paris
- **termEn:** Paris Agreement
- **definitionFr:** L'Accord de Paris est un traité international adopté en 2015, signé par 196 parties, visant à limiter le réchauffement climatique à 1,5°C–2°C par rapport aux niveaux préindustriels. Il fixe le cadre des engagements nationaux de réduction des émissions (NDC). Pour le secteur électrique, l'objectif compatible 1,5°C implique une intensité carbone < 50 gCO₂eq/kWh.
- **definitionEn:** The Paris Agreement is an international treaty adopted in 2015, signed by 196 parties, aiming to limit global warming to 1.5°C–2°C above pre-industrial levels. It sets the framework for national emission reduction commitments (NDCs). For the electricity sector, the 1.5°C-compatible target implies a carbon intensity < 50 gCO₂eq/kWh.
- **category:** concept

### bas-carbone
- **termFr:** Énergie bas-carbone
- **termEn:** Low-carbon energy
- **definitionFr:** Une source d'énergie est dite bas-carbone lorsque ses émissions en cycle de vie sont faibles, généralement inférieures à 100 gCO₂eq/kWh. Dans ÉnergIA, l'indicateur "Énergie bas-carbone" regroupe le nucléaire et toutes les énergies renouvelables. Le nucléaire (~12 gCO₂eq/kWh) et l'hydraulique (~24 gCO₂eq/kWh) sont parmi les sources les plus bas-carbone.
- **definitionEn:** An energy source is low-carbon when its lifecycle emissions are low, generally below 100 gCO₂eq/kWh. In ÉnergIA, the "Low-carbon energy" indicator groups nuclear and all renewable energies. Nuclear (~12 gCO₂eq/kWh) and hydro (~24 gCO₂eq/kWh) are among the lowest-carbon sources.
- **category:** concept

---

## Sources d'énergie (résumés — renvoient vers les fiches détaillées)

### nucleaire
- **termFr:** Nucléaire
- **termEn:** Nuclear
- **definitionFr:** Énergie produite par fission de l'uranium dans des réacteurs. Très bas-carbone (~12 gCO₂eq/kWh en cycle de vie), pilotable, à haut facteur de charge (~75%). Principal atout pour décarboner le réseau tout en maintenant la stabilité. Contrainte principale : gestion des déchets radioactifs et durée de construction.
- **definitionEn:** Energy produced by uranium fission in reactors. Very low-carbon (~12 gCO₂eq/kWh lifecycle), dispatchable, high capacity factor (~75%). Key asset for decarbonising the grid while maintaining stability. Main constraint: radioactive waste management and construction time.
- **category:** source

### eolien
- **termFr:** Éolien
- **termEn:** Wind
- **definitionFr:** Énergie convertie à partir du vent par des turbines. Renouvelable, bas-carbone (~11 gCO₂eq/kWh), mais intermittente : production variable selon la météo, facteur de charge ~25–40%. Coût compétitif, déploiement rapide. Nécessite des sources pilotables en complément pour la stabilité réseau.
- **definitionEn:** Energy converted from wind by turbines. Renewable, low-carbon (~11 gCO₂eq/kWh), but intermittent: variable output depending on weather, capacity factor ~25–40%. Competitive cost, fast deployment. Requires dispatchable sources for grid stability.
- **category:** source

### solaire
- **termFr:** Solaire photovoltaïque
- **termEn:** Solar photovoltaic
- **definitionFr:** Énergie convertie à partir de la lumière solaire par des panneaux photovoltaïques. Renouvelable, bas-carbone (~45 gCO₂eq/kWh), mais intermittente et saisonnière, facteur de charge ~12%. Coût en forte baisse, déploiement très rapide. Production nulle la nuit et faible en hiver.
- **definitionEn:** Energy converted from sunlight by photovoltaic panels. Renewable, low-carbon (~45 gCO₂eq/kWh), but intermittent and seasonal, capacity factor ~12%. Rapidly falling costs, very fast deployment. Zero output at night and low in winter.
- **category:** source

### hydraulique
- **termFr:** Hydraulique
- **termEn:** Hydropower
- **definitionFr:** Énergie produite par la force de l'eau (barrages, cours d'eau). Renouvelable, très bas-carbone (~24 gCO₂eq/kWh), pilotable avec retenue d'eau. Facteur de charge ~40–50%. Ressource limitée géographiquement. L'hydraulique est souvent le pilier des mix à faibles émissions (Norvège, Brésil).
- **definitionEn:** Energy produced from water flow (dams, rivers). Renewable, very low-carbon (~24 gCO₂eq/kWh), dispatchable with water reservoirs. Capacity factor ~40–50%. Geographically limited resource. Hydro is often the backbone of low-emission mixes (Norway, Brazil).
- **category:** source

### gaz
- **termFr:** Gaz naturel
- **termEn:** Natural gas
- **definitionFr:** Combustible fossile brûlé dans des turbines pour produire de l'électricité. Pilotable, réponse rapide à la demande (~490 gCO₂eq/kWh). Moins émetteur que le charbon, mais reste une source fossile. Souvent utilisé comme source de transition ou d'appoint pour compenser l'intermittence des renouvelables.
- **definitionEn:** Fossil fuel burned in turbines to produce electricity. Dispatchable, fast response to demand (~490 gCO₂eq/kWh). Less emitting than coal, but still a fossil source. Often used as a transition or backup source to balance renewable intermittency.
- **category:** source

### charbon
- **termFr:** Thermique fossile (charbon, fioul)
- **termEn:** Fossil thermal (coal, oil)
- **definitionFr:** Production d'électricité par combustion de charbon ou de fioul. Source très émettrice (~820 gCO₂eq/kWh pour le charbon), pilotable. À éliminer en priorité pour décarboner le mix électrique. Encore très présente dans certains pays (Pologne, Inde, Chine).
- **definitionEn:** Electricity production by burning coal or oil. Highly emitting (~820 gCO₂eq/kWh for coal), dispatchable. Priority target for elimination to decarbonise the electricity mix. Still heavily used in some countries (Poland, India, China).
- **category:** source

### bioenergies
- **termFr:** Bioénergies
- **termEn:** Bioenergy
- **definitionFr:** Énergie produite à partir de biomasse organique (bois, déchets agricoles, biogaz…). Considérée renouvelable si la biomasse est gérée durablement. Pilotable, facteur de charge modéré. Émissions variables selon la filière (~230 gCO₂eq/kWh en cycle de vie). Débats sur la durabilité à grande échelle.
- **definitionEn:** Energy produced from organic biomass (wood, agricultural waste, biogas…). Considered renewable if biomass is sustainably managed. Dispatchable, moderate capacity factor. Variable lifecycle emissions (~230 gCO₂eq/kWh). Ongoing debate about large-scale sustainability.
- **category:** source
