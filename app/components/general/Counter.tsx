import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps,
  incraseFunc: () => void;
  decraseFunc: () => void;
}
const Counter: React.FC<CounterProps> = ({ cardProduct, incraseFunc, decraseFunc }) => {
  return (
    <div>
      <div onClick={decraseFunc}>-</div>
      <div>{cardProduct?.quantity}</div>
      <div onClick={incraseFunc}>+</div>
    </div>
  )
}

export default Counter
