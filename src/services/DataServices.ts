// const baseUrl =
interface LooseObject {
  [key: string]: any;
}
class DataService {
  baseUrl: string | undefined;
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }
  async _fetch(request: Request) {
    return await fetch(request).then((response) => {
      var json = response.json();
      if (response.status === 200) {
        return json;
      } else {
        return json.then((data) => {
          return Promise.reject({
            payload: data,
            status: response.status,
          });
        });
      }
    });
  }
  _makeUrl(url: string, urlParams: any) {
    if (urlParams !== null && typeof urlParams === "object")
      Object.keys(urlParams).forEach(
        (k) =>
          !urlParams[k] && urlParams[k] !== undefined && delete urlParams[k]
      );
    if (urlParams) {
      urlParams = new URLSearchParams(urlParams).toString();
      url += "?" + urlParams;
    }
    var targetUrl = new URL(url, this.baseUrl);
    return targetUrl;
  }
  _getHeader() {
    var header = new Headers();
    header.append("Content-type", "application/json");
    var token = localStorage.getItem("token");
    if (token) {
      header.append("Authorization", "Bearer " + token);
    }
    return header;
  }
  get(url: string, urlParams: LooseObject | null = null) {
    var targetUrl = this._makeUrl(url, urlParams);
    const requestOptions = {
      method: "GET",
      headers: this._getHeader(),
    };
    const req = new Request(targetUrl, requestOptions);
    return this._fetch(req);
  }
  post(url: string, form: LooseObject, urlParams: LooseObject | null = null) {
    var targetUrl = this._makeUrl(url, urlParams);
    const requestOptions = {
      method: "POST",
      headers: this._getHeader(),
      body: JSON.stringify(form),
    };
    const req = new Request(targetUrl, requestOptions);
    return this._fetch(req);
  }
  put(url: string, form: LooseObject, urlParams: LooseObject | null = null) {
    var targetUrl = this._makeUrl(url, urlParams);
    const requestOptions = {
      method: "PUT",
      headers: this._getHeader(),
      body: JSON.stringify(form),
    };
    const req = new Request(targetUrl, requestOptions);
    return this._fetch(req);
  }
  delete(url:string,urlParams:LooseObject|null=null){
    var targetUrl = this._makeUrl(url, urlParams);
    const requestOptions = {
      method: "DELETE",
      headers: this._getHeader(),
    };
    const req = new Request(targetUrl, requestOptions);
    return this._fetch(req);
  }
}
const dataService = new DataService();

export default dataService;
