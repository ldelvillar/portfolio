import React from 'react';
import type { SVGProps } from 'react';

export default function FigmaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 54 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.333 80c7.36 0 13.334-5.973 13.334-13.333V53.333H13.333C5.973 53.334 0 59.308 0 66.668 0 74.027 5.973 80 13.333 80z"
        fill="#0ACF83"
      />
      <path
        d="M0 40c0-7.36 5.973-13.334 13.333-13.334h13.334v26.667H13.333C5.973 53.333 0 47.36 0 40z"
        fill="#A259FF"
      />
      <path
        d="M0 13.333C0 5.973 5.973 0 13.333 0h13.334v26.667H13.333C5.973 26.667 0 20.693 0 13.333z"
        fill="#F24E1E"
      />
      <path
        d="M26.667 0H40c7.36 0 13.333 5.973 13.333 13.333S47.36 26.667 40 26.667H26.667V0z"
        fill="#FF7262"
      />
      <path
        d="M53.333 40c0 7.36-5.973 13.333-13.333 13.333S26.667 47.36 26.667 40 32.64 26.666 40 26.666 53.333 32.64 53.333 40z"
        fill="#1ABCFE"
      />
      <defs>
        <clipPath id="clip0_912_3">
          <path fill="#fff" d="M0 0H53.3333V80H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
