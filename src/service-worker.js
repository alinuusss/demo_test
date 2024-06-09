self.addEventListener('install', (event) => {
    console.log('sw install');
    self.skipWaiting();
});
