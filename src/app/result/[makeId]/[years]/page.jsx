import { generateStaticParams } from '@/lib/generateStaticParams';
import ResultPage from '@/components/ResultPage/ResultPage';

export default async function Page({ params }) {
  const { makeId, years: year } = await params;
  let models = [];
  let error = null;

  try {
    const response = await fetch(
      `${process.env.API_URL}/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch vehicle models');
    }

    const data = await response.json();
    models = data.Results;
  } catch (err) {
    error = err.message;
  }

  return (
    <ResultPage models={models} makeId={makeId} year={year} error={error} />
  );
}

export { generateStaticParams };
