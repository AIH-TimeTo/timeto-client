import type { SVGProps } from 'react';
const SvgIcCommonFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6.75c0-.464.187-.91.52-1.237A1.8 1.8 0 0 1 5.779 5h1.55c.434 0 .851.156 1.176.438l2.02 1.75c.324.281.742.437 1.175.437h6.523c.472 0 .924.184 1.257.513.334.328.521.773.521 1.237v7.875c0 .464-.187.91-.52 1.237a1.8 1.8 0 0 1-1.258.513H5.778c-.472 0-.924-.184-1.257-.513A1.74 1.74 0 0 1 4 17.25z"
    />
  </svg>
);
export default SvgIcCommonFolder;
