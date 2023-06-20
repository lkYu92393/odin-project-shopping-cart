import './App.css';
import AppRoute from "./routes/AppRoute";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header>
                <div>The Arcadia</div>
            </Header>
            <AppRoute />
        </div>
    );
}

export default App;
