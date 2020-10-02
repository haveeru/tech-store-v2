import URL from './URL';

export const flatternProducts = (data) => {
  return data.map((item) => {
    // claudinary
    // let image = item.image.url;
    // local setup no deployment
    let image = (item.image && `${URL}${item.image.url}`) || null;
    return { ...item, image };
  });
};

// helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}

//pagination
export function paginate(products) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({ length: numberOfPages }, () => {
    return products.splice(0, itemsPerPage);
  });
  console.log(newProducts);
  return products;
}
