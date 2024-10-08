import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import axios from 'axios'
// server
// import fetch from 'node-fetch';
// global.fetch = fetch;
import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: 'SJujHcf0gG50yX_XsQ0xXS5Y-sZsjefsTxRxRIYTQtI',
  fetch,
});


// URL = require('url').URL;
const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [images,setImages]=useState([]);
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      try {
        const dataToSend = {prompt}
      const resp = await axios("https://utility-backend-r4iz.onrender.com/get-ai-image",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(dataToSend)
        
      })
     console.log(resp)
      const aiImageUrl=resp.data.aiImage.data[0].asset_url
      console.log(aiImageUrl)
      images.push(aiImageUrl);
      setImages((prev)=>[...prev,aiImageUrl]);
      handleDecals(type, aiImageUrl);
        
      } catch (error) {
        const response = await unsplash.search.getPhotos({
          query: `${prompt}`,
          page: 1,
          perPage: 10,
          orientation: 'portrait',
        });
        setImages(response.response.results);
        const data = response.response.results[0].urls.raw;
        handleDecals(type, data);
      }
      


    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
          <motion.div
            className='absolute z-10 bottom-14 right-0 left-0 w-full flex justify-center items-center flex-wrap gap-4'
          >

            { images[0] &&
              images.map((image,index) => (
                <div className='h-10 w-10 rounded-md bg-black' key={index}>
                  <img src={image.urls?.raw || image} alt="" className='h-10 w-10' onClick={() => handleDecals("full", image.urls?.raw || image)}/>
                  </div>
              ))
            }
          </motion.div>
      
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer