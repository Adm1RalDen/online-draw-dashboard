export interface FunctionWithParams<T> {
  (e: T): void
}

export interface ChildrenProps {
  children: JSX.Element
}

export interface ServerResponseError {
  data: {
    message: string
  }
}

export type ChangeStateAction<T> = React.Dispatch<React.SetStateAction<T>>
