import { useState, useCallback } from "react";
import MainLayout from "../layout/MainLayout";
import { TextInput, PrimaryButton } from "../components";
import { useAddProduct } from "../hooks/mutations/Product.mutations";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    specification: "",
    function: "",
    utility: "",
    commodity: "",
  });
  const navigate = useNavigate();
  const addProduct = useAddProduct();

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.type === "file" ? e.target.files : e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    const formData = new FormData();
    formData.append("name", form?.name);
    formData.append("price", parseInt(form?.price));
    formData.append("stock", parseInt(form?.stock));
    formData.append("specification", form?.specification);
    formData.append("function", form?.function);
    formData.append("utility", form?.utility);
    formData.append("commodity", form?.commodity);
    formData.append("slug", "random");
    formData.append("image", form?.image[0]);

    addProduct.mutate(formData, {
      onError: (e) => console.warn(JSON.stringify(e, null, 2), "Error"),
      onSuccess: () => {
        window.alert("Success");
        navigate("/");
      },
    });
  };

  return (
    <MainLayout className="bg-gray-200">
      <div className="flex justify-center bg-gray-200 mt-5">
        <div className="bg-white p-4 rounded w-9/12 filter drop-shadow-lg">
          <h1 className="mb-5 font-semibold text-xl">Add Product</h1>
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <TextInput
              name="name"
              label="Product Name"
              onChange={onChange}
              value={form?.name}
            />
            <TextInput
              name="price"
              label="Price"
              containerStyle="mt-5"
              value={form?.price}
              type="number"
              onChange={onChange}
            />
            <TextInput
              name="stock"
              label="Stock"
              value={form?.stock}
              containerStyle="mt-5"
              type="number"
              onChange={onChange}
            />
            <div className="mt-5">
              <label className="mr-5" for="commodity">
                Choose a commodity:
              </label>
              <select
                id="commodity"
                name="commodity"
                onChange={onChange}
                value={form?.commodity}
              >
                <optgroup label="Commodity">
                  <option value="perkebunan">choose</option>
                  <option value="perkebunan">Farm</option>
                  <option value="tanaman pangan">Food Crops</option>
                </optgroup>
              </select>
            </div>
            <TextInput
              name="image"
              label="Product Image"
              containerStyle="mt-5"
              type="file"
              onChange={onChange}
            />
            {form?.image ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={URL.createObjectURL(form?.image[0])}
                alt="image"
                className="w-1/2 h-1/2 mt-3"
              />
            ) : null}
            <TextInput
              name="specification"
              label="Specification"
              value={form?.specification}
              containerStyle="mt-5"
              textArea
              rows="4"
              onChange={onChange}
            />
            <TextInput
              name="function"
              label="Functionality"
              value={form?.function}
              containerStyle="mt-5"
              textArea
              rows="4"
              onChange={onChange}
            />
            <TextInput
              name="utility"
              label="Usefulness"
              value={form?.utility}
              containerStyle="mt-5"
              textArea
              rows="4"
              onChange={onChange}
            />
            <div className="flex justify-end">
              <div className="mt-5 md:w-32">
                <PrimaryButton title="Add" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddProduct;
