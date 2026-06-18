import { useContext, useMemo, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { LanguageContext } from '../LanguageContext'
import { useStrings } from '../i18n/useStrings'
import SourceModal from '../components/SourceModal'
import { SOURCE_CONTENT } from '../data/sourceContent'
import { GLOSSARY_TERMS as DATA_GLOSSARY_TERMS } from '../data/glossaryContent'

const FILTERS = ['all', 'technique', 'concept', 'source']

const CATEGORY_STYLES = {
  technique: 'border-[#22D3EE] bg-[#22D3EE]/10 text-[#22D3EE]',
  concept: 'border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]',
  source: 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]',
}

function getFilterLabel(filter, s) {
  if (filter === 'all') return s.glossairePage.filterAll
  if (filter === 'technique') return s.glossairePage.filterTech
  if (filter === 'concept') return s.glossairePage.filterConcept
  return s.glossairePage.filterSource
}

export default function GlossairePage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [openSource, setOpenSource] = useState(null)
  const theme = useTheme()
  const isLight = theme === 'light'
  const s = useStrings()
  const { lang } = useContext(LanguageContext)

  const filteredTerms = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase()

    return DATA_GLOSSARY_TERMS.filter((term) => {
      const matchesCategory = activeFilter === 'all' || term.category === activeFilter
      const matchesSearch =
        normalizedSearch.length === 0 ||
        term.termFr.toLocaleLowerCase().includes(normalizedSearch) ||
        term.termEn.toLocaleLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeFilter, search])

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-5">
        <h1 className="font-mono text-2xl font-bold text-[#22D3EE]">{s.glossairePage.title}</h1>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter
              const activeClass =
                filter === 'all'
                  ? 'border-[#22D3EE] bg-[#22D3EE]/10 text-[#22D3EE]'
                  : CATEGORY_STYLES[filter]

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${
                    isActive
                      ? activeClass
                      : isLight
                        ? 'border-[#CBD5E1] text-[#64748B] hover:border-[#22D3EE] hover:text-[#0891B2]'
                        : 'border-[#374151] text-[#9CA3AF] hover:border-[#22D3EE] hover:text-[#22D3EE]'
                  }`}
                >
                  {getFilterLabel(filter, s)}
                </button>
              )
            })}
          </div>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={s.glossairePage.searchPlaceholder}
            className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors md:max-w-xs ${
              isLight
                ? 'border-[#CBD5E1] bg-white text-[#111827] placeholder:text-[#94A3B8] focus:border-[#22D3EE]'
                : 'border-[#374151] bg-[#111827] text-[#F9FAFB] placeholder:text-[#6B7280] focus:border-[#22D3EE]'
            }`}
          />
        </div>
      </div>

      {filteredTerms.length > 0 ? (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredTerms.map((term) => {
            const displayTerm = lang === 'en' ? term.termEn : term.termFr
            const definition = lang === 'en' ? term.definitionEn : term.definitionFr

            return (
              <article
                key={term.id}
                className={`rounded-xl border p-5 transition-colors ${
                  isLight ? 'border-[#E2E8F0] bg-white' : 'border-[#1F2937] bg-[#111827]'
                }`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-[#22D3EE]">{displayTerm}</h2>
                  <span className={`shrink-0 rounded-full border px-2 py-1 text-[11px] font-bold ${CATEGORY_STYLES[term.category]}`}>
                    {getFilterLabel(term.category, s)}
                  </span>
                </div>

                <p className={`text-sm leading-6 ${isLight ? 'text-[#475569]' : 'text-[#D1D5DB]'}`}>
                  {definition}
                </p>

                {term.category === 'source' ? (
                  <button
                    type="button"
                    onClick={() => setOpenSource(SOURCE_CONTENT[term.id])}
                    className="mt-4 cursor-pointer text-left text-xs font-semibold text-[#22D3EE] transition hover:underline"
                  >
                    {s.glossairePage.sourceProfileNote}
                  </button>
                ) : null}
              </article>
            )
          })}
        </section>
      ) : (
        <div
          className={`rounded-xl border border-dashed p-8 text-center text-sm ${
            isLight ? 'border-[#CBD5E1] text-[#64748B]' : 'border-[#374151] text-[#9CA3AF]'
          }`}
        >
          {s.glossairePage.noResults}
        </div>
      )}

      {openSource ? (
        <SourceModal source={openSource} theme={theme} onClose={() => setOpenSource(null)} />
      ) : null}
    </div>
  )
}
