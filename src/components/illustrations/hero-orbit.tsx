export function HeroOrbit() {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full max-w-[28rem]"
    >
      <circle cx="260" cy="260" r="190" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="132" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <path
        d="M128 324C171 376 236 401 308 391C372 381 423 343 447 287"
        stroke="rgba(247,143,89,0.9)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M103 206C129 143 186 96 254 84C317 73 382 96 429 144"
        stroke="rgba(130,175,255,0.85)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="260" cy="260" r="22" fill="#F78F59" />
      <circle cx="355" cy="168" r="14" fill="#A8C2FF" />
      <circle cx="178" cy="354" r="16" fill="#0F172A" fillOpacity="0.72" />
      <circle cx="420" cy="286" r="10" fill="#F6F1E8" />
      <path
        d="M222 236H298V284H222z"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.22)"
      />
      <path
        d="M236 218L260 194L284 218"
        stroke="white"
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M236 302L260 326L284 302"
        stroke="white"
        strokeOpacity="0.48"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
