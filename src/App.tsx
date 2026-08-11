import { Header } from './components/Header'
import { KanbanBoard } from './components/KanbanBoard'

export default function App() {
  return (
    <div className="max-w-2x1 mx-auto p-8 flex flex-col gap-4">
      <Header />
      <KanbanBoard />
    </div>
  )
}
