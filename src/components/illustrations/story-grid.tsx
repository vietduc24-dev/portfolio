export function StoryGrid() {
  return (
    <svg
      viewBox="0 0 640 220"
      fill="none"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <rect x="1" y="1" width="638" height="218" rx="28" stroke="rgba(21,32,51,0.12)" />
      <path d="M70 150H570" stroke="rgba(21,32,51,0.1)" strokeDasharray="6 8" />
      <circle cx="128" cy="150" r="12" fill="#F78F59" />
      <circle cx="320" cy="150" r="12" fill="#85A7FF" />
      <circle cx="512" cy="150" r="12" fill="#152033" fillOpacity="0.8" />
      <path
        d="M128 150C170 112 222 96 277 104C310 109 340 124 364 150C398 185 452 189 512 150"
        stroke="url(#story-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="90" y="52" width="84" height="42" rx="14" fill="rgba(247,143,89,0.12)" />
      <rect x="278" y="32" width="84" height="42" rx="14" fill="rgba(133,167,255,0.15)" />
      <rect x="470" y="58" width="84" height="42" rx="14" fill="rgba(21,32,51,0.08)" />
      <defs>
        <linearGradient id="story-gradient" x1="128" y1="150" x2="512" y2="150">
          <stop stopColor="#F78F59" />
          <stop offset="0.5" stopColor="#85A7FF" />
          <stop offset="1" stopColor="#152033" />
        </linearGradient>
      </defs>
    </svg>
  );
}
