import type { SVGProps } from 'react';
const SvgIcCommonGarbage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#ED0505"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.75 11.111v5.333m-3.5-5.333v5.333m-3.5-8.888v10.666c0 .472.184.924.513 1.257.328.334.773.521 1.237.521h7c.464 0 .91-.187 1.237-.52.329-.334.513-.786.513-1.258V7.556M5 7.556h14m-11.375 0L9.375 4h5.25l1.75 3.556"
    />
  </svg>
);
export default SvgIcCommonGarbage;
