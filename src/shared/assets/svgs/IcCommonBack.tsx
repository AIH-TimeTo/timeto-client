import type { SVGProps } from 'react';
const SvgIcCommonBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.73 5-6.603 7.134 6.414 7.703"
    />
  </svg>
);
export default SvgIcCommonBack;
