import { BtnOnboardingGoogleLogin } from '@shared/assets/svgs';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;
const GOOGLE_URL = `${SERVER_URL}/oauth2/authorization/google`;

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = GOOGLE_URL;
  };

  return (
    <BtnOnboardingGoogleLogin
      width={360}
      onClick={handleLogin}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default GoogleLoginButton;
