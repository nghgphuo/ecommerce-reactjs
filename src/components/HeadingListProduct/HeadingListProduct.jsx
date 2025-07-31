import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProduct() {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div>Count down time</div>
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
