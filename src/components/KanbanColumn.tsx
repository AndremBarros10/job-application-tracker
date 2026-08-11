import type { StageDef } from '../types'
import { ApplicationCard } from './ApplicationCard'

export function KanbanColumn({ name, dot, cards }: StageDef) {
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
        <div className="flex flex-col gap-2">
          {cards.map((card) => (
            <ApplicationCard key={card.company} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
