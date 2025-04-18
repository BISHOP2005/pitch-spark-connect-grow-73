import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ref, get, set, child } from "firebase/database";
import { db } from "../firebaseConfig";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const userRef = ref(db, "users");
      const snapshot = await get(child(userRef, btoa(email)));

      if (snapshot.exists()) {
        toast.error("Email already registered");
        return false;
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
      };

      await set(child(userRef, btoa(email)), {
        ...newUser,
        password,
      });

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      toast.success("Account created successfully");
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Failed to create account");
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const userRef = ref(db, "users");
      const snapshot = await get(child(userRef, btoa(email)));

      if (!snapshot.exists()) {
        toast.error("Invalid email or password");
        return false;
      }

      const userData = snapshot.val();

      if (userData.password !== password) {
        toast.error("Invalid email or password");
        return false;
      }

      const { password: _, ...userWithoutPassword } = userData;

      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));

      toast.success("Signed in successfully");
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to sign in");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
