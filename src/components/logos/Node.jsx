import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#83cd29"
        d="M16 30a2.15 2.15 0 01-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 001.549-.7.26.26 0 01.255.019l2.631 1.563a.34.34 0 00.318 0l10.26-5.922a.32.32 0 00.157-.278V10.075a.33.33 0 00-.159-.283l-10.26-5.917a.32.32 0 00-.317 0L5.587 9.794a.33.33 0 00-.162.281v11.841a.32.32 0 00.161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 01.3-.3h1.3a.3.3 0 01.3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 01-2.363-.642l-2.697-1.547a2.17 2.17 0 01-1.076-1.872V10.075A2.16 2.16 0 014.661 8.2l10.261-5.924a2.25 2.25 0 012.156 0L27.338 8.2a2.17 2.17 0 011.077 1.87v11.846a2.17 2.17 0 01-1.077 1.872l-10.26 5.924A2.15 2.15 0 0116 30"
      />
      <path
        fill="#83cd29"
        d="M14.054 17.953a.3.3 0 01.3-.3h1.327a.3.3 0 01.295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 01-.295.323h-1.336a.3.3 0 01-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784"
      />
    </svg>
  )
}

export default SvgComponent

