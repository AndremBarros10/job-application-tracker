export type CardData = {
  id: string
  company: string
  role: string
  date: string
  hasInterview?: boolean
}

export type StageDef = {
  name: string
  dot: string
  cards: CardData[]
}
