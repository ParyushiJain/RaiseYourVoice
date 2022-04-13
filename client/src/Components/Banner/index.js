import { Link } from "react-router-dom"
export default function Banner(props) {

    return <> 
    <div className="flex m-2 p-2">
    <div className="m-28">
        <h2 className="text-6xl font-heading">{props.content.heading}</h2>
        <p className="m-6">{props.content.desc}</p>
        <Link to={props.content.link} className="bg-primary m-5 p-3 border-2 text-white rounded-xl">{props.content.button}</Link>
    </div>   
    <img src={props.content.img} alt="homepage-illustration"/>
    </div>
    </>
}