import React from 'react';
import type { SVGProps } from 'react';

export default function TerminalIcon(props: SVGProps<SVGSVGElement>) {
    return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={50}
			height={50}
			viewBox="0 0 48 48"
			{...props}
		>
			<g fill="none">
				<rect
					width={40}
					height={32}
					x={4}
					y={8}
					fill="#2f88ff"
					stroke="#000"
					rx={2}
				/>
				<path stroke="#fff" d="M12 18l7 6-7 6M23 32h13" />
			</g>
		</svg>
    );
}
