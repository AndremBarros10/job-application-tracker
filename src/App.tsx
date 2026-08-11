export default function App() {
  return <div className="max-w-2x1 mx-auto p-8 flex flex-col gap-4">
    <Header />
    <Kanban />
  </div>
}


function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-[22px] -mx-8 -mt-8 border-b border-[#2C2B31] bg-[#1C1B20]">
      <div className="text-lg font-bold tracking-[-0.02em]">
        <span className="text-[#F0EFEA]">Job Application</span>{' '}
        <span className="text-[#2dbf8f]">Tracker</span>
      </div>
      <button className="flex items-center gap-1.5 bg-[#2DBF8F] text-[#0F1410] text-[13px] font-semibold py-[9px] px-4 rounded-lg cursor-pointer">
        <span className="text-base leading-none">+</span> Add Application
      </button>
    </header>
  )
}


type CardData = {
  company: string
  role: string
  date: string
  hasInterview?: boolean
}

type StageDef = {
  name: string
  dot: string
  cards: CardData[]
}

const STAGES: StageDef[] = [
  {
    name: 'Wishlist',
    dot: '#ABA79E',
    cards: [
      { company: 'Nimbus Labs', role: 'Senior Frontend Engineer', date: 'Aug 5' },
      { company: 'Pinecrest Studios', role: 'Game Engine Programmer', date: 'Aug 6' },
      { company: 'Driftwood Media', role: 'Frontend Engineer', date: 'Aug 4' },
    ],
  },
  {
    name: 'Applied',
    dot: '#7C9CF0',
    cards: [
      { company: 'Arcline Systems', role: 'Backend Engineer', date: 'Jul 28' },
      { company: 'Fathom Health', role: 'Full Stack Engineer', date: 'Jul 22' },
      { company: 'Meridian Fintech', role: 'Backend Engineer', date: 'Jul 31' },
      { company: 'Northwind Data', role: 'Data Engineer', date: 'Jul 26' },
    ],
  },
  {
    name: 'Phone Screen',
    dot: '#E3A83A',
    cards: [
      { company: 'Ridgeline Robotics', role: 'Platform Engineer', date: 'Jul 10', hasInterview: true },
      { company: 'Silverline Health', role: 'Frontend Engineer', date: 'Jul 8', hasInterview: true },
      { company: 'Lumen Networks', role: 'Site Reliability Engineer', date: 'Jul 5', hasInterview: true },
    ],
  },
  {
    name: 'Interview',
    dot: '#B48EEA',
    cards: [
      { company: 'Vector Analytics', role: 'ML Engineer', date: 'Jun 30', hasInterview: true },
      { company: 'Beacon Software', role: 'Staff Software Engineer', date: 'Jun 18', hasInterview: true },
      { company: 'Kestrel Security', role: 'Security Engineer', date: 'Jun 25', hasInterview: true },
    ],
  },
  {
    name: 'Offer',
    dot: '#34C08F',
    cards: [
      { company: 'Outpost AI', role: 'iOS Engineer', date: 'May 15', hasInterview: true },
      { company: 'Cobalt Payments', role: 'Senior Backend Engineer', date: 'May 10', hasInterview: true },
    ],
  },
  {
    name: 'Rejected',
    dot: '#E58A6E',
    cards: [
      { company: 'Cascade Cloud', role: 'DevOps Engineer', date: 'May 20', hasInterview: true },
      { company: 'Anchor Systems', role: 'Senior Backend Engineer', date: 'May 2', hasInterview: true },
      { company: 'Tidewater Logistics', role: 'Full Stack Engineer', date: 'Apr 28' },
    ],
  },
]

function Kanban() {
  return (
    <div className="flex gap-4 overflow-x-auto items-start">
      {STAGES.map((stage) => (
        <div key={stage.name} className="flex-none w-[280px] min-w-0">
          <div className="bg-[#1A191E] border border-[#2C2B31] rounded-xl p-3.5 min-h-[80px]">
            <div className="flex items-center justify-between px-1 pt-0.5 pb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.dot }} />
                <span className="text-[13px] font-semibold">{stage.name}</span>
              </div>
              <span className="text-xs text-[#85827C] font-medium">{stage.cards.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {stage.cards.map((card) => (
                <div
                  key={card.company}
                  className="bg-[#1E1D22] border border-[#2C2B31] rounded-[9px] py-2.5 px-[11px] cursor-grab shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                >
                  <div className="text-[12.5px] font-semibold mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
                    {card.company}
                  </div>
                  <div className="text-[11.5px] text-[#A9A6A0] mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    {card.role}
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] text-[#726F68] font-mono">{card.date}</span>
                    {card.hasInterview && (
                      <span className="text-[9px] text-[#B48EEA] font-semibold">● interview</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
