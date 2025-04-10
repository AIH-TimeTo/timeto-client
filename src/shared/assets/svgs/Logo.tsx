import type { SVGProps } from 'react';
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <path
      fill="#000"
      d="M70.15 19.01 60.8 9.669A33.06 33.06 0 0 0 37.436 0H0v20.17l46.954-.027c7.055 0 12.778 5.72 12.778 12.778V79.78c0 .072-.006.145-.006.22h20.12V42.403a33.06 33.06 0 0 0-9.696-23.39z"
    />
    <path
      fill="#000"
      d="M51.433 28.611c-4.58-4.579-12-4.579-16.58 0L.188 63.278l16.579 16.579L51.433 45.19c4.579-4.58 4.579-12 0-16.579"
    />
  </svg>
);
export default SvgLogo;
