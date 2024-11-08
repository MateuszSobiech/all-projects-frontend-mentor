import { Job } from "../types/Job";

function isDataJobs(data: unknown): asserts data is Job[] {}

export const getJobs = async (): Promise<Job[]> => {
  const response = await fetch('/starter/data.json');

      if (!response.ok) {
        throw new Error('Problem to fetch jobs from JSON.');
      }

      const data = await response.json() as unknown;

      return data as Job[];
}