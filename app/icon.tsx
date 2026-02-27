export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/svg+xml'

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081427"/>
      <stop offset="100%" stop-color="#1a3970"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bg)"/>
  <circle cx="32" cy="32" r="20" stroke="#EAF1FF" stroke-width="2.5"/>
  <path d="M39 22L29 32L39 42" stroke="#EAF1FF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 32H43" stroke="#5E95FF" stroke-width="3.2" stroke-linecap="round"/>
</svg>
`.trim()

export default function Icon() {
  return new Response(iconSvg, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
