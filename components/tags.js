import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

export default function Tags() {
    const [tagsValue, setTagsValue] = useState("");
    const [tags, setTags] = useState([]);

        async function handleClick(event) {
        event.preventDefault();
        localStorage.setItem('tags', JSON.stringify(tagsValue));
    }
    
    useEffect(() => {
      const getTags = JSON.parse(localStorage.getItem('tags'));
      if (getTags) {
       setTags(getTags);
      }
    }, []);

return (
    <>
<div className={styles.tagContainer}>
    <label htmlFor="tags"/>
    <input className={styles.input}
    type="text"
    name="tags"
    id="tags"
    placeholder="Tag me!"
    value={tagsValue}
    onChange={(event) => {
    setTagsValue(event.target.value);
    }}
    />
    <button className={styles.saveButton} onClick={handleClick}>SAVE</button>
    {tagsValue && <p className={styles.inputTags}>#{tagsValue}</p>}
    {tags && <p className={styles.savedTags}>#{tags}</p>}
</div>
</>
)
}