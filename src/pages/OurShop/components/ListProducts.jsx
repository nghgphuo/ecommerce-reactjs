import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import ProductItemLine from '@components/ProductItem/ProductItemLine';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ListProducts() {
  const { containerProduct, sectionListProduct, rotate } = styles;
  const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
    useContext(OurShopContext);

  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div className={isShowGrid && containerProduct}>
              {products.map((item) => (
                <>
                  {isShowGrid ? (
                    <ProductItem
                      key={item.id}
                      src={item.images[0]}
                      prevSrc={item.images[1]}
                      name={item.name}
                      price={item.price}
                      details={item}
                      isHomePage={false}
                    />
                  ) : (
                    <ProductItemLine details={item} />
                  )}
                </>
              ))}
            </div>
            {/* todo */}
            {products.length < total && (
              <div style={{ width: '200px', margin: '50px auto' }}>
                <Button
                  content={
                    isLoadMore ? (
                      <LoadingTextCommon className={rotate} />
                    ) : (
                      'LOADING MORE PRODUCT'
                    )
                  }
                  onClick={handleLoadMore}
                ></Button>
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProducts;
