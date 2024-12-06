export async function generateStaticParams() {
  try {
    const makesResponse = await fetch(
      `${process.env.API_URL}/api/vehicles/GetMakesForVehicleType/car?format=json`,
    );

    if (!makesResponse.ok) {
      throw new Error('Failed to fetch vehicle makes');
    }

    const makesData = await makesResponse.json();
    const makes = makesData.Results || [];

    const years = Array.from(
      { length: new Date().getFullYear() - 2015 + 1 },
      (_, i) => 2015 + i,
    );

    return makes.flatMap((make) =>
      years.map((year) => ({
        makeId: make.MakeId.toString(),
        years: year.toString(),
      })),
    );
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
