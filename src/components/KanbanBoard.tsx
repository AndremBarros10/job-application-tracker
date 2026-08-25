import { STAGES } from '../data/seed_stages'
import { KanbanColumn } from './KanbanColumn'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

export function KanbanBoard() {
  const scrollRef = useHorizontalScroll<HTMLDivElement>()

  return (
    <div ref={scrollRef} className="flex gap-4 items-start overflow-x-auto scrollbar-hide">
      {STAGES.map((stage) => (
        <KanbanColumn key={stage.name} {...stage} />
      ))}
    </div>
  )
}
