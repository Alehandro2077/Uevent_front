import {makeAutoObservable} from 'mobx'

export default class UserAuth {
    constructor(){
        this._isAuth = false
        this._isOrganiser = false
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }

    // login(username, password) {
    //     // Здесь должна быть логика аутентификации
    //     this.isAuthenticated = true;
    //   }

    // UserLogining() 
    // {
    //     // делает тру
    //     this.isAuthenticated = true;
    // }
    // Companytrue()
    // {
    //      this._isСompany = true;
    // }

    // setUser(user){
    //     this._user = user
    // }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }

    get isAdmin(){
        return this._isAdmin
    }

    setIsOrganiser(bool) {
        this._isOrganiser = bool
    }

    get isOrganiser(){
        return this._isOrganiser
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    // setUser(user){
    //     this._user = user
    // }

    // SetSsAuth() 
    // {
    //     return this._isAuth
    // }

    // // Проверка компания ли зарегана
    // isСompany() {
    //     return this._isAuth
    // }

    // // что за геттер нахуй как мне его дастать то блять ?
    // get isAuth() {
    //     return this._isAuth
    // }

    // get user() {
    //     return this._user
    // }
}