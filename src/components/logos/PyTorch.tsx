import React from 'react';
import type { SVGProps } from 'react';

export default function PytorchLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#ee4c2c"
        d="m100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3c-15.1 15.1-39.4 15.1-54.3 0c-15.1-15.1-15.1-39.4 0-54.3l24-24l3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7"
      ></path>
      <circle
        cx={82.1}
        cy={29.4}
        r={6.7}
        fill="#ee4c2c"
        transform="rotate(-88.939 82.069 29.398) scale(.99997)"
      ></circle>
    </svg>
  );
}
