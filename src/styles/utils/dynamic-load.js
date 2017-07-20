
export default function dynamicLoad (url, callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  document.head.appendChild(script)
  script.onload = callback
  script.src = url
}
