self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('favicon.ico')) {
    return; // Skip caching
  }
});
