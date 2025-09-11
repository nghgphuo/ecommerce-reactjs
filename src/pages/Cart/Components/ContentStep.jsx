import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';
import Contents from '@/pages/Cart/components/contents/Contents';
import Checkout from '@/pages/Cart/components/Checkout/Checkout';
import QrPayment from '@/pages/Cart/Components/QrPayment';

function ContentStep() {
  const handleRenderContent = () => {
    const { currentStep } = useContext(StepperContext);

    switch (currentStep) {
      case 1:
        return <Contents />;
      case 2:
        return <Checkout />;
      case 3:
        return <QrPayment />;
    }
  };

  return <>{handleRenderContent()}</>;
}

export default ContentStep;
