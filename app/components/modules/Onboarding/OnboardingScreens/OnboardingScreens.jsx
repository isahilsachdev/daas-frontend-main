import { useRouter } from 'next/navigation';
import React from 'react'

const OnboardingScreens = () => {
  const [step, setStep] = useState('otp');
  const router = useRouter();

  const handleStepChange = (curStep) => {
    setStep(curStep);
  };

  useEffect(() => {
    const localFn = async () => {
      // const res = await getAllOnboardingDetails();
      // let step = 1;

      // if (res.organization.status) {
      //   step = 2;
      //   if (res.workspaces.status) {
      //     step = 3;
      //     if (res.connections.status) {
      //       step = null;
      //       router.push('/dashboard/settings/profile');
      //     }
      //   }
      // }

      // step && handleStepChange(step);
    };

    localFn();
  }, []);

  const renderStep = () => {
    switch (step) {
    case null:
      // loader
    case 'otp':
      return <div></div>;
    default:
      return <div></div>;
    }
  };

  return (
    <>
      <div className={styles.onboardingMainContainer}>
        {renderStep()}
      </div>
    </>
  );
}

export default OnboardingScreens