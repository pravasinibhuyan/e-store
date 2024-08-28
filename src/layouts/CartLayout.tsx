import Footer from '@/components/common/Footer';
import Header from '@/containers/Cart/components/Header';

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
