import { useRef, useState } from 'react'
import type { CardData, Rect } from '../types'
import { CardOverlay } from './CardOverlay'

type ApplicationCardProps = CardData & {
  isRejected: boolean
  onUpdateCard: (cardId: string, updates: Partial<CardData>) => void
}

export function ApplicationCard({ isRejected, onUpdateCard, ...card }: ApplicationCardProps) {
  const { company, role, date, hasInterview } = card
  const cardRef = useRef<HTMLDivElement>(null)
  const [origin, setOrigin] = useState<Rect | null>(null)

  function handleClick() {
    const el = cardRef.current
    if (!el) return
    const bounds = el.getBoundingClientRect()
    setOrigin({ top: bounds.top, left: bounds.left, width: bounds.width, height: bounds.height })
  }

  return (
    <>
      <div
        ref={cardRef}
        onClick={handleClick}
        className="bg-[#1E1D22] border border-[#2C2B31] rounded-[9px] py-2.5 px-[11px] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
        style={{ visibility: origin ? 'hidden' : 'visible' }}
      >
        <div className="text-[12.5px] font-semibold mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
          {company}
        </div>
        <div className="text-[11.5px] text-[#A9A6A0] mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {role}
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-[10px] text-[#726F68] font-mono">{date}</span>
          {hasInterview && <span className="text-[9px] text-[#B48EEA] font-semibold">● interview</span>}
        </div>
      </div>
      {origin && (
        <CardOverlay
          card={card}
          origin={origin}
          isRejected={isRejected}
          onClose={() => setOrigin(null)}
          onUpdateCard={onUpdateCard}
        />
      )}
    </>
  )
}
