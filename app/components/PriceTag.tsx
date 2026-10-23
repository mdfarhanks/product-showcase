
type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return <span>${amount.toFixed(2)}</span>;
}
