import { useCallback, useEffect, useState } from 'react'
import type { CardData, Rect } from '../types'

type CardOverlayProps = {
  card: CardData
  origin: Rect
  onClose: () => void
  onUpdateCard: (cardId: string, updates: Partial<CardData>) => void
}

const TRANSITION_MS = 300

function getExpandedRect(): Rect {
  const width = Math.min(480, window.innerWidth - 48)
  const height = Math.min(520, window.innerHeight - 48)
  return {
    top: (window.innerHeight - height) / 2,
    left: (window.innerWidth - width) / 2,
    width,
    height,
  }
}

export function CardOverlay({ card, origin, onClose, onUpdateCard }: CardOverlayProps) {
  const [expandedRect] = useState(getExpandedRect)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [notesValue, setNotesValue] = useState(card.notes ?? '')

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsExpanded(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const commitNotes = useCallback(() => {
    if (notesValue !== (card.notes ?? '')) onUpdateCard(card.id, { notes: notesValue || undefined })
  }, [notesValue, card.notes, card.id, onUpdateCard])

  const handleClose = useCallback(() => {
    commitNotes()
    setIsExpanded(false)
    setIsClosing(true)
  }, [commitNotes])

  useEffect(() => {
    if (!isClosing) return
    const timer = setTimeout(onClose, TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [isClosing, onClose])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleClose])

  const rect = isExpanded ? expandedRect : origin

  return (
    <div className="fixed inset-0 z-50" onClick={handleClose}>
      <div
        className="absolute inset-0 bg-black/60 transition-opacity ease-out"
        style={{ transitionDuration: `${TRANSITION_MS}ms`, opacity: isExpanded ? 1 : 0 }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-[#1E1D22] border border-[#2C2B31] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden cursor-default transition-[top,left,width,height,border-radius] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: isExpanded ? 16 : 9,
          transitionDuration: `${TRANSITION_MS}ms`,
        }}
      >
        <div className="h-full flex flex-col transition-[padding] ease-out" style={{ padding: isExpanded ? 24 : 14, transitionDuration: `${TRANSITION_MS}ms` }}>
          <div
            className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap transition-all ease-out"
            style={{ fontSize: isExpanded ? 20 : 12.5, marginBottom: isExpanded ? 4 : 2, transitionDuration: `${TRANSITION_MS}ms` }}
          >
            {card.company}
          </div>
          <div
            className="text-[#A9A6A0] overflow-hidden text-ellipsis whitespace-nowrap transition-all ease-out"
            style={{ fontSize: isExpanded ? 14 : 11.5, marginBottom: isExpanded ? 16 : 8, transitionDuration: `${TRANSITION_MS}ms` }}
          >
            {card.role}
          </div>

          <div className="flex items-center justify-between gap-1">
            <span
              className="text-[#726F68] font-mono transition-all ease-out"
              style={{ fontSize: isExpanded ? 12 : 10, transitionDuration: `${TRANSITION_MS}ms` }}
            >
              {card.date}
            </span>
            {card.hasInterview && (
              <span
                className="text-[#B48EEA] font-semibold transition-all ease-out"
                style={{ fontSize: isExpanded ? 11 : 9, transitionDuration: `${TRANSITION_MS}ms` }}
              >
                ● interview
              </span>
            )}
          </div>

          <div
            className="transition-opacity ease-out overflow-y-auto flex-1 min-h-0"
            style={{
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 20 : 0,
              paddingTop: isExpanded ? 20 : 0,
              borderTop: isExpanded ? '1px solid #2C2B31' : 'none',
              transitionDuration: `${TRANSITION_MS}ms`,
              transitionDelay: isExpanded ? '80ms' : '0ms',
            }}
          >
            <div className="text-[11px] font-semibold text-[#85827C] uppercase tracking-wide mb-2">Notes</div>
            <textarea
              value={notesValue}
              onChange={(e) => setNotesValue(e.target.value)}
              onBlur={commitNotes}
              readOnly={!isExpanded}
              tabIndex={isExpanded ? 0 : -1}
              rows={3}
              placeholder="Add notes..."
              className="w-full bg-[#17161B] border border-[#2C2B31] rounded-lg px-2.5 py-2 text-[13px] text-[#D6D3CC] leading-relaxed resize-none outline-none focus:border-[#2DBF8F] placeholder:text-[#5C5A55]"
            />
          </div>

          <button
            onClick={handleClose}
            className="mt-auto self-end text-[12.5px] font-semibold text-[#A9A6A0] hover:text-[#F0EFEA] cursor-pointer transition-opacity"
            style={{ opacity: isExpanded ? 1 : 0, transitionDuration: `${TRANSITION_MS}ms` }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
