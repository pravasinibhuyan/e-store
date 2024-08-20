import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

interface ChildrenInterface {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: ChildrenInterface) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
