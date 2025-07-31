import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function CountdownBanner() {
  const targetDate = '2025-12-31T00:00:00';
  const { container, containerTimer, title, boxBtn } = styles;

  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classis Make A Comeback</p>
      <div className={boxBtn}>
        <Button content={'Buy now'} />
      </div>
    </div>
  );
}

export default CountdownBanner;
