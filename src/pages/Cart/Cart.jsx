import { StepperProvider } from '@/contexts/StepperProvider';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import Steps from '@pages/Cart/Components/steps/Steps';
import ContentStep from '@/pages/Cart/components/ContentStep';
import styles from './styles.module.scss';
function Cart() {
  const { container } = styles;
  return (
    <StepperProvider>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <ContentStep />
        </MainLayout>
      </div>
      <MyFooter />
    </StepperProvider>
  );
}

export default Cart;
