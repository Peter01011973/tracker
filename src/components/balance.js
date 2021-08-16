
const Balance = ({balance, income, exspense}) => {

    return(
        <div className="balance-container">
            <h3>Your balance</h3>
            <h2>{`$${balance}`}</h2>
            <div className="balance-info">
                <div className="income">
                    <h4>INCOME</h4>
                    <span>{`$${income}`}</span>
                </div>
                <div className="line">       
                </div>
                <div className="expense">
                    <h4>EXPENSE</h4>
                    <span>{`$${exspense}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Balance;