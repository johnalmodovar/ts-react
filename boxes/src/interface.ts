/** Interfaces for Box App. */

interface BoxInterface {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
}

interface BoxPropsInterface extends BoxInterface {
  remove(id: string): void;
}

interface NewBoxFormData {
    width: number | string;
    height: number | string;
    backgroundColor: string;
}

export type { BoxInterface, BoxPropsInterface, NewBoxFormData };