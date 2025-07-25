import React from 'react';
import type { SVGProps } from 'react';

export default function TensorflowLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="-9 0 274 274"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M145.726 42.065v42.07l72.861 42.07v-42.07l-72.86-42.07zM0 84.135v42.07l36.43 21.03V105.17L0 84.135zm109.291 21.035l-36.43 21.034v126.2l36.43 21.035v-84.135l36.435 21.035v-42.07l-36.435-21.034V105.17z"
        fill="#E55B2D"
      />
      <path
        d="M145.726 42.065L36.43 105.17v42.065l72.861-42.065v42.065l36.435-21.03v-84.14zM255.022 63.1l-36.435 21.035v42.07l36.435-21.035V63.1zm-72.865 84.135l-36.43 21.035v42.07l36.43-21.036v-42.07zm-36.43 63.104l-36.436-21.035v84.135l36.435-21.035V210.34z"
        fill="#ED8E24"
      />
      <path
        d="M145.726 0L0 84.135l36.43 21.035 109.296-63.105 72.861 42.07L255.022 63.1 145.726 0zm0 126.204l-36.435 21.03 36.435 21.036 36.43-21.035-36.43-21.03z"
        fill="#F8BF3C"
      />
    </svg>
  );
}
