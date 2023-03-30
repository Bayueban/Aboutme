import { Drawer, Button, Collapse } from 'antd';
import { useState } from 'react';
import {guid} from '../tools/createID.js'

const listData = [
    {
        name: 'React',
        description: '好用，相比于vue，自由是最难能可贵的。谢谢。'
    },
    {
        name: 'Antd',
        description: '好用的ui库,element什么臭鱼烂虾？'
    },
    {
        name: 'Zustand',
        description: '对于一个现代化的状态管理器要求就是简单。你redux搞那么复杂干嘛？'
    },
    {
        name: 'TypeScript',
        description: '有时候还是要约束自己，但是不约束也不是不行。别惯着别人，也别惯着自己。'
    },
]

export default function TechonlogyList() {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = () => {
    }

    return <div className="techonlogyList">
        <Button type="link" onClick={showDrawer}>
            技术使用
        </Button>
        <Drawer title="此站点中所使用的技术" placement="right" onClose={onClose} open={open}>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                {
                    listData.map(it => (
                        <Collapse.Panel header={it.name} key={guid()}>
                            <p>{it.description}</p>
                        </Collapse.Panel>
                    ))
                }
            </Collapse>
        </Drawer>
    </div>
}