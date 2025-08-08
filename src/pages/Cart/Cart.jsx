import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Steps from '@/pages/Cart/Components/steps/Steps';
import Contents from '@/pages/Cart/Components/contents/Contents';

function Cart() {
  const { container } = styles;
  return (
    <>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <MyFooter />
    </>
  );
}

export default Cart;
