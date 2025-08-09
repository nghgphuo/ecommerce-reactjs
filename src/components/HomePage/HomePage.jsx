import MyHeader from '@components/Header/Header';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import Banner from '@components/Banner/Banner';
import MyFooter from '@components/Footer/Footer';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import { getProducts } from '@/apis/productsService';
import { useEffect, useState } from 'react';

function HomePage() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10
    };
    getProducts(query).then((res) => {
      setListProducts(res.contents);
    });
  }, []);

  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProduct data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomepage />
      <MyFooter />
    </>
  );
}

export default HomePage;
