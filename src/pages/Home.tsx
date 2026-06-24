import AdvertisementBanner from "../components/AdvertisementBanner";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <AdvertisementBanner />
      <Categories />
    </div>
  );
}
