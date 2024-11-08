import { useState } from 'react';
import styles from './App.module.css';
import { Filters } from './components/Filters/Filters';
import { JobList } from './components/JobList/JobList';
import { JobFilter } from './types/Job';

function App() {
  const [filters, setFilters] = useState<JobFilter[]>([]);

  const onClickAddFilter = (newFilter: JobFilter) => {
    if (filters.includes(newFilter)) return;

    setFilters([newFilter, ...filters]);
  };

  const onClickDeleteFilter = (deleteFilter: JobFilter) => {
    setFilters(filters.filter((filter) => filter !== deleteFilter));
  };

  const onClickDeleteAllFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <div className={styles.image}></div>
      <main className={styles.main}>
        <Filters
          filters={filters}
          onClickDeleteFilter={onClickDeleteFilter}
          onClickDeleteAllFilters={onClickDeleteAllFilters}
        />
        <JobList filters={filters} onClickAddFilter={onClickAddFilter} />
      </main>
    </>
  );
}

export default App;
