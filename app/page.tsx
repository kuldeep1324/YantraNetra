"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MetricCard from "./components/MetricCard";
import DataChart from "./components/DataChart";
import { io } from "socket.io-client";
import AlertPanel from "./components/AlertPanel";
import AIInsights from "./components/AIInsights";

const MapView = dynamic(() => import("./components/MapView"), { ssr: false });

export default function Home() {
  const [data, setData] = useState({
  speed: 0,
  altitude: 0,
  battery: 0,
  temperature: 0,
  lat: 26.9124,
  lng: 75.7873,
});

  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("droneData", (incomingData: any) => {
      setData(incomingData);

      setHistory((prev: any[]) => [
        ...prev.slice(-20),
        {
          ...incomingData,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold">YantraNetra Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        <MetricCard title="Speed" value={`${data.speed} km/h`} />
        <MetricCard title="Altitude" value={`${data.altitude} m`} />
        <MetricCard title="Battery" value={`${data.battery} %`} />
        <MetricCard title="Temperature" value={`${data.temperature} °C`} />
      </div>

      {/* Charts */}
      <DataChart data={history} dataKey="speed" title="Speed Trend" />
      <DataChart data={history} dataKey="battery" title="Battery Trend" />
<MapView lat={data.lat} lng={data.lng} />
<AlertPanel battery={data.battery} temperature={data.temperature} />
<AIInsights
  battery={data.battery}
  temperature={data.temperature}
  speed={data.speed}
/>
    </main>
  );
}