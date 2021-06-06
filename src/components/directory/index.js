import React,{useEffect,useState} from 'react'
import axios from 'axios'
import MenuItem from '../menu-item/index'
import './styles.css'

const Directory = () => {
    const [directory,setDirectory] = useState([])
    useEffect(()=> {
        axios.get(`https://60bcbc9fb8ab37001759f99f.mockapi.io/directory`).then(res=>{
            const data = res.data
            setDirectory(data);
        })

    });
    
    return (<div className="directory-menu">
        {directory.map((item)=> ( (<MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} linkUrl={item.linkUrl}></MenuItem>)
                        ))}
    </div>)
}

export default Directory;