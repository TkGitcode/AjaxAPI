export class ownHttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    get = (url, callback) => {
        this.http.open('GET', url, true);
        this.http.send();
        this.http.onload = () => {

            if (this.http.status === 200) {
                let data = JSON.parse(this.http.responseText);
                callback(null, data)
            }
            else {
                console.log(`Error ${this.http.status}`);
            }
        }
    }
    post = (url, addEmployee, callback) => {
        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-Type', 'application/json')
        this.http.send(JSON.stringify(addEmployee));
        this.http.onload = () => {
            if (this.http.status === 200) {
                let resposeTexts = JSON.parse(this.http.responseText);
                callback(null, resposeTexts);
            }
            else {
                console.log(`Error ${this.http.status}`)
            }

        }
    }
    put = (url, updateEmployee, callback) => {
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-Type', "application/json")
        this.http.send(JSON.stringify(updateEmployee));
        this.http.onload = () => {
            if (this.http.status === 200) {
                let resposeTexts = JSON.parse(this.http.responseText);
                callback(null, resposeTexts);
            }
            else {
                console.log(`Error ${this.http.status}`)
            }
        }
    }
    delete = (url, callback) => {
        this.http.open('DELETE', url, true);
        this.http.send();
        this.http.onload = () => {
            if (this.http.status === 200) {

                let resposeTexts = JSON.parse(this.http.responseText);
                callback(null, resposeTexts);
            }
            else {
                console.log(`Error ${this.http.status}`)
            }
        }
    }

}