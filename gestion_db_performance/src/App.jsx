import logo from './logo.svg';
import './App.css';
import ConnectionForm from './components/connection/ConnectionForm';

function App() {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "",
    database: 'gestion_dbperformance'
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  return (
    <>
      <div className="App">

        <div>
          <ConnectionForm />
        </div>
      </div>
    </>
  );
}

export default App;
