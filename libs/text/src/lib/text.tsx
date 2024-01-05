import { Route, Link } from 'react-router-dom';

import styles from './text.module.scss';

/* eslint-disable-next-line */
export interface TextProps {}

export function Text(props: TextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Text!</h1>

      <ul>
        <li>
          <Link to="/">libs/text/src/lib/text root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/text/src/lib/text root route.</div>}
      />
    </div>
  );
}

export default Text;
