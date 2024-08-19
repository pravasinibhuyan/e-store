import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Box } from '@mui/material';

interface ChildrenInterface {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: ChildrenInterface) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          marginTop: '76px',
          padding: '0 1.5rem',
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
