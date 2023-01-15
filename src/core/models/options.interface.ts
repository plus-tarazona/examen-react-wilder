export interface IOption {
  id: number;
  title: string;
  url: string;
  options?: IOption[];
}
