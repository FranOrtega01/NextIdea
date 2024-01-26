//Tomar todas las noticias y mandarlas a NoticiasList
import React,{ useState, useEffect } from "react"
import { useRoute } from '@react-navigation/native';
import { NoticiasList } from "./NoticiasList";
import { LoadAnimation } from "../Components/LoadAnimation";
import { DB } from '../Database/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

export const NoticiasListContainer = ({scrollRef}) => {

    const route = useRoute()

    const [noticias, setNoticias] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const listaNoticias = []
        const listaPodcasts = []
        setNoticias([])
        setLoad(true)
        const noticiasCollection = collection(DB, 'noticias');
        const q = route.params ? query(noticiasCollection, where('category', '==', route.params)) : query(noticiasCollection)
        getDocs(q)
        .then((data) => {
            //data.docs para obtener los datos
            data.docs.map(prod => { 
                if(prod.data().category === 'noticia') listaNoticias.push({id:prod.id, ...prod.data() })
                if(prod.data().category === 'podcast') listaPodcasts.push({id:prod.id, ...prod.data() })
            })
            setNoticias(listaNoticias)
            setPodcasts(listaPodcasts)
        })
        .catch((error) => console.error(error))
        .finally(()=> setLoad(false))
    }, [route])

    return (
        <>
            {load ? <LoadAnimation /> : <NoticiasList scrollRef={scrollRef} noticias={noticias} podcasts={podcasts}/>}
        </>
    )
}
