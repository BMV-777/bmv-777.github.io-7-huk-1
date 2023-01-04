import { useContext } from 'react';
import str from './AutoContext';

export default function UserMenu() {
  const { user, logIn, logOut } = useContext(str);
  // console.log(auterContext);

  return (
    <div>
      {user ? (
        <>
          <p>{user}</p>
          <button type="button" onClick={logOut}>
            Exit
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          Войти
        </button>
      )}
    </div>
  );
}
