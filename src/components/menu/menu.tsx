import './menu.css'
import { guid } from "../../tools/createID"

const menuData = [
    {
        value: "聊点技术？"
    },
    {
        value: "一些思考..."
    },
    {
        value: "讲点故事"
    },
]

type props = {
    style: {
        left?: string,
        right?: string,
        top?: string,
        bottom?: string,
    }
}

export default function Menu(props: props) {
    return <ul className="menu" style={props.style}>
        {menuData.map(it => (
            <li className='menuItem' key={guid()}>{it.value}</li>
        ))}
    </ul>
}