import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { db } from "../firebase";


const useFirestore = (col) => {
    const [docs, setDocs] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const docRef = collection(db, 'images', user.uid, 'imgs')
        const q = query(docRef, orderBy('createdAt', 'desc'))
    
       const unsub = onSnapshot(q, querySnapshot => {
            let imgs = []
            querySnapshot.forEach(doc => {
                imgs.push({...doc.data(), id: doc.id});
            })
            setDocs(imgs);
        });

        return () => unsub();

    }, [col, user, docs])

    return { docs }
}

export default useFirestore