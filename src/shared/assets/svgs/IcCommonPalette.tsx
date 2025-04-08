import type { SVGProps } from 'react';
const SvgIcCommonPalette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.6 8.4a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8M9.6 9.2a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8M8 13.2a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20a8 8 0 1 1 8-8q0 3.2-4 3.2t-3.2 2.4T12 20"
    />
  </svg>
);
export default SvgIcCommonPalette;
