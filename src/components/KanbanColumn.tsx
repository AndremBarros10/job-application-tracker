import { useRef, useState } from 'react'
import type { CardData, StageDef } from '../types'
import { ApplicationCard } from './ApplicationCard'

type KanbanColumnProps = StageDef & {
  onUpdateCard: (cardId: string, updates: Partial<CardData>) => void
  onMoveCard: (cardId: string, toStage: string, toIndex: number) => void
}

export function KanbanColumn({ name, dot, cards, onUpdateCard, onMoveCard }: KanbanColumnProps) {
  const isRejected = name === 'Rejected'
  const listRef = useRef<HTMLDivElement>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  function indexForPointer(clientY: number) {
    const cardEls = listRef.current
      ? Array.from(listRef.current.querySelectorAll<HTMLElement>('[data-card-id]'))
      : []

    for (let i = 0; i < cardEls.length; i++) {
      const bounds = cardEls[i].getBoundingClientRect()
      const midpoint = bounds.top + bounds.height / 2
      if (clientY < midpoint) return i
    }
    return cardEls.length
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setDragOverIndex(indexForPointer(e.clientY))
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const cardId = e.dataTransfer.getData('text/plain')
    const index = indexForPointer(e.clientY)
    setDragOverIndex(null)
    if (cardId) onMoveCard(cardId, name, index)
  }

  return (
    <div className="flex-none w-[280px] min-w-0">
      <div className="bg-[#1A191E] border border-[#2C2B31] rounded-xl p-3.5 min-h-[80px]">
        <div className="flex items-center justify-between px-1 pt-0.5 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dot }} />
            <span className="text-[13px] font-semibold">{name}</span>
          </div>
          <span className="text-xs text-[#85827C] font-medium">{cards.length}</span>
        </div>
        <div
          ref={listRef}
          className="flex flex-col gap-2 min-h-[8px]"
          onDragOver={handleDragOver}
          onDragLeave={() => setDragOverIndex(null)}
          onDrop={handleDrop}
        >
          {cards.map((card, index) => (
            <div key={card.id}>
              {dragOverIndex === index && <div className="h-1 rounded-full bg-[#7C9CF0] mb-2" />}
              <ApplicationCard {...card} isRejected={isRejected} onUpdateCard={onUpdateCard} />
            </div>
          ))}
          {dragOverIndex === cards.length && <div className="h-1 rounded-full bg-[#7C9CF0]" />}
        </div>
      </div>
    </div>
  )
}
