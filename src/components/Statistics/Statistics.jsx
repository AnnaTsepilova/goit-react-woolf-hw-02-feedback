import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={css.statisticsList}>
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
      {/* <li className={css.statisticsItem}>
        <p className={css.text}>Total:</p>
        <p className={css.text}>{total}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.text}>Positive feedback:</p>
        <p className={css.text}>{percentage}%</p>
      </li> */}
    </ul>
  );
}
