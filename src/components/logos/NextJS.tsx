import React from 'react';
import type { SVGProps } from 'react';

export default function NextJSLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosNextjsIcon0"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stopColor="#fff"></stop>
          <stop offset="100%" stopColor="#fff" stopOpacity={0}></stop>
        </linearGradient>
        <linearGradient
          id="logosNextjsIcon1"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stopColor="#fff"></stop>
          <stop offset="100%" stopColor="#fff" stopOpacity={0}></stop>
        </linearGradient>
        <circle id="logosNextjsIcon2" cx={128} cy={128} r={128}></circle>
      </defs>
      <mask id="logosNextjsIcon3" fill="#fff">
        <use href="#logosNextjsIcon2"></use>
      </mask>
      <g mask="url(#logosNextjsIcon3)">
        <circle cx={128} cy={128} r={128}></circle>
        <path
          fill="url(#logosNextjsIcon0)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
        ></path>
        <path
          fill="url(#logosNextjsIcon1)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        ></path>
      </g>
    </svg>
  );
}
