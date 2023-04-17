import "./App.css";
import logo from "./logo.png";

import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <div class="logo-and-text">
          <img src={logo} alt="Logo" />
          <h1 class="mt-3">Expensory</h1>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
		<br/>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-lg-8">
            <AddExpenseForm />
          </div>       
            <div className="col-lg-4 chart-col">
              <div className="chart-wrapper">
                <ExpenseChart />
              </div>
            </div>
        </div>

        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
