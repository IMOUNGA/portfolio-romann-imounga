import {Link} from "react-router-dom";

const Cta = () => {
    return (
        <section className="cta">
            <p className="cta-text">Un projet en tête ? <br className="sm:block hidden"/>Construisons quelque chose ensemble !</p>
            <Link to="/contact" className="btn">Contact</Link>
        </section>
    );
};

export default Cta;
