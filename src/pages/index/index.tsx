import './index.css'
import Offcut from '../../components/offcut/offcut';
import Intro from '../../components/intro/intro';
import Menu from '../../components/menu/menu'
import Corona from '../../components/corona/corona';
import Cloud from '../../components/menu/cloud';
export default function Index() {
    return <div className="index">
        <Intro />
        <Offcut />
        <Cloud />
        <Corona />
    </div>
}