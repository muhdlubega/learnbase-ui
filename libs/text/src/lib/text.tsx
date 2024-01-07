import styles from './text.module.scss';

/* eslint-disable-next-line */
export interface TextProps {}

export function Text(props: TextProps) {
  return (
    <div className={styles['container']}>
      <h1 className="bg-black">Welcome to Text!</h1>
    </div>
  );
}

export default Text;
