export type CardData = {
  id: string
  company: string
  role: string
  date: string
  hasInterview?: boolean
  notes?: string
  rejectionReason?: string
  learningFocus?: string
}

export type Rect = {
  top: number
  left: number
  width: number
  height: number
}

export type StageDef = {
  name: string
  dot: string
  cards: CardData[]
}
