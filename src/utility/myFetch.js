export class MyFetch {
    constructor() {
        this.urls = '';
    }

    create({ baseURL }) {
        this.urls = baseURL;
    }

    post(urls = '', body) {
        return fetch(this.urls + urls, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(body)
            // body: body
        }).then(value => value.json());
    }

    get(urls = '') {
        return fetch(this.urls + urls).then(value => value.json());
    }
}