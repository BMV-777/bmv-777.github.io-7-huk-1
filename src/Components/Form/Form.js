import { useState } from 'react';

const styles = {
  // form: {
  //   width: 320,
  // },
  // label: 'flex',
  // flexDirection: 'column',
  // marginBottom: 15,
};

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelGangEmail = event => {
    setEmail(event.target.value);
  };

  const handelGangPassword = event => {
    setPassword(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <form style={styles.form} autoComplete="off" onSubmit={handelSubmit}>
      <label style={styles.label}>
        <span>почта</span>
        <br />
        <input
          type="email"
          name="email"
          onChange={handelGangEmail}
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
          onChange={handelGangPassword}
          value={password}
          placeholder="password"
        />
      </label>
      <br />
      <button type="submit">Зарегистрироватся</button>
    </form>
  );
}
