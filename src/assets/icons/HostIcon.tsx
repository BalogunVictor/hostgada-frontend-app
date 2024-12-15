import React, { memo, SVGProps } from 'react';

function Host(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="52"
      height="53"
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.5" width="52" height="52" rx="26" fill="#E8E8E8" />
      <path
        d="M25 27C26.1867 27 27.3467 26.6481 28.3334 25.9888C29.3201 25.3295 30.0892 24.3925 30.5433 23.2961C30.9974 22.1997 31.1162 20.9933 30.8847 19.8295C30.6532 18.6656 30.0818 17.5965 29.2426 16.7574C28.4035 15.9182 27.3344 15.3468 26.1705 15.1153C25.0067 14.8838 23.8003 15.0026 22.7039 15.4567C21.6075 15.9109 20.6705 16.6799 20.0112 17.6666C19.3519 18.6533 19 19.8133 19 21C19 22.5913 19.6321 24.1174 20.7574 25.2426C21.8826 26.3679 23.4087 27 25 27ZM25 25C24.3448 25.0003 23.6996 24.8397 23.1211 24.5323C22.5426 24.2248 22.0484 23.78 21.682 23.2369C21.3156 22.6937 21.0883 22.0689 21.0199 21.4173C20.9516 20.7657 21.0443 20.1073 21.29 19.5C21.3047 19.4663 21.3267 19.4363 21.3544 19.4121C21.382 19.3879 21.4147 19.3701 21.45 19.36C21.4804 19.3424 21.5149 19.3332 21.55 19.3332C21.5851 19.3332 21.6196 19.3424 21.65 19.36C23.1407 20.2494 24.8441 20.7193 26.58 20.72C27.2859 20.7231 27.9901 20.6494 28.68 20.5C28.7107 20.4834 28.7451 20.4747 28.78 20.4747C28.8149 20.4747 28.8493 20.4834 28.88 20.5C28.9093 20.518 28.9338 20.5429 28.9512 20.5725C28.9686 20.6022 28.9785 20.6356 28.98 20.67C28.9849 20.7533 28.9849 20.8367 28.98 20.92C28.9906 21.4503 28.8957 21.9774 28.7006 22.4707C28.5056 22.9639 28.2145 23.4135 27.8441 23.7932C27.4737 24.1728 27.0315 24.4751 26.5433 24.6823C26.055 24.8894 25.5304 24.9975 25 25Z"
        fill="#FE791B"
      />
      <path
        d="M25 28C22.4813 28.0026 20.0664 29.0044 18.2854 30.7854C16.5044 32.5664 15.5026 34.9813 15.5 37.5C15.5 37.6326 15.5527 37.7598 15.6464 37.8536C15.7402 37.9473 15.8674 38 16 38H34C34.1326 38 34.2598 37.9473 34.3536 37.8536C34.4473 37.7598 34.5 37.6326 34.5 37.5C34.4974 34.9813 33.4956 32.5664 31.7146 30.7854C29.9336 29.0044 27.5187 28.0026 25 28Z"
        fill="#FE791B"
      />
    </svg>
  );
}

const HostIcon = memo(Host);
export default HostIcon;
