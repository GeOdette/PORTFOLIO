
type UnderlineProps = {
    height?: string,
    width?: string,
    color?: string
}

const Underline = ({ height = '3px', width = '50px', color = '#49A078' }: UnderlineProps) => {
    return (
        <div className="underline" style={{ height: height, width: width, backgroundColor: color }}>

        </div>
    )
}

export default Underline
