import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

// Environment configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const API_TIMEOUT = 30000; // 30 seconds

// Create axios instance with default config
const httpClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true, // Enable cookies for cross-origin requests
});

// Request interceptor - Add auth token and handle pre-request logic
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Only access localStorage on client-side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Optional: Add request timestamp for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log(
          `[HTTP Request] ${config.method?.toUpperCase()} ${config.url}`,
          {
            headers: config.headers,
            data: config.data,
          }
        );
      }
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('[HTTP Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle responses and errors globally
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Optional: Log successful responses in development
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `[HTTP Response] ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`,
        {
          status: response.status,
          data: response.data,
        }
      );
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const message = (error.response.data as any)?.message || error.message;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            // Optional: Redirect to login page
            // window.location.href = '/login';
            console.warn('[HTTP 401] Unauthorized - Token cleared');
          }
          break;

        case 403:
          // Forbidden - user doesn't have permission
          console.error('[HTTP 403] Forbidden:', message);
          break;

        case 404:
          // Not found
          console.error('[HTTP 404] Not Found:', message);
          break;

        case 422:
          // Validation error
          console.error('[HTTP 422] Validation Error:', error.response.data);
          break;

        case 500:
        case 502:
        case 503:
        case 504:
          // Server errors
          console.error(`[HTTP ${status}] Server Error:`, message);
          break;

        default:
          console.error(`[HTTP ${status}] Error:`, message);
      }
    } else if (error.request) {
      // Request made but no response received (network error)
      console.error(
        '[HTTP Network Error] No response received:',
        error.message
      );
    } else {
      // Something else happened
      console.error('[HTTP Error]', error.message);
    }

    return Promise.reject(error);
  }
);

// Helper function to set auth token
export const setAuthToken = (token: string | null) => {
  if (typeof window !== 'undefined') {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }
};

// Helper function to get auth token
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper function to clear auth token
export const clearAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

// Export configured axios instance as default
export default httpClient;

// Also export as named export for flexibility
export { httpClient };
