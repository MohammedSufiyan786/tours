
// import React, { useState } from 'react';

// const Tour = ({ id, image, info, name, price, removeTour }) => {
//   const [readMore, setReadMore] = useState(false);
//   return (
//     <article className="single-tour">
//       <img src={image} alt={name} />
//       <footer>
//         <div className="tour-info">
//           <h4>{name}</h4>
//           <h4 className="tour-price">${price}</h4>
//         </div>
//         <p>
//           {readMore ? info : `${info.substring(0, 200)}...`}
//           <button onClick={() => setReadMore(!readMore)}>
//             {readMore ? 'show less' : '  read more'}
//           </button>
//         </p>
//         <button className="delete-btn" onClick={() => removeTour(id)}>
//           not interested
//         </button>
//       </footer>
//     </article>
//   );
// };

// export default Tour;


import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  console.log(props,'Tour');
  return (
<article className="single-tour">
<img src={props.image} alt={props.name} />
<footer>
<div className="tour-info">
<h4>
{props.name}
</h4>
<h4 className="tour-price">${props.price} </h4>
</div>

<p> {readMore ? props.info : `${props.info.substring(0, 200)}...`}
 <button onClick={() => setReadMore(!readMore)}>
 {readMore ? 'show less' : 'read more'}
  </button>
   </p>

<button className="delete-btn" onClick={()=>props.removeTour(props.id)}>not Intrested</button>
</footer>
  </article>
  );
};

export default Tour