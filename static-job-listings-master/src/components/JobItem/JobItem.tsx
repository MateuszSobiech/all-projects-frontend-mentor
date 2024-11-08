import { Job } from '../../types/Job';
import { Badge } from '../Badge/Badge';
import { JobListProps } from '../JobList/JobList';
import styles from './JobItem.module.css';

interface JobItemProps {
  job: Job;
  onClickAddFilter: JobListProps['onClickAddFilter'];
}

export const JobItem = ({ job, onClickAddFilter }: JobItemProps) => {
  const categories = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <article className={`${styles.article} ${job.featured ? styles.borderLeft : ''}`}>
      <div className={styles.leftContainer}>
        <img src={job.logo} alt={`${job.company} logo`} />
        <div className={styles.info}>
          <div className={styles.badges}>
            <p className={styles.company}>{job.company}</p>
            {job.new && <Badge variant='primary' text='new!' />}
            {job.featured && <Badge variant='dark' text='featured' />}
          </div>
          <p className={styles.position}>{job.position}</p>
          <ul className={styles.details}>
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button key={index} onClick={() => onClickAddFilter(category)}>
            {category}
          </button>
        ))}
      </div>
    </article>
  );
};
