import { useState } from 'react'
import styles from '../styles/Home.module.css'
import ImagePreview from '../components/preview';
import { NavBack } from '../components/nav';
import { toast } from 'react-toastify';

export default function Upload() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState("");
  
  return (
  <>
  <NavBack/>
    <h1 className={styles.title}>UPLOAD</h1>
    <div className={styles.formContainer}>
      <form className={styles.form}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("file", image);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_UPLOAD_PRESET
        );
        toast('Upload successful!', {
          hideProgressBar: true,
          autoClose: 500,
          type: 'success',
          position: 'top-center',
        });
        const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`;
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });
        const json = await response.json();
        console.log(json);
        setImages([...images, json]);
        setImage(null);
      }}
      >
        <label htmlFor="image"/>
        <input className={styles.input}
          type="file"
          name="image"
          id="image"
          accept="image/png,image/jpeg"
          value={imageValue}
          required
          onChange={(event) => {
            setImageValue(event.target.value);
            setImage(event.target.files[0]);
          }}
        />
         {image && <ImagePreview file={image}/>}
        <button type="submit" className={styles.uploadButton}>UPLOAD</button>
      </form>
      </div>
    </>
  );
}