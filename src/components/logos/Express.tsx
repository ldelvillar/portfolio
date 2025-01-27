import React from 'react';
import type { SVGProps } from 'react';

export default function ExpressjsLogo(props: SVGProps<SVGSVGElement>) {
	return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M20.493 6.725c.256-.334.652-.53 1.073-.53h.34l-4.392 5.743L22 17.803h-.34a1.35 1.35 0 0 1-1.073-.53l-3.576-4.676l-3.577 4.676a1.35 1.35 0 0 1-1.072.53h-.34l4.485-5.865l-4.391-5.743h.34c.42 0 .817.196 1.072.53l3.482 4.554z"
            >
            </path>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.563 17.146c1.924.702 3.936-.094 4.959-1.647c.2-.305.53-.498.896-.498h.255c-.94 2.437-3.72 3.856-6.363 2.905C3.287 17.178 2 15.179 2 13.029V10.8a5.01 5.01 0 0 1 5.486-4.981c2.593.243 4.521 2.523 4.521 5.127V12.6H2.801v.444c0 1.802 1.069 3.485 2.762 4.102m1.44-10.55a4.21 4.21 0 0 0-4.202 4.202V11.8h8.406v-1a4.21 4.21 0 0 0-4.203-4.204"
                clipRule="evenodd"
            >
            </path>
        </svg>
    );
}
