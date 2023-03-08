// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Tool from './tools/Tool';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="my-plugin" />
      <Tool />
      <div />
    </>
  );
}

export default App;
