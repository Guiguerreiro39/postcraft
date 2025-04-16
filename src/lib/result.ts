import { notReachable } from "@/lib/utils";

export type ValidObject = Record<string | number | symbol, unknown>;

interface InstanceMethods {
  getFailureReason<T, E>(this: Result<T, E>): E | undefined;
  getSuccessResult<T, E>(this: Result<T, E>): T | undefined;

  getSuccessResultOrThrow<T, E>(this: Result<T, E>, message: string): T;

  map<E, T, T1>(this: Result<T, E>, callback: (value: T) => T1): Result<T1, E>;
}

export class UnexpectedError<E> extends Error {
  reason: E;

  constructor(message: string, reason: E) {
    super(message);
    this.reason = reason;
  }
}

export class Success<T> implements InstanceMethods {
  type = "success" as const;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  getFailureReason<T, E>(this: Result<T, E>): E | undefined {
    return getFailureReason(this);
  }

  getSuccessResult<T, E>(this: Result<T, E>): T | undefined {
    return getSuccessResult(this);
  }

  getSuccessResultOrThrow<T, E>(this: Result<T, E>, message: string): T {
    return getSuccessResultOrThrow(this, message);
  }

  map<E, T, T1>(this: Result<T, E>, callback: (value: T) => T1): Result<T1, E> {
    return map(this, callback);
  }
}

export class Failure<E> implements InstanceMethods {
  type = "failure" as const;
  message: string;
  error?: E;

  constructor(message: string, error?: E) {
    this.message = message;
    this.error = error;
  }

  getFailureReason<T, E>(this: Result<T, E>): E | undefined {
    return getFailureReason(this);
  }

  getSuccessResult<T, E>(this: Result<T, E>): T | undefined {
    return getSuccessResult(this);
  }

  getSuccessResultOrThrow<T, E>(this: Result<T, E>, message: string): T {
    return getSuccessResultOrThrow(this, message);
  }

  map<E, T, T1>(this: Result<T, E>, callback: (value: T) => T1): Result<T1, E> {
    return map(this, callback);
  }
}

const getSuccessResultOrThrow = <T, E>(
  result: Result<T, E>,
  message: string,
): T => {
  switch (result.type) {
    case "failure":
      throw new UnexpectedError(message, result);
    case "success":
      return result.data;
    default:
      return notReachable(result);
  }
};

const getFailureReason = <T, E>(result: Result<T, E>): E | undefined => {
  switch (result.type) {
    case "failure":
      return result.error;
    case "success":
      return undefined;
    default:
      return notReachable(result);
  }
};

const getSuccessResult = <T, E>(result: Result<T, E>): T | undefined => {
  switch (result.type) {
    case "failure":
      return undefined;
    case "success":
      return result.data;
    default:
      return notReachable(result);
  }
};

const map = <E, T, T1>(
  result: Result<T, E>,
  callback: (value: T) => T1,
): Result<T1, E> => {
  switch (result.type) {
    case "failure":
      return result;
    case "success":
      return success(callback(result.data));
    default:
      return notReachable(result);
  }
};

export type Result<T, E> = Failure<E> | Success<T>;

export const failure = <E>(message: string, error?: E): Failure<E> =>
  new Failure(message, error);

export const success = <T>(data: T): Success<T> => new Success(data);
