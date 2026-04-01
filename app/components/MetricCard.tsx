type Props = {
  title: string;
  value: string;
};

export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
}