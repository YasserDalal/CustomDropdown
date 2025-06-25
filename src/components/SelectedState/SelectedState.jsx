
export default function SelectedState({ className, children, setShowSelected, showSelected, selected }) {
  return (
    <div className={className}>
      <div className={`mb-3 text-2xl border-2 ${showSelected ? 'border-neutral-400': 'border-neutral-600'} py-2 px-3 rounded-xl flex justify-between cursor-pointer hover:border-neutral-400 transition-all duration-150`} onClick={() => setShowSelected(!showSelected)}>
        <div className='select-none text-[clamp(0.7rem,1.3rem,2rem)] pr-2'>{selected}</div>
        <div className={`${showSelected ? 'rotate-180' : 'rotate-0'} text-lg pt-1 select-none text-[clamp(1rem,1rem,1.5rem)]`}>V</div>
      </div>
      {children}
    </div>
  )
}