const Price = ({price}) => {
    const { 
        currency_code,
        current_price,
        original_price
     } = price;
    const currencySymbol = <span  dangerouslySetInnerHTML={{__html: currency_code === 'GBP' ? "&pound;" : "&euro;" }}></span>
    return (
        <div className="condensed">
            { original_price && (<span className="line-through mr-2">{currencySymbol}{original_price}</span>)}
            <span className={(original_price && "text-red-700 font-bold")}>{currencySymbol}{current_price}</span>
        </div>
    )
}


export default Price;
