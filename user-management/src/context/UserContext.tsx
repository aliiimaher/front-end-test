import { createContext } from "react";
import { Person } from "../types/person.types";

export const UserContext = createContext<Person | null>(null);
