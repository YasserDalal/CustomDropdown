
export default function DefaultState({ className, children, setShowDefault, showDefault, defaultValue }) {
  return (
    <div className={className}>
      <h2 onClick={() => setShowDefault(!showDefault)}>{defaultValue}</h2>
      {children}
    </div>
  );
}
