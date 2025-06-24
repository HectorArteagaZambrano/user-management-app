export interface StorageSessionStrategy<T> {
  get(key: string): T | null;
  set(key: string, value: unknown): void;
  remove(key: string): void;
  removeAll(): void;
}