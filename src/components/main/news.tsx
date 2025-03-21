import './style.css'
import { TextComponent } from '../../types/new'

const TextComponant = (props:TextComponent) => {
    return (
        <>
        <div className="main" > 
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="desc">{props.desc}</p>
        {
          props.link.map((item) => (
          <a href={item.link} className="link">{item.text}</a>
          ))
        }
        </div>
        </>
      )
    }
export default TextComponant