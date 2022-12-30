// import { useState } from 'react';

// export default function ColorPicker({options}) {

//   const [activeOptIdex, setActiveOptIdx] = useState(0);

//   const setActiveIdx = index => {
//     setActiveOptIdx(index);
//   }

//   const makeOptionsClassName = index => {
//     return className('ColorPicker__options', {
//       'ColorPicker__options--active': index=== activeOptIdex
//     })
//   }

//   const { label } = options[setActiveIdx];

//   return (
//     <div className='ColorPicker'>
//       <h2 className='ColorPicker'>ColorPicker</h2>
//       <p>Выбор цвета: {label}</p>
//       <div>
//         {options.map(({ color, label }, index) => {
//           <button
//             type='button'
//             key={label}
//             className={makeOptionsClassName(index)}
//             style={{ backgroundColor: color, }}
//             onClick={() => setActiveIdx(index)}
//           >
//           </button>
//         }}
//       </div>
//     </div>
//   );

// }
