/** A small, purpose-drawn icon family for the core tree-care services. */
export type ServiceIconName = "care" | "felling" | "safety" | "climbing";

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <circle className="service-icon__ground" cx="32" cy="32" r="31" />
      <g className="service-icon__drawing" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        {name === "care" && <>
          <path className="service-icon__accent" d="M31.5 9.5c-8.4 0-14 6.4-14 13.8 0 7.2 5.9 12.4 14 12.4s14-5.2 14-12.4c0-7.4-5.6-13.8-14-13.8Z" />
          <path d="M31.5 47V18.5m0 13.4-6.7-6.1m6.7 2.4 7-6.2M24 47h15" />
          <path d="M41.5 39.8 51 49.3M50.7 39.6 41 49.3" />
          <circle cx="40.1" cy="51" r="2.4" /><circle cx="52" cy="51" r="2.4" />
        </>}
        {name === "felling" && <>
          <path className="service-icon__accent" d="M27.5 9.5c-8.3 0-13.7 6.2-13.7 13.5 0 7.2 5.7 12.2 13.7 12.2 8.1 0 13.8-5 13.8-12.2 0-7.3-5.4-13.5-13.8-13.5Z" />
          <path d="M27.5 46V18.5m0 12-6-5m6 2 6-5M16 47h22" />
          <path d="m38.7 37.7 13 7.3-2.4 4.2-13-7.3zM42.2 43.7l-2.6 4.5m5.1-3.1-2.6 4.5m5-3.1-2.5 4.4" />
        </>}
        {name === "safety" && <>
          <path className="service-icon__accent" d="M27.5 9.5c-8 0-13.3 6-13.3 13 0 7 5.4 11.8 13.3 11.8s13.3-4.8 13.3-11.8c0-7-5.3-13-13.3-13Z" />
          <path d="M27.5 45V18.5m0 11.5-6-5m6 2 6-5M17.5 47h17" />
          <path d="m44.5 31.5 8 3.2v6.5c0 5.1-3.3 9-8 11-4.7-2-8-5.9-8-11v-6.5z" fill="#f1f5e8" />
          <path d="M44.5 37v5m0 3.7v.1" strokeWidth="2" />
        </>}
        {name === "climbing" && <>
          <path className="service-icon__accent" d="M26.5 9.5c-8 0-13.3 6.1-13.3 13.2 0 6.9 5.5 11.8 13.3 11.8 7.9 0 13.4-4.9 13.4-11.8 0-7.1-5.3-13.2-13.4-13.2Z" />
          <path d="M26.5 47V18.5m0 11.5-6-5m6 2 6-5M17 47h18" />
          <path d="M43.5 12v17.5m0 13.5v8" strokeDasharray="2.6 3.2" />
          <path d="M43.5 29.5c-3.2 0-5.4 2.5-5.4 5.6v4.6c0 3.3 2.2 5.7 5.4 5.7s5.4-2.4 5.4-5.7v-4.6c0-3.1-2.2-5.6-5.4-5.6Z" fill="#f1f5e8" />
          <path d="m40 42 7-9" />
        </>}
      </g>
    </svg>
  );
}
