import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps,
  incraseFunc: () => void;
  decraseFunc: () => void;
}
const Counter: React.FC<CounterProps> = ({ cardProduct, incraseFunc, decraseFunc }) => {
  const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md"
  return (
    <div className="flex items-center gap-2">
      <div className={buttonStyle} onClick={decraseFunc}>-</div>
      <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
      <div className={buttonStyle} onClick={incraseFunc}>+</div>
    </div>
  )
}

export default Counter
