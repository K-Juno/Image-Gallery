import Image from 'next/image'
import { useMemo } from 'react'
import styles from '../styles/Home.module.css'

export default function ImagePreview({
  file
}) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);
  return (
    <div>
      <Image src={src} alt="" width="200" height="200" className={styles.images}/>
    </div>
  );
}