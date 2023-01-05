// import Counter from 'Components/Counter/Counter';
// import Form from 'Components/Form/Form';
// import Clock from 'Components/Clock/Clock';
// import UserMenu from 'Components/context/UserMenu';

import { Modal } from 'Components/ButonSmodalkoi/Modalka';

function App() {
  return (
    <div>
      <Modal />
      {/* <UserMenu /> */}
      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;

// import { useRef } from 'react';

// const Player = ({ source }) => {
//   const playerRef = useRef();
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// export default App;
