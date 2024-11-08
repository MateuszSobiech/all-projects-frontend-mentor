import { Job } from '../types/Job';

function assertsJobs(data: unknown[]): asserts data is Job[] {
  const has = Object.prototype.hasOwnProperty;
  const job = data[0];

  if (!has.call(job, 'id') || !has.call(job, 'company') || !has.call(job, 'logo')) {
    throw new Error('Problem while fetching jobs, object is not a job.');
  }
}

export const getJobs = async (): Promise<Job[]> => {
  const response = await fetch('src/data/data.json');

  if (!response.ok) {
    throw new Error('Problem to fetch jobs from JSON.');
  }

  const data = (await response.json()) as unknown[];

  assertsJobs(data);

  return data;
};
