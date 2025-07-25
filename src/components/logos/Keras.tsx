import React from 'react';
import type { SVGProps } from 'react';

export default function KerasLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 364.66507 364.66507"
      height={50}
      width={50}
      {...props}
    >
      <path fill="#d00000" d="M0 0h364.665v364.665H0z" />
      <path
        d="M135.592 281.48v-67.7l27.49-27.404 68.963 101.91 31.587.248 5.832-11.905-80.248-116.415 73.876-75.108-4.09-11.909H227.48l-91.888 91.863V80.21l-6.717-7.013H106.06l-6.718 7.012v200.976l7.075 7.19 21.985-.088z"
        fill="#fff"
      />
    </svg>
  );
}
