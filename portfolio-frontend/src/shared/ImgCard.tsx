

interface ImageProps {
  img: string;
  height?: string | number | undefined;
  width?: string | number | undefined;

}
const ImgCard = ({ img, height, width }: ImageProps) => {
  return (
    <div className="image-card">
      <img src={img} alt="" style={{
        height: height, width: width
      }} />


    </div>
  )
}

export default ImgCard
