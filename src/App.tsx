import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCards";
import Modal from "./components/UI/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/input";
import { IProduct } from "./interfaces";

const App = () => {
  /*------------STATE------------*/
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  /*------------HANDLER------------*/
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  /**----------RENDERS-----------*/
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormItemList = formInputsList.map((inputItem) => (
    <div className="flex flex-col">
      <label htmlFor={inputItem.id}>{inputItem.label}</label>
      <Input
        type="text"
        id={inputItem.id}
        name={inputItem.name}
        value={""}
        onChange={onChangeHandler}
      />
    </div>
  ));
  return (
    <main className="container ">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        ADD
      </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
        <div className="space-y-3">{renderFormItemList}</div>
        <div className="flex items-center space-x-3 my-4">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-800">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
