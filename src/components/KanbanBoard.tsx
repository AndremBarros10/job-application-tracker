import { STAGES } from '../data/stages'
import { KanbanColumn } from './KanbanColumn'

export function KanbanBoard() {
  return (
    <div className="flex gap-4 items-start">
      {STAGES.map((stage) => (
        <KanbanColumn key={stage.name} {...stage} />
      ))}
    </div>
  )
}
