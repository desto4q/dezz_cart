type TitleProps = {
    title?: string
    subTitle?: string
}
function CurrTitle({title,subTitle}: TitleProps) {
  return (
    <div className="curr_title">
        <div className="strict_width">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    </div>
  )
}

export default CurrTitle