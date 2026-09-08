import type { SVGProps } from "react";

export function EmbeddedSearchIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.76033 8.46863C6.94189 9.1314 5.89943 9.52842 4.76424 9.52842C2.13302 9.52842 0 7.39541 0 4.76421C0 2.13301 2.13302 0 4.76424 0C7.39545 0 9.52847 2.13301 9.52847 4.76421C9.52847 5.89942 9.13143 6.94189 8.46864 7.76034L12 11.2917L11.2917 12L7.76033 8.46863ZM8.52679 4.76421C8.52679 2.68623 6.84224 1.00168 4.76424 1.00168C2.68623 1.00168 1.00168 2.68623 1.00168 4.76421C1.00168 6.84219 2.68623 8.52674 4.76424 8.52674C6.84224 8.52674 8.52679 6.84219 8.52679 4.76421Z"
        fill="currentColor"
        transform="translate(1.75 1.75)"
      />
    </svg>
  );
}

export function EmbeddedFilterIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 16 16"
    >
      <path
        d="M7 4.38197V10.557L5 9.807V4.38197L1 2.38197V1H11V2.38197L7 4.38197ZM8 5L11.7236 3.1382C11.893 3.0535 12 2.88037 12 2.69098V0.5C12 0.223858 11.7761 0 11.5 0H0.5C0.223858 0 0 0.223858 0 0.5V2.69098C0 2.88037 0.107001 3.0535 0.276393 3.1382L4 5V10.1535C4 10.3619 4.12929 10.5485 4.32444 10.6217L7.32444 11.7467C7.65131 11.8692 8 11.6276 8 11.2785V5Z"
        fill="currentColor"
        transform="translate(2 2)"
      />
    </svg>
  );
}
