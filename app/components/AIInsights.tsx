"use client";

type Props = {
  battery: number;
  temperature: number;
  speed: number;
};

export default function AIInsights({ battery, temperature, speed }: Props) {
  // 🔮 Simple AI logic (can be replaced with ML later)

  const failureRisk =
    (temperature > 35 ? 40 : 0) +
    (battery < 20 ? 40 : 0) +
    (speed > 50 ? 20 : 0);

  let riskLevel = "Low";
  let color = "text-green-400";

  if (failureRisk > 60) {
    riskLevel = "High";
    color = "text-red-400";
  } else if (failureRisk > 30) {
    riskLevel = "Medium";
    color = "text-yellow-400";
  }

  const healthScore = 100 - failureRisk;

  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-lg mb-3">AI Insights 🤖</h2>

      <p className={color}>
        🔮 Failure Risk: {riskLevel} ({failureRisk}%)
      </p>

      <p className="text-blue-400">
        ⚙️ Health Score: {healthScore}%
      </p>

      <p className="text-purple-400">
        ⏳ Estimated Safe Operation Time: {healthScore / 2} mins
      </p>
    </div>
  );
}