import { Input } from '@/shared/ui/Input'
import { SearchIcon } from 'lucide-react'
import styles from './topbarsearch.module.scss'

const TopbarSearch = () => {
  return (
    <div className={styles.topbarSearch}>
      <Input placeholder='Поиск...' size='sm' leftSection={<SearchIcon />} />
    </div>
  )
}

export { TopbarSearch }
