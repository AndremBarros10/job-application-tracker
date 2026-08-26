import type { CardData, StageDef } from '../types'
import { KanbanColumn } from './KanbanColumn'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

type KanbanBoardProps = {
  stages: StageDef[]
  onUpdateCard: (cardId: string, updates: Partial<CardData>) => void
  onMoveCard: (cardId: string, toStage: string, toIndex: number) => void
}

export function KanbanBoard({ stages, onUpdateCard, onMoveCard }: KanbanBoardProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>()

  return (
    <div ref={scrollRef} className="flex gap-4 items-start overflow-x-auto scrollbar-hide">
      {stages.map((stage) => (
        <KanbanColumn key={stage.name} {...stage} onUpdateCard={onUpdateCard} onMoveCard={onMoveCard} />
      ))}
    </div>
  )
}
