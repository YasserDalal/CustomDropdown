
export default function SelectedState({ className, children, setShowSelected, showSelected, selected }) {
  return (
    <div className={className}>
      <div className='mb-3 text-2xl border-2 border-neutral-600 py-2 px-3 rounded-xl flex justify-between cursor-pointer hover:border-neutral-400 transition-all duration-150' onClick={() => setShowSelected(!showSelected)}>
        <div className='select-none'>{selected}</div>
        <div className={`${showSelected ? 'rotate-180' : 'rotate-0'} text-lg pt-1 select-none`}>V</div>
      </div>
      {children}
    </div>
  )
}