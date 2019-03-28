var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
    progressiveLoad:true,
    preserveAspectRatio:'xMidYMid meet'
},
  path: 'dataThin.json'
})