import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./UI/Button";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  //use of destructering
  const { description, imageURL, price, title, category } = product;
  //End use of destructring
  return (
    <div className=" max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <Image
        imageURL={imageURL}
        alt={"Product Name"}
        className="  rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-xs text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-red-700">DELETE</Button>
        <Button className="bg-green-700">EDIT</Button>
      </div>
    </div>
  );
};

export default ProductCard;
