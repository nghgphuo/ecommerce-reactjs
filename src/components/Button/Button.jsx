import classNames from 'classnames';
import styles from './styles.module.scss';
function Button({ content, isPrimary = true }) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <div>
      <button
        className={classNames(btn, {
          [primaryBtn]: isPrimary,
          [secondaryBtn]: !isPrimary
        })}
      >
        {content}
      </button>
    </div>
  );
}

export default Button;
