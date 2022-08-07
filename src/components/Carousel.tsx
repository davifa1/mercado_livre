import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';

interface imagesP {
    id: number;
    imageUrl: string;
  }
  
  const images: imagesP[] =[
    {id: 1, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128208706-ms1-desk.jpg"},
    {id: 2, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128622364-ms7-desk.jpg"},
    {id: 6, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659631493018-home-sliderdesktopwintersales.jpg"},
    {id: 3, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659128285430-ms2-desk.jpg"},
    {id: 4, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659732323842-home-sliderdesktop.jpg"},
    {id: 5, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659731999915-home-sliderdesktop-3.jpg"},
    {id: 5, imageUrl: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1659827154052-ms7.jpg.jpg"},
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