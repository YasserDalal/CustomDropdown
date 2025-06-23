
export default function DefaultState({ className, children, setShowDefault, showDefault, defaultValue }) {
  return (
    <div className={className}>
      <div className='mb-3 text-2xl border-2 border-neutral-600 py-2 px-3 rounded-xl flex justify-between cursor-pointer hover:border-neutral-400 transition-all duration-150' onClick={() => setShowDefault(!showDefault)}>
        <div className='select-none'>{defaultValue}</div>
        <div className={`${showDefault ? 'rotate-180' : 'rotate-0'} text-lg pt-1 select-none`}>V</div>
      </div>
      {children}
    </div>
  );
}
