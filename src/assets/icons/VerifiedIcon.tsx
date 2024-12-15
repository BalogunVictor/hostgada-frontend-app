import React, { memo, SVGProps } from 'react';

function Verified(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.51925 18.1918L6.12758 15.8468L3.48091 15.276L3.74091 12.5451L1.95508 10.5001L3.74174 8.45512L3.48091 5.72512L6.12841 5.15428L7.51925 2.80845L10.0001 3.85595L12.4809 2.80762L13.8726 5.15428L16.5192 5.72428L16.2592 8.45512L18.0459 10.5001L16.2609 12.5451L16.5201 15.276L13.8726 15.846L12.4817 18.1926L10.0001 17.1443L7.51925 18.1918ZM9.12508 12.8818L13.2567 8.75012L12.6667 8.15012L9.12508 11.6918L7.33341 9.91012L6.74341 10.5001L9.12508 12.8818Z"
        fill="#FE791B"
      />
    </svg>
  );
}

const VerifiedIcon = memo(Verified);
export default VerifiedIcon;
