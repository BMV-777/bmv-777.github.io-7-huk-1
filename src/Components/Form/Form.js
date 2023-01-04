import { useState, useEffect } from 'react';

const styles = {
  // form: {
  //   width: 320,
  // },
  // label: 'flex',
  // flexDirection: 'column',
  // marginBottom: 15,
};

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function Form() {
  const [email, setEmail] = useLocalStorage('mail', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handlChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  // useEffect(() => {
  //   console.log('fdf');
  //   window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   console.log('fdf');
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  // const handelSubmit = event => {
  //   event.preventDefault();

  //   console.log(email, password);
  // };

  return (
    <form style={styles.form} autoComplete="off">
      <label style={styles.label}>
        <span>почта</span>
        <br />
        <input
          type="email"
          name="email"
          onChange={handlChange}
          value={email}
          placeholder="pohta"
        />
      </label>
      <br />
      <label style={styles.label}>
        <span>Password</span>
        <br />
        <input
          type="password"
          name="password"
          onChange={handlChange}
          value={password}
          placeholder="password"
        />
      </label>
      <br />
      <button type="submit">Зарегистрироватся</button>
    </form>
  );
}
