import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';

interface imagesP {
    id: number;
    imageUrl: string;
  }
  
  const images: imagesP[] =[
    {id: 1, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128208706-ms1-desk.jpg"},
    {id: 2, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128622364-ms7-desk.jpg"},
    {id: 3, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128285430-ms2-desk.jpg"},
  ];
  
  const bearSlideItemData: TBearSlideItemDataList  = images.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem imageUrl={row.imageUrl} />
    };
  });
  
  export function Carousel() {
    return (
        <BearCarousel 
        data={bearSlideItemData}
        staticHeight="300px"
        isEnableLoop
        isEnableAutoPlay
        isEnableNavButton
        isEnablePagination
    />
    );
}