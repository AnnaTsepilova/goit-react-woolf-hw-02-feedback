import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedbackOptionsWrapper}>
      {/* <button className={css.goodButton} type="button">
        Good
      </button>
      <button className={css.neutralButton} type="button">
        Neutral
      </button>
      <button className={css.badButton} type="button">
        Bad
      </button> */}

      {options.map((option, key) => {
        return (
          <button
            className={css.button}
            type="button"
            key={key}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
