import Header from '@/components/cart/Header';
import Footer from '@/components/common/Footer';

interface ChildrenInterface {
  children: JSX.Element | JSX.Element[];
}

const CartLayout = ({ children }: ChildrenInterface) => {
  return (
    <>
      <Header />
      <main className="main-container ">{children}</main>
      <Footer />
    </>
  );
};

export default CartLayout;
