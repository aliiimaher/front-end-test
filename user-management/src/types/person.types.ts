export type Person = {
  id: number;
  email?: string;
  first_name: string;
  last_name: string;
  password?: string;
  avatar?: string;
  role?: PersonRole;
};

export enum PersonRole {
  ADMIN = "admin",
  GUEST = "guest",
}
