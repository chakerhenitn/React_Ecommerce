//import { ProductNameTypes } from "../types";

export interface IProduct {
  id?: number | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput{
  id: string;
  name: 'title' | 'description' | 'imageURL'  | 'price'| 'category';
  label: string;
  type: string;
}


