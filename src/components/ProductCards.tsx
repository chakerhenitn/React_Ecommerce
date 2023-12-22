import Image from "./Image";
import Button from "./UI/Button";
interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border rounded p-2 flex flex-col">
      <Image
        imageURL="https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={"Image Producct"}
        className="rounded-md mb-2"
      />
      <h1>Woman Wearing Brown Leather Tote Bag</h1>
      <p>
        Dimensions 2738 x 1825 Camera Canon EOS 750D Focal 50.0mm Aperture ƒ/2.2
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>US $23.99</span>

        <Image
          imageURL="https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={"Image Producct"}
          className="rounded-full w-10 h-10 object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          EDIT{" "}
        </Button>
        <Button className="bg-red-700">DELETE</Button>
        <Button className="bg-slate-700">LOADING</Button>
        <Button className="bg-green-700">SUCCESS</Button>
        <Button className="bg-gray-300">CANCEL</Button>
      </div>
    </div>
  );
};

export default ProductCard;
