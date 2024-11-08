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
  const filteredJobs = filters.length > 0
    ? jobs.filter((job) => {
        const categories = [job.role, job.level, ...job.languages, ...job.tools];
        return [...filters].every((filter) => categories.includes(filter));
      })
    : jobs;

  useEffect(() => {
    (async () => {
      setJobs(await getJobs());
    })();
  }, []);

  return (
    <div className={styles.list}>
      {jobs &&
        filteredJobs.map((job) => (
          <JobItem key={job.id} job={job} onClickAddFilter={onClickAddFilter} />
        ))}
    </div>
  );
};
