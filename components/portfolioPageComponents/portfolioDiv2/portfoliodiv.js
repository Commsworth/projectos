import './portfoliodiv.scss';

const PortfolioDiv2 = (props) => {

  return (
    <div>
      <div className="portfolio-div2">
        {props.one}
        {props.two}
        {props.three}
        {props.four}
        {props.five}
        {props.six}
      </div>
    </div>
  )
}
export default PortfolioDiv2;