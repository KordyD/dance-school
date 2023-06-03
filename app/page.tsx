import Directions from '@/components/Directions/Directions';
import Header from '@/components/Header/Header';
import MainHeader from '@/components/MainHeader/MainHeader';
import Photos from '@/components/Photos/Photos';

// TODO: fix uniform styling

export default function Home() {
  return (
    <>
      <Header />
      <MainHeader />
      <Directions />
      <Photos />
      {/* Reviews
      Map
      Sign up
      Offers
      Footer */}
    </>
  );
}
