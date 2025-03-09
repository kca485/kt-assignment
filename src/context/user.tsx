import { createContext, Dispatch } from "react";
import { PropsWithChildren, useReducer } from "react";

interface User {
  email: string;
}
interface UserAction {
  type: "login" | "logout";
  email?: string;
}

function userReducer(_: User | null, action: UserAction): User | null {
  switch (action.type) {
    case "login":
      if (!action.email) {
        throw new Error("Missing credential.");
      }
      return {
        email: action.email,
      };

    case "logout":
      return null;

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

const UserContext = createContext<User | null>(null);
const UserDispatchContext = createContext<Dispatch<UserAction>>(() => {});

function UserProvider({ children }: PropsWithChildren) {
  const [user, dispatch] = useReducer(userReducer, null);
  return (
    <UserContext value={user}>
      <UserDispatchContext value={dispatch}>{children}</UserDispatchContext>
    </UserContext>
  );
}

export type { User, UserAction };
export { UserContext, UserDispatchContext, UserProvider };
