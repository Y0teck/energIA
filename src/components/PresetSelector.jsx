import { useContext, useEffect, useState } from 'react'
import { COUNTRY_PRESETS } from '../data/countryPresets'
import { LanguageContext } from '../LanguageContext'
import { useStrings } from '../i18n/useStrings'

export default function PresetSelector({ onSelect, theme, activeId = null, disabledId = null }) {
  const isLight = theme === 'light'
  const s = useStrings()
  const { lang } = useContext(LanguageContext)
  const [expanded, setExpanded] = useState(false)
  const activeIndex = COUNTRY_PRESETS.findIndex((preset) => preset.id === activeId)
  const visiblePresets = expanded ? COUNTRY_PRESETS : COUNTRY_PRESETS.slice(0, 10)

  useEffect(() => {
    if (activeIndex >= 10) {
      setExpanded(true)
    }
  }, [activeIndex])

  function selectPreset(preset) {
    onSelect(preset.mix)
  }

  return (
    <section
      className={`rounded-xl border transition-colors ${
        isLight
          ? 'border-[#E2E8F0] bg-white'
          : 'border-[#1F2937] bg-[#111827]'
      }`}
    >
      <div className="grid grid-cols-5 gap-2">
        {visiblePresets.map((preset) => {
          const isActive = preset.id === activeId
          const isDisabled = preset.id === disabledId

          return (
            <button
              key={preset.id}
              type="button"
              disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) selectPreset(preset)
              }}
              className={`flex min-w-0 flex-col items-center gap-1 rounded border px-2 py-3 transition ${
                isActive
                  ? 'border-[#22D3EE] bg-[#22D3EE]/10 text-[#22D3EE]'
                  : isDisabled
                    ? `cursor-not-allowed opacity-40 ${
                        isLight
                          ? 'border-[#E2E8F0] text-[#475569]'
                          : 'border-[#1F2937] text-[#9CA3AF]'
                      }`
                  : isLight
                    ? 'border-[#E2E8F0] text-[#475569] hover:border-[#22D3EE] hover:text-[#0891B2]'
                    : 'border-[#1F2937] text-[#9CA3AF] hover:border-[#22D3EE] hover:text-[#22D3EE]'
              }`}
            >
              <span aria-hidden="true" style={{ fontSize: '1.5rem' }}>
                {preset.flag}
              </span>
              <span className="max-w-full truncate text-xs font-semibold">
                {s.countries[preset.id] ?? preset.label}
              </span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mx-auto mt-2 flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
      >
        {expanded
          ? (lang === 'fr' ? 'Réduire ▴' : 'Collapse ▴')
          : (lang === 'fr' ? 'Voir tous les pays ▾' : 'Show all countries ▾')}
      </button>
    </section>
  )
}
