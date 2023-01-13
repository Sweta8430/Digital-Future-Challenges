import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../style.css';
const Footer = () => {
    return (
         <footer>
            <div>
                <i className="bi bi-c-circle text-light"></i>
                &emsp;
                <span style={{ color: `white` }} className="spantext">Chitter 2022</span>
                &emsp;
                <i className="bi bi-facebook text-light"></i>
                &emsp;
                <i className="bi bi-twitter text-light"></i>
                &emsp;
                <i className="bi bi-instagram text-light"></i>
            </div>
        </footer>
    );
};

export default Footer