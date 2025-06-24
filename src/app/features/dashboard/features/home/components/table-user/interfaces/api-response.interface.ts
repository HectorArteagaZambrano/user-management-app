import { Employee } from "@home/shared/interfaces";

export interface ApiResponse {
    results: Employee[];
    info: Info;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}