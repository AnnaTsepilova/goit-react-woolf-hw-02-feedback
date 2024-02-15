import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul>
      <li className={css.statisticsItem}>
        <p className={css.text}>Good:</p>
        <p className={css.text}>{good}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.text}>Neutral:</p>
        <p className={css.text}>{neutral}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.text}>Bad:</p>
        <p className={css.text}>{bad}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.textBold}>Total:</p>
        <p className={css.textBold}>{total}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.textBold}>Positive feedback:</p>
        <p className={css.textBold}>{percentage}%</p>
      </li>
    </ul>
  );
}
