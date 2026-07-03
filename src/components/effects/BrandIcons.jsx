export function GithubMark({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.72 1.26 3.38.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinMark({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="7.5" r="1.6" fill="currentColor" />
      <rect x="5.6" y="10.5" width="2.8" height="8" fill="currentColor" />
      <path
        d="M11.5 10.5h2.7v1.3c.5-.8 1.5-1.6 3-1.6 2.4 0 3.8 1.5 3.8 4.3v5.5h-2.8v-5c0-1.4-.6-2.3-1.9-2.3-1.1 0-1.9.8-1.9 2.3v5h-2.9v-9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
