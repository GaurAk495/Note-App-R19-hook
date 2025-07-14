declare interface Notes {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

declare type getResponse = {
  count: number;
  data: Notes[];
};
