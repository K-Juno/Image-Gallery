// import styles from '../styles/Home.module.css'
// import { useState } from 'react';

// export default function Tags() {
//   const [tagsValue, setTagsValue] = useState("");
//   const [tags, setTags] = useState([]);

//   return (
//     <>
//     <div className={styles.tagsContainer}>
//       <label htmlFor="tags"/>
//       <input className={styles.input_tags}
//       type="text"
//       name="tags"
//       id="tags"
//       placeholder="Tag me!"
//       value={tagsValue}
//       onChange={(event) => {
//         setTagsValue(event.target.value);
//       }}
//       />
//       <button className={styles.saveButton}>SAVE</button>
//       {tagsValue && <p className={styles.inputTags}>#{tagsValue}</p>}
//     <ul className={styles.tagsList}>
//     {tags.map((tag) => (
//       <li key={tag.id}>
//         {tags && <p className={styles.savedTags}>#{tag}</p>}
//       </li>
//       ))}
//       </ul>
//     </div>
//     </>
//   )
// }