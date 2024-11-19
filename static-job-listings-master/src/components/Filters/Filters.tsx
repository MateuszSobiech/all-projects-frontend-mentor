import { JobFilter } from '../../types/Job';
import iconRemove from '/src/assets/images/icon-remove.svg'
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
    <div className={`${styles.filtersWrapper} ${filters.length > 0 ? styles.visible : ''}`}>
      <ul className={styles.list}>
        {filters.map((filter) => (
          <li key={filter} className={styles.listItem}>
            <span>{filter}</span>
            <button onClick={() => onClickDeleteFilter(filter)}>
              <img src={iconRemove} />
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.clearButton} onClick={onClickDeleteAllFilters}>
        Clear
      </button>
    </div>
  );
};
