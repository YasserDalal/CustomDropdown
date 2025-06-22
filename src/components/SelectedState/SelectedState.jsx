
export default function SelectedState({ className, children, setShowSelected, showSelected, selected }) {
  return (
    <div className={className}>
      <h2 onClick={() => setShowSelected(!showSelected)}>{selected}</h2>
      {children}
    </div>
  )
}