export default function Card(props) {
  const cardEmoji = props.emoji;
  const cardTitle = props.title;
  const cardSubtitle = props.subtitle;

  return (
    <>
      <article className="card__container">
        <p className="emoji"> {`${cardEmoji}`} </p>
        <p className="card_title"> {`${cardTitle}`} </p>
        <p className="card_subtitle">{`${cardSubtitle}`}</p>
      </article>
    </>
  );
}
