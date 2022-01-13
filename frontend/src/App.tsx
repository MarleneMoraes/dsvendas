import NavBar from 'components/NavBar';
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="textprimary py-3">Dashboard de Vendas</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
            <h5>Taxa de sucesso(%)</h5>
            <BarChart />
          </div>
          
          <div className="col-sm-6">
            <h5>Total de vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="textprimary">Total de vendas</h2>
        </div>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
