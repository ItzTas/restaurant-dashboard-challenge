export interface OrderCardProps {
  title: string;
  phone: string;
  table: string;
  location: string;
  createdAt: Date;
  customerInitials: string;
  totalPrice: number;
}

export default function CardOrderSheet({}: OrderCardProps) {
  return <div></div>;
}
