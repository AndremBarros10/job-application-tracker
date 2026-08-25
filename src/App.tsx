import { useState } from 'react'
import { Header } from './components/Header'
import { KanbanBoard } from './components/KanbanBoard'
import { AddApplicationModal } from './components/AddApplicationModal'
import { STAGES } from './data/seed_stages'
import type { StageDef } from './types'

export default function App() {
  const [stages, setStages] = useState<StageDef[]>(STAGES)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function addApplication(stageName: string, company: string, role: string, date: string, hasInterview: boolean, notes: string) {
    const id = `${stageName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
    setStages((prev) =>
      prev.map((stage) =>
        stage.name === stageName
          ? { ...stage, cards: [{ id, company, role, date, hasInterview, notes: notes || undefined }, ...stage.cards] }
          : stage
      )
    )
    setIsModalOpen(false)
  }

  return (
    <div className="max-w-2x1 mx-auto p-8 flex flex-col gap-4">
      <Header onAddClick={() => setIsModalOpen(true)} />
      <KanbanBoard stages={stages} />
      {isModalOpen && (
        <AddApplicationModal
          stages={stages}
          onClose={() => setIsModalOpen(false)}
          onAdd={addApplication}
        />
      )}
    </div>
  )
}
