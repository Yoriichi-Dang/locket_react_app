import AsyncStorage from "@react-native-async-storage/async-storage";
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

  // Method to add Authorization header if "auth" flag is true
  private setAuthHeader(
    config?: AxiosRequestConfig,
    useAuth: boolean = false
  ): AxiosRequestConfig {
    if (useAuth) {
      const accessToken = AsyncStorage.getItem("access_token"); // Retrieve token from storage
      return {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${accessToken}`, // Set Authorization header only if useAuth is true
        },
      };
    }
    return config || {}; // Return config as is if no auth is required
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
    useAuth: boolean = false
  ): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, this.setAuthHeader(config, useAuth));
  }

  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
    useAuth: boolean = false
  ): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, this.setAuthHeader(config, useAuth));
  }

  public async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
    useAuth: boolean = false
  ): Promise<AxiosResponse<T>> {
    return this.http.put<T>(url, data, this.setAuthHeader(config, useAuth));
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
    useAuth: boolean = false
  ): Promise<AxiosResponse<T>> {
    return this.http.delete<T>(url, this.setAuthHeader(config, useAuth));
  }
}

export default HttpService;
