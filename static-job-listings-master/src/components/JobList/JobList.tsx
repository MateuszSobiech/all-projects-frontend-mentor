import { useEffect, useState } from 'react';
import { getJobs } from '../../api/jobs';
import { Job, JobFilter } from '../../types/Job';
import { JobItem } from '../JobItem/JobItem';
import styles from './JobList.module.css';

export interface JobListProps {
  filters: JobFilter[];
  onClickAddFilter: (newFilter: JobFilter) => void;
}

export const JobList = ({ filters, onClickAddFilter }: JobListProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState('');

  const filteredJobs =
    filters.length > 0
      ? jobs.filter((job) => {
          const categories = [job.role, job.level, ...job.languages, ...job.tools];
          return [...filters].every((filter) => categories.includes(filter));
        })
      : jobs;

  useEffect(() => {
    (async () => {
      try {
        setJobs(await getJobs());
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    })();
  }, []);

  if (error !== '') {
    return <h1 style={{ fontSize: 64 }}>{error}</h1>;
  }

  return (
    <div className={styles.list}>
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} onClickAddFilter={onClickAddFilter} />
      ))}
    </div>
  );
};
