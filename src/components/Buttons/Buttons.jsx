
export default function Buttons({ className, children, setToggle, setter }) {
  return (
    <div className={className} typeof='button' onClick={() => {setToggle(false), setter(children)}}>
      {children}
    </div>
  );
}
