import { Address } from "../../types/ViaCep";

type FetchViacepParams = {
  setAddress: (address: Partial<Address>) => void;
  zipCode: string;
};

export const fetchProducts = async () => {
  try {
    const response = await fetch("http://35.173.239.116:3000/products");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchViacep = async ({
  setAddress,
  zipCode,
}: FetchViacepParams) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: Address = await response.json();

    setAddress({
      streetAddress: data.logradouro || "",
      townCity: data.localidade || "",
      province: data.uf || "",
      countryRegion: "Brazil",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
