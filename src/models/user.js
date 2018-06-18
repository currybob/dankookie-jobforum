import axios from '../customAxios.js';
import eventBus from '../eventBus.js';

export default {
    data: {
        isLoggedIn: false,
        me: {}
    },

    init() {
        return new Promise((resolve, reject) => {
            axios
            .get('/user/me')
            .then(res => {
                if(res.data.success) {
                    this.data.isLoggedIn = true;
                    this.data.me = res.data.me;
                } else {
                    this.data.isLoggedIn = false;
                    this.data.me = {};
                }
                eventBus.$emit('didLogin', res.data.me);
            })
            .catch(err => {
                reject(err);
            })
        });
        
    },

    me() {
        return new Promise((resolve, reject) => {
            if(this.data.isLoggedIn && this.data.me) {
                resolve(this.data.me);
            }
            reject();
        });
        
    },  

    login(data) {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/login', data)
            .then(res => {
                if(res.data.success) {
                    this.init();
                    resolve();
                }
                reject(new Error(res.data.message));
            })
            .catch(err => {
                reject(err);
            });
        });
    },

    logout() {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/logout')
            .then(res => {
                if(res.data.success) {
                    this.init();
                    resolve();
                }
            })
        });
    }
}