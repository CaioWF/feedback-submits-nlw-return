export interface IToEntity<E, T> {
  toEntity(data: E): T;
}