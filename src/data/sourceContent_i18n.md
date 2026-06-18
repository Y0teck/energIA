# Source Content — English translations

Reference file for `src/data/sourceContent.js`. Add `descriptionEn`, `advantagesEn[]`, `limitsEn[]`, and `keyFiguresEn[]` (label only, value stays the same) to each entry.

---

## nucleaire

- **descriptionEn:** Produces electricity through uranium fission. Dispatchable and very low-carbon, it is the main decarbonisation source in the French electricity mix.
- **advantagesEn:**
  - Very low lifecycle CO₂ emissions (12 gCO₂eq/kWh)
  - Dispatchable: output adjustable on demand
  - High energy density — small land footprint
  - Stable and predictable output over the long term
- **limitsEn:**
  - Radioactive waste requiring storage for millennia
  - High construction costs and timelines (10–15 years)
  - Sensitive to heatwaves (river cooling constraints)
  - High perceived risk despite a favourable safety record
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Capacity factor", "Share in France mix (2025)"]

---

## eolien

- **descriptionEn:** Converts wind kinetic energy into electricity. Onshore or offshore, it is the most widely deployed renewable technology worldwide.
- **advantagesEn:**
  - Among the lowest CO₂ emissions (11 gCO₂eq/kWh)
  - Competitive and continuously falling cost
  - Fast deployment (2–3 years per wind farm)
  - Complementary to solar (stronger wind in winter and at night)
- **limitsEn:**
  - Intermittent — depends on weather conditions
  - Visual and noise impact on local residents
  - Requires backup capacity or storage
  - Offshore more expensive but higher capacity factor (~45%)
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "Onshore LCOE (IRENA 2023)", "Onshore capacity factor", "Offshore capacity factor"]

---

## solaire

- **descriptionEn:** Converts solar radiation into electricity via photovoltaic panels. The technology whose cost has fallen most over the past 15 years (−90% since 2010).
- **advantagesEn:**
  - Among the lowest LCOE globally
  - Modular — from rooftop panels to utility-scale farms
  - Silent, no local emissions
  - Lifespan > 30 years with minimal maintenance
- **limitsEn:**
  - Intermittent — zero output at night, low in winter
  - Low capacity factor in France (~12%) vs sunnier countries
  - Requires storage or backup for evenings and nights
  - Large solar farms compete with agricultural land use
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Capacity factor (France)", "Cost reduction since 2010"]

---

## hydraulique

- **descriptionEn:** Harnesses the potential energy of water. The only large-scale dispatchable renewable, hydro plays a key role in grid balancing.
- **advantagesEn:**
  - Dispatchable and adjustable within seconds
  - Very low LCOE over lifetime (amortised infrastructure)
  - Pumped storage (PSH): large-scale electricity storage ("giant batteries")
  - Very long asset lifespan (50–100 years)
- **limitsEn:**
  - Limited geographical resources — most sites already developed in France
  - Impact on aquatic ecosystems and fish migration
  - Sensitive to drought (output declining with climate change)
  - Costly and complex construction
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Capacity factor", "Share in France mix (2025)"]

---

## gaz

- **descriptionEn:** Combined cycle gas turbine (CCGT) or open-cycle turbine. Widely used as backup to balance renewable intermittency.
- **advantagesEn:**
  - Dispatchable with fast start-up (minutes)
  - Existing transport infrastructure (gas networks)
  - Emissions roughly half those of coal
  - Essential backup in high-renewables mixes
- **limitsEn:**
  - High CO₂ emissions (490 gCO₂eq/kWh)
  - Volatile gas price dependent on imports
  - Incompatible with long-term climate targets
  - Geopolitical supply risks
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Emissions vs coal", "Start-up time"]

---

## charbon

- **descriptionEn:** Coal and oil-fired power plants. The most carbon-intensive electricity source, being phased out across the EU by 2030–2038.
- **advantagesEn:**
  - Abundant and storable fuel (coal)
  - Existing infrastructure in many countries
  - Dispatchable and relatively stable output
- **limitsEn:**
  - Highest carbon intensity: 820 gCO₂eq/kWh
  - Local air pollution: NOx, SOx, fine particles
  - Incompatible with Paris Agreement targets
  - EU phase-out planned by 2030–2038
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Intensity vs France mix", "EU phase-out"]

---

## bioenergies

- **descriptionEn:** Electricity from biomass (wood, agricultural residues), biogas, or waste. Dispatchable and renewable, but with sustainability challenges.
- **advantagesEn:**
  - Dispatchable — output adjustable like a thermal plant
  - Valorises agricultural, forestry, and household waste
  - Renewable if biomass is sustainably managed
  - Can be coupled with CCS (BECCS) for negative CO₂
- **limitsEn:**
  - High CO₂ coefficient if biomass is not local and sustainable
  - Potential competition with food production and forestry
  - Large land area needed for significant output
  - Sustainability of supply chains varies widely by practice
- **keyFiguresEn labels:** ["Lifecycle CO₂ (IPCC AR6)", "LCOE (IRENA 2023)", "Capacity factor", "Share in France mix (2025)"]
