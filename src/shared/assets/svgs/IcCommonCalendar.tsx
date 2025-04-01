import type { SVGProps } from 'react';
const SvgIcCommonCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5.778V4M8 5.778V4M4.222 8.444h15.556M4 10.261c0-1.88 0-2.82.388-3.538.35-.641.894-1.155 1.553-1.468.761-.366 1.757-.366 3.748-.366h4.622c1.991 0 2.987 0 3.748.366.669.322 1.212.836 1.553 1.467.388.72.388 1.66.388 3.54v4.366c0 1.88 0 2.82-.388 3.54a3.47 3.47 0 0 1-1.553 1.467C17.298 20 16.302 20 14.31 20H9.69c-1.991 0-2.987 0-3.748-.366a3.47 3.47 0 0 1-1.553-1.467C4 17.447 4 16.507 4 14.627z"
    />
  </svg>
);
export default SvgIcCommonCalendar;
