import { Logo } from '@shared/assets/svgs';

import GoogleLoginButton from '../components/google-login-button/google-login-button';

import * as styles from './onboarding.css';

export default function OnboardingPage() {
  return (
    <div className={styles.wrapper}>
      <Logo width={72} height={72} />
      <div className={styles.loginButtonWrapper}>
        <GoogleLoginButton />
      </div>
    </div>
  );
}
