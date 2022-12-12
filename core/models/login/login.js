import { Http } from "../http"

export class LoginModel extends Http {
  login() {
    return this.request({
      url: ''
    })
  }
}
