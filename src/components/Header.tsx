type HeaderProps = {
  onAddClick: () => void
}

export function Header({ onAddClick }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-10 py-[22px] -mx-8 -mt-8 border-b border-[#2C2B31] bg-[#1C1B20]">
      <div className="text-lg font-bold tracking-[-0.02em]">
        <span className="text-[#F0EFEA]">Job Application</span>{' '}
        <span className="text-[#2dbf8f]">Tracker</span>
      </div>
      <button
        onClick={onAddClick}
        className="flex items-center gap-1.5 bg-[#2DBF8F] text-[#0F1410] text-[13px] font-semibold py-[9px] px-4 rounded-lg cursor-pointer"
      >
        <span className="text-base leading-none">+</span> Add Application
      </button>
    </header>
  )
}
