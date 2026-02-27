export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/svg+xml'

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(216 152) rotate(35) scale(440 260)">
      <stop stop-color="#4A84FF" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#4A84FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(984 50) rotate(35) scale(360 220)">
      <stop stop-color="#78B1FF" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#78B1FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#173b70"/>
      <stop offset="36%" stop-color="#112b52"/>
      <stop offset="68%" stop-color="#0b1b36"/>
      <stop offset="100%" stop-color="#050a15"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect x="135" y="100" width="930" height="430" rx="32" fill="rgba(20,35,60,0.88)" stroke="rgba(234,241,255,0.22)"/>
  <circle cx="600" cy="315" r="102" stroke="#EAF1FF" stroke-width="12"/>
  <path d="M628 269L576 315L628 361" stroke="#EAF1FF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M578 315H648" stroke="#69A7FF" stroke-width="16" stroke-linecap="round"/>
</svg>
`.trim()

export default function OpenGraphImage() {
  return new Response(ogSvg, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
