export type Product = {
  _id: string;
  name: string;
  category: "hoodies" | "sweats" | "t-shirts" | "caps";
  price: number;
  size: "XS" | "S" | "M" | "L" | "XL";
  color: string;
};
