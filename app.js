const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) document.querySelectorAll('video[autoplay]').forEach(video => { video.pause(); video.removeAttribute('autoplay'); });

document.querySelector('#copy-citation')?.addEventListener('click', async () => {
  const button = document.querySelector('#copy-citation');
  const status = document.querySelector('.copy-status');
  const text = document.querySelector('#bibtex').textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied';
    status.textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { button.textContent = 'Copy BibTeX'; status.textContent = ''; }, 3000);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (or Command+C) to copy, or download the .bib file.';
  }
});

const heroVideo = document.querySelector('#hero-video');
let resumeHero = !reducedMotion;
heroVideo.addEventListener('pause', () => { if (heroVideo.dataset.offscreen !== 'true') resumeHero = false; });
heroVideo.addEventListener('play', () => { resumeHero = true; });
new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) {
      heroVideo.dataset.offscreen = 'true';
      if (!heroVideo.paused) { resumeHero = true; heroVideo.pause(); }
    } else {
      if (resumeHero && !reducedMotion) heroVideo.play().catch(() => {});
      heroVideo.dataset.offscreen = 'false';
    }
  }
}, { threshold: 0.05 }).observe(heroVideo);

const navLinks = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (!visible.length) return;
  const id = visible[0].target.id;
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -65% 0px' });
navLinks.forEach(link => sectionObserver.observe(document.querySelector(link.getAttribute('href'))));

document.querySelectorAll('.case-row video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('.case-row video').forEach(other => { if (other !== video) other.pause(); });
}));
