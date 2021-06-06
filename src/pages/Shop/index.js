import React,{useEffect,useState} from 'react'
import PreviewCollection from "../../components/preview-collection/index";
import axios from 'axios'
const ShopPage = () => {
    const [shopData,setShopData] = useState([]);
    useEffect(()=>{
        axios.get(`https://60bcbc9fb8ab37001759f99f.mockapi.io/shopData`).then(res=>{
            const data = res.data
            setShopData(data);
        },[])

    })
    return <div>
         {shopData.map(({ id, ...otherProps }) => (<PreviewCollection key={id}  {...otherProps}/>))}
    </div>
}

export default ShopPage;
