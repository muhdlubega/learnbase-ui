import { H1 } from '@learnbase-ui/typography';
import styles from './text-field.module.scss';

/* eslint-disable-next-line */
export interface TextFieldProps {}

export function TextField(props: TextFieldProps) {
  return (
    <div className={styles['container']}>
      <H1>Welcome to TextField!</H1>
    </div>
  );
}

export default TextField;
