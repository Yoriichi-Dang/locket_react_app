import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
class HttpService {
  private http: AxiosInstance;
  private baseURL: string | undefined = process.env.EXPO_PUBLIC_API_URL;
  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
    });
  }
  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, config);
  }
  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, config);
  }

  // Phương thức PUT
  public async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.put<T>(url, data, config);
  }

  // Phương thức DELETE
  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.http.delete<T>(url, config);
  }
}
export default HttpService;
