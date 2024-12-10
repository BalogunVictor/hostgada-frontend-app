import React, { SVGProps } from 'react';

export function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22H2.9937C2.11018 22 1.66771 20.9229 2.29245 20.2929L4.2495 18.3195C2.84334 16.597 2 14.397 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.99 8C12.99 7.44772 12.5446 7 11.995 7C11.4455 7 11 7.44772 11 8V12C11 12.5523 11.4455 13 11.995 13C12.5446 13 12.99 12.5523 12.99 12V8ZM11.995 15C11.4455 15 11 15.4477 11 16C11 16.5523 11.4455 17 11.995 17H12.005C12.5545 17 13 16.5523 13 16C13 15.4477 12.5545 15 12.005 15H11.995Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
