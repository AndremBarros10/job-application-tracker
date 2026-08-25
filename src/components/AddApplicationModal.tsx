import { useEffect, useState } from 'react'
import type { StageDef } from '../types'

type AddApplicationModalProps = {
  stages: StageDef[]
  onClose: () => void
  onAdd: (stageName: string, company: string, role: string, date: string, hasInterview: boolean, notes: string) => void
}

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function AddApplicationModal({ stages, onClose, onAdd }: AddApplicationModalProps) {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [stageName, setStageName] = useState(stages[0]?.name ?? '')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [hasInterview, setHasInterview] = useState(false)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!company.trim() || !role.trim() || !stageName) return
    onAdd(stageName, company.trim(), role.trim(), formatDate(date), hasInterview, notes.trim())
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-[#1A191E] border border-[#2C2B31] rounded-xl p-6 w-[360px] flex flex-col gap-4"
      >
        <div className="text-[15px] font-semibold">Add Application</div>

        <label className="flex flex-col gap-1 text-[12.5px] text-[#A9A6A0]">
          Company
          <input
            autoFocus
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="bg-[#1E1D22] border border-[#2C2B31] rounded-lg px-3 py-2 text-[13px] text-[#F0EFEA] outline-none focus:border-[#2DBF8F]"
            placeholder="e.g. Nimbus Labs"
          />
        </label>

        <label className="flex flex-col gap-1 text-[12.5px] text-[#A9A6A0]">
          Role
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-[#1E1D22] border border-[#2C2B31] rounded-lg px-3 py-2 text-[13px] text-[#F0EFEA] outline-none focus:border-[#2DBF8F]"
            placeholder="e.g. Senior Frontend Engineer"
          />
        </label>

        <div className="flex gap-3">
          <label className="flex flex-col gap-1 text-[12.5px] text-[#A9A6A0] flex-1">
            Stage
            <select
              value={stageName}
              onChange={(e) => setStageName(e.target.value)}
              className="bg-[#1E1D22] border border-[#2C2B31] rounded-lg px-3 py-2 text-[13px] text-[#F0EFEA] outline-none focus:border-[#2DBF8F]"
            >
              {stages.map((stage) => (
                <option key={stage.name} value={stage.name}>
                  {stage.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-[12.5px] text-[#A9A6A0] flex-1">
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-[#1E1D22] border border-[#2C2B31] rounded-lg px-3 py-2 text-[13px] text-[#F0EFEA] outline-none focus:border-[#2DBF8F]"
            />
          </label>
        </div>

        <label className="flex items-center gap-2 text-[12.5px] text-[#A9A6A0]">
          <input
            type="checkbox"
            checked={hasInterview}
            onChange={(e) => setHasInterview(e.target.checked)}
            className="accent-[#B48EEA]"
          />
          Interview scheduled
        </label>

        <label className="flex flex-col gap-1 text-[12.5px] text-[#A9A6A0]">
          Notes
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="bg-[#1E1D22] border border-[#2C2B31] rounded-lg px-3 py-2 text-[13px] text-[#F0EFEA] outline-none focus:border-[#2DBF8F] resize-none"
            placeholder="Optional notes about this role..."
          />
        </label>

        <div className="flex justify-end gap-2 mt-1">
          <button
            type="button"
            onClick={onClose}
            className="text-[13px] font-semibold py-[9px] px-4 rounded-lg cursor-pointer border border-[#2C2B31] text-[#F0EFEA]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-[13px] font-semibold py-[9px] px-4 rounded-lg cursor-pointer bg-[#2DBF8F] text-[#0F1410]"
          >
            Add Application
          </button>
        </div>
      </form>
    </div>
  )
}
