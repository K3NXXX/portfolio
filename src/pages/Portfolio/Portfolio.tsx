import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import style from "./Portfolio.module.scss"

const Portfolio:React.FC = () => {
    return (  
        <section className={style.root}>
            <Header/>
            <Content/>
        </section>
    );
}
 
export default Portfolio;