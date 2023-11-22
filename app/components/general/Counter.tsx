interface CounterProps {
    productCard : any
    incraseFunc: () => void;
    decraseFunc: () => void;
}
const Counter:React.FC<CounterProps> = ({cardProduct, incraseFunc, decraseFunc }) => {
  return (
    <div>
      <div>-</div>
      <div>0</div>
      <div>+</div>
    </div>
  )
}

export default Counter
