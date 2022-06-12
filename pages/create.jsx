import React from 'react'
import styles from "../styles/Create.module.css";
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
import FullPageLoader from '../utils/fullPageLoader';
import {useStore} from '../client/context';
import {getValue} from '../utils/common';


 const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState([]);
    const [loader, showLoader, hideLoader] = FullPageLoader()
    const [state, dispatch] = useStore();
    const user = getValue(state, ["user"], null)
    const authenticated = getValue(state, ["user", "authenticated"], false)
  
  console.log(user)
    const handleEditorChange = (e) => {
      console.log(
        'Content was updated:',
        e.target.getContent()
      );
      setDesc(e.target.getContent());
    }

    const handleSelect = (e) => {
      const value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setCategory(value);
    };
    console.log(category);
  
    const handleCreate = async () => {
      showLoader()
      try {
        const newPost = {
          title,
          desc,
          userId:user.email,
          category
        };
        await axios.post("http://localhost:3000/api/post", newPost);
        hideLoader()
      } catch (err) {
        console.log(err);
      }
    };
  
  
    return (
      <div className={styles.container}>
        <div className={styles.infoCon}>
        <div className={styles.infTitle}>
        <label className={styles.label}>Title:</label>
        <input placeholder='Write your post title here' className={styles.input} onChange={(e)=> setTitle(e.target.value)}></input>
        </div>
        <select className={styles.select} multiple onChange={handleSelect}>
          choose category
          <option value='Infants'>Infants</option>
          <option value='Children'>Children</option>
          <option value='Adults'>Adults</option>
          <option value='Elderly'>Elderly</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>

        </select>
        <div>
          {authenticated && <button className={styles.Create} onClick={handleCreate}>Create</button>}
          </div>
        </div>
        
        <Editor
          initialValue="<p>Initial content</p>"
          init={{
            height: 500,
            menubar: 'file edit view insert format tools table tc help',
            plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
              image_advtab: true,
              image_caption: true,
              quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
              noneditable_noneditable_class: 'mceNonEditable',
              toolbar_mode: 'sliding',
              spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
              tinycomments_mode: 'embedded',
              content_style: '.mymention{ color: gray; }',
              contextmenu: 'link image imagetools table configurepermanentpen',
              
          }}
          onChange={handleEditorChange}
        />
        {loader}
      </div>
    );
  };
export default Create;