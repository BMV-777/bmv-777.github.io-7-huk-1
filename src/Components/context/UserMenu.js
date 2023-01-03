import { useContext } from 'react';
import str from './AutoContext';

export default function UserMenu() {
  const auter = useContext(str);
  console.log(auter);

  return (
    <div>
      <button type="button" onClick={() => console.log('Входим')}>
        Войти
      </button>

      <p>User</p>
      <button type="button" onClick={() => console.log('Выходим')}>
        Exit
      </button>
    </div>
  );
}
