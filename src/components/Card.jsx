import './card.css';
/* eslint-disable */

function Card({ children, className, onClick }) {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
}

export default Card;
