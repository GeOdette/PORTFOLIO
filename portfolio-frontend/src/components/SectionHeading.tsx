import Underline from "../shared/Underline"

interface SectionHeadingProps{
    title: string
}
const SectionHeading = ({title}: SectionHeadingProps) => {
  return (
    <h1 className="section-heading">
      
          {title}
      
    </h1>
  )
}

export default SectionHeading
