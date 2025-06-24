import { User } from "@shared/interfaces";

export interface AuthResult {
    isAuthenticated: boolean;
    user: User | null;
}