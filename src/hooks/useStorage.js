import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref,  uploadBytesResumable } from "firebase/storage";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth";
import { db, storage } from "../firebase";

const useStorage = (file) => {
    const [progress , setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url , setUrl] = useState(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const storageRef = ref(storage, `images/${new Date().getTime()} - ${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            
             await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrl(downloadURL);
                addDoc(collection(db, 'images', user.uid, 'imgs'), {
                    url: downloadURL,
                    createdAt: Timestamp.fromDate(new Date()),
                })
            });
            
        })

    },[file, user]);

    return {progress, url , error}
}

export default useStorage;