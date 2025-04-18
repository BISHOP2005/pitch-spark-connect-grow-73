
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (name: string, email: string, password: string): boolean => {
    try {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some((u: any) => u.email === email)) {
        toast.error("Email already registered");
        return false;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email
      };

      // Store user in users array
      users.push({ ...newUser, password });
      localStorage.setItem("users", JSON.stringify(users));

      // Set current user
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

  const login = (email: string, password: string): boolean => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find((u: any) => u.email === email && u.password === password);

      if (!foundUser) {
        toast.error("Invalid email or password");
        return false;
      }

      // Extract user data without password
      const { password: _, ...userData } = foundUser;
      
      // Set user
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      
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
