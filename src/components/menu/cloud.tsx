import { useEffect } from 'react'
import './cloud.css'
import Menu from "./menu"
import { guid } from "../../tools/createID"



const style = {
    top: "30px"
}

export default function Cloud() {
    return <div className='clouds'>
        <div className="outCloud"></div>
        <Menu style={style} />
    </div>
}
