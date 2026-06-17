import {
  calcCO2,
  calcCost,
  calcRenewables,
  calcStability,
} from '../utils/calculations'

function getIndicators(mix, sources) {
  const renewables = calcRenewables(mix)

  return {
    co2: calcCO2(mix, sources),
    cost: calcCost(mix, sources),
    stability: calcStability(mix, sources),
    renewables,
    lowCarbon: mix.nucleaire + renewables,
  }
}

function isBetter(value, otherValue, higherIsBetter) {
  if (value === otherValue) return true
  return higherIsBetter ? value > otherValue : value < otherValue
}

function MetricValue({ value, unit, isBest, isLight }) {
  return (
    <span
      className={`font-mono text-xl font-bold ${
        isBest ? 'text-[#10B981]' : isLight ? 'text-[#111827]' : 'text-[#F9FAFB]'
      }`}
    >
      {value}
      <span className={`ml-1 text-xs font-normal ${isLight ? 'text-[#64748B]' : 'text-[#9CA3AF]'}`}>
        {unit}
      </span>
    </span>
  )
}

export default function ComparatorPanel({ mixA, labelA, mixB, labelB, sources, theme }) {
  const isLight = theme === 'light'
  const indicatorsA = getIndicators(mixA, sources)
  const indicatorsB = getIndicators(mixB, sources)

  const rows = [
    { key: 'co2', label: 'CO₂', unit: 'gCO₂eq/kWh', higherIsBetter: false },
    { key: 'cost', label: 'Coût', unit: '€/MWh', higherIsBetter: false },
    { key: 'stability', label: 'Stabilité', unit: '/100', higherIsBetter: true },
    { key: 'renewables', label: 'Renouvelables', unit: '%', higherIsBetter: true },
    { key: 'lowCarbon', label: 'Bas-carbone', unit: '%', higherIsBetter: true },
  ]

  return (
    <section
      className={`rounded-xl border p-5 transition-colors ${
        isLight
          ? 'border-[#E2E8F0] bg-white'
          : 'border-[#1F2937] bg-[#111827]'
      }`}
    >
      <div className="mb-5 grid grid-cols-[1fr_1fr] gap-4 pl-28">
        <h3 className={`text-sm font-bold ${isLight ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
          {labelA}
        </h3>
        <h3 className={`text-sm font-bold ${isLight ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
          {labelB}
        </h3>
      </div>

      <div className="space-y-4">
        {rows.map((row) => {
          const valueA = indicatorsA[row.key]
          const valueB = indicatorsB[row.key]
          const bestA = isBetter(valueA, valueB, row.higherIsBetter)
          const bestB = isBetter(valueB, valueA, row.higherIsBetter)

          return (
            <div key={row.key} className="grid grid-cols-[7rem_1fr_1fr] items-center gap-4">
              <p className={`text-xs font-semibold uppercase tracking-normal ${
                isLight ? 'text-[#64748B]' : 'text-[#9CA3AF]'
              }`}>
                {row.label}
              </p>
              <MetricValue value={valueA} unit={row.unit} isBest={bestA} isLight={isLight} />
              <MetricValue value={valueB} unit={row.unit} isBest={bestB} isLight={isLight} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
