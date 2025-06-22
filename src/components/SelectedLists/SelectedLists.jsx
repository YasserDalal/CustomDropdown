
export default function SelectedLists({ className, children }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}