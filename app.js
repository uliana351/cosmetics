if ('serviceWorker' in navigator) {
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/serviceworker.js')
        .then(registration => {
            console.log('Service Worker registred with scope:',registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:',error);
            });
    });
}