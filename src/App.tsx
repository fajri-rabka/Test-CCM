import Header from './components/organism/Header';
import Footer from './components/organism/Footer';
import SaveForm from './components/pages/saveForm';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
                <SaveForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
