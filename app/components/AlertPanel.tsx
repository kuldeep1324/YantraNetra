"use client";

type Props = {
  battery: number;
  temperature: number;
};

export default function AlertPanel({ battery, temperature }: Props) {
  const alerts = [];

  if (battery < 20) {
    alerts.push("🔴 Low Battery");
  }

  if (temperature > 35) {
    alerts.push("🔥 High Temperature");
  }

  if (battery < 10) {
    alerts.push("⚠️ Critical Battery Level");
  }

  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-2xl shadow">
      <h2 className="text-lg mb-3">Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-green-400">✅ All systems normal</p>
      ) : (
        alerts.map((alert, index) => (
          <p key={index} className="text-red-400">
            {alert}
          </p>
        ))
      )}
    </div>
  );
}