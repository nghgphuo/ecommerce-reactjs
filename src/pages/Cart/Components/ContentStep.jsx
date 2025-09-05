import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';
import Contents from '@/pages/Cart/components/contents/Contents';

function ContentStep() {
  const handleRenderContent = () => {
    const { currentStep } = useContext(StepperContext);

    switch (currentStep) {
      case 1:
        return <Contents />;
      case 2:
        return <>Steps 2</>;
      case 3:
        return <>Steps 3</>;
    }
  };

  return <>{handleRenderContent()}</>;
}

export default ContentStep;
