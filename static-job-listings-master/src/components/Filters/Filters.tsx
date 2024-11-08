import { JobFilter } from '../../types/Job';
import styles from './Filters.module.css';

interface FiltersProps {
  filters: JobFilter[];
  onClickDeleteFilter: (deleteFilter: JobFilter) => void;
  onClickDeleteAllFilters: () => void;
}

export const Filters = ({
  filters,
  onClickDeleteFilter,
  onClickDeleteAllFilters,
}: FiltersProps) => {
  return (
    <div className={`${styles.filters} ${filters.length > 0 ? styles.visible : ''}`}>
      <div className={styles.list}>
        {filters.map((filter) => (
          <div key={filter} className={styles.listItem}>
            <span>{filter}</span>
            <button onClick={() => onClickDeleteFilter(filter)}>
              <img src='starter/images/icon-remove.svg' />
            </button>
          </div>
        ))}
      </div>
      <button className={styles.clear} onClick={onClickDeleteAllFilters}>
        Clear
      </button>
    </div>
  );
};
