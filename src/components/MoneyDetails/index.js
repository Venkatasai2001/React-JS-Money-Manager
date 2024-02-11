// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="account-details-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="bal-img"
        />
        <div>
          <p className="your-balance-title">Your Balance</p>
          <p data-testid="balanceAmount" className="amount-css">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="bal-img"
        />
        <div>
          <p className="your-balance-title">Your Income</p>
          <p className="amount-css" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="bal-img"
        />
        <div>
          <p className="your-balance-title">Your Expenses</p>
          <p className="amount-css" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
