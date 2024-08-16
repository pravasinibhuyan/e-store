import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

interface ChildrenInterface {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: ChildrenInterface) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
