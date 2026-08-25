import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { KanbanBoard } from './components/KanbanBoard'
import { AddApplicationModal } from './components/AddApplicationModal'
import { STAGES } from './data/seed_stages'
import type { CardData, StageDef } from './types'

const STORAGE_KEY = 'job-application-tracker:stages'

function loadStages(): StageDef[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as StageDef[]
  } catch {
    // ignore malformed storage and fall back to the default board
  }
  return STAGES
}

export default function App() {
  const [stages, setStages] = useState<StageDef[]>(loadStages)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stages))
  }, [stages])

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

  function updateCard(cardId: string, updates: Partial<CardData>) {
    setStages((prev) =>
      prev.map((stage) => ({
        ...stage,
        cards: stage.cards.map((card) => (card.id === cardId ? { ...card, ...updates } : card)),
      }))
    )
  }

  return (
    <div className="max-w-2x1 mx-auto p-8 flex flex-col gap-4">
      <Header onAddClick={() => setIsModalOpen(true)} />
      <KanbanBoard stages={stages} onUpdateCard={updateCard} />
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
