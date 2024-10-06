import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
type UserSession = {
  id: string;
  loginName: string;
  email: string;
  exp: number;
  iat: number;
};

type AuthContextType = {
  session: UserSession | null;
  setSession: React.Dispatch<React.SetStateAction<UserSession | null>>;
  signOut: () => Promise<void>;
  signIn: (token: string) => Promise<void>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<UserSession | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signOut = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    setSession(null);
  };
  const signIn = async (token: string) => {
    const decoded = jwtDecode<UserSession>(token);
    setSession(decoded);
    setIsAuthenticated(true);
  };
  useEffect(() => {
    const loadSession = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("access_token");
        if (accessToken) {
          const decoded = jwtDecode<UserSession>(accessToken);
          setSession(decoded);
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error("Failed to load session:", e);
      }
    };
    loadSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        setSession,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
