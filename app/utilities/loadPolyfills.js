export default function loadPolyfills(cb) {
    const fillFetch = () => new Promise((resolve) => {
        if ('fetch' in window) return resolve()

        require.ensure([], () => {
            require('whatwg-fetch')

            resolve()
        }, 'fetch')
    })

    /*const fillIntl = () => new Promise((resolve) => {
		if ('Intl' in window) return resolve();

		require.ensure([], () => {
			require('intl');
			require('intl/locale-data/jsonp/en.js');

			resolve();
		}, 'Intl');
	});*/

    const doIt = () => Promise.all([
        fillFetch()
        //, fillIntl()
    ]).then()

    if (!window.Promise) {
        // Load Promise
        require.ensure([], () => {
            const PolyfilledPromise = require('promise-polyfill')

            window.Promise = PolyfilledPromise

            doIt().then(cb)
        }, 'promises')
    } else {
        doIt().then(cb)
    }
}
