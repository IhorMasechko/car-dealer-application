import Home from '@/components/HomePage/HomePage';

export default async function Page() {
  const res = await fetch(
    `${process.env.API_URL}/api/vehicles/GetMakesForVehicleType/car?format=json`,
  );
  const data = await res.json();
  const initialMakes = data.Results || [];

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i,
  );

  return <Home initialMakes={initialMakes} years={years} />;
}
