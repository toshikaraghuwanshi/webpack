import "../styles/index.scss";
import Recipes from "./Recipes";
import images from "../images/img3.jpeg";



const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>
                        Hi Toshika
                    </h1>
                </section>
                <img src={images} alt="img" width="250" />
                <Recipes />
            </main>
        </>
    )
}

export default App