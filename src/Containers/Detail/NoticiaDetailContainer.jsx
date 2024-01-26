import React , { useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native'
import { DB } from '../../Database/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'
import { LoadAnimation } from "../../Components/LoadAnimation";
import { NoticiaDetail } from './NoticiaDetail'

export const NoticiaDetailContainer = () => {
    const [noticia, setNoticia] = useState({});
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(true);

    const route = useRoute()
    console.log(route);
    useEffect(() => {
        const productsCollection = collection(DB, 'noticias')
        const refDoc = doc(productsCollection, route.params)
        getDoc(refDoc)
        .then((data) => {
            setNoticia({
                id: data.id,
                ...data.data()
            })
        })
        .catch(() => {
            setError(true)
        })
        .finally(() => setLoad(false) )
    }, [route]);

    return(
        <>
            {load ? 
                <LoadAnimation/>
                : 
            error ?
                <Text>Hubo un error, por favor vuelve a intentarlo.</Text>
                :
            <NoticiaDetail noticia={noticia} />}
        </>
    )
}