import type { StageDef } from '../types'
import { KanbanColumn } from './KanbanColumn'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

type KanbanBoardProps = {
  stages: StageDef[]
}

export function KanbanBoard({ stages }: KanbanBoardProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>()

  return (
    <div ref={scrollRef} className="flex gap-4 items-start overflow-x-auto scrollbar-hide">
      {stages.map((stage) => (
        <KanbanColumn key={stage.name} {...stage} />
      ))}
    </div>
  )
}
