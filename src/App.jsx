
import { useState } from 'react';

import DefaultState from "./components/DefaultState/DefaultState";
import Lists from "./components/ListButtons/Lists";
import SelectedState from "./components/SelectedState/SelectedState";
import Buttons from './components/Buttons/Buttons';
import MainLayouts from './layouts/MainLayouts';
import Watermark from './components/Watermark/Watermark';
import { Data } from "./data/Data";

export default function App() {
  const [showDefault, setShowDefault] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const [selected, setSelected] = useState(Data[0].name);
  const [defaultValue, setDefaultValue] = useState('Select an item');
  return (
    <div className='bg-neutral-900 text-white h-screen flex flex-col justify-center min-w-[320px] max-w-screen w-full relative'>
      <div className='bg-neutral-900 px-2 flex flex-col justify-center'>
        <MainLayouts className='flex justify-center gap-2 max-h-auto min-h-[401px]'>
          <DefaultState className='max-[360px]:p-0 rounded max-w-[280px] min-w-fit w-full h-auto' showDefault={showDefault} setShowDefault={setShowDefault} defaultValue={defaultValue}>
            <Lists className={`list-none rounded-xl ${showDefault ? 'block' : 'hidden'} border-2 border-neutral-400 max-h-[306.4px] overflow-y-auto my-scrollbar`}>
              {showDefault && Data.map(item => 
                defaultValue === item.name ? 
                  <Buttons className='text-xl border-b p-4 first-of-type:rounded-tl-xl first-of-type:rounded-tr-xl last-of-type:rounded-bl-xl last-of-type:rounded-br-xl last-of-type:border-b-0 select-none flex justify-between' key={item.id}>
                    <div className='brightness-50'>{item.name}</div>
                    <div className='font-bold'>&#10003;</div>
                  </Buttons>
                  : <Buttons className='text-xl border-b p-4 first-of-type:rounded-tl-xl first-of-type:rounded-tr-xl last-of-type:border-b-0 last-of-type:rounded-bl-xl last-of-type:rounded-br-xl select-none cursor-pointer hover:bg-neutral-800 transition-all duration-75' key={item.id} setToggle={setShowDefault} setter={setDefaultValue}>
                    {item.name}</Buttons>)}
            </Lists>
          </DefaultState>
          <SelectedState className='max-[360px]:p-0 rounded max-w-[280px] min-w-fit w-full h-auto' showSelected={showSelected} setShowSelected={setShowSelected} selected={selected}>
            <Lists className={`list-none rounded-xl ${showSelected ? 'block' : 'hidden'} border-2 border-neutral-400 max-h-[306.4px] overflow-y-auto my-scrollbar`}>
              {showSelected && Data.map(item => 
                selected === item.name ? 
                <Buttons className='text-xl border-b p-4 first-of-type:rounded-tl-xl first-of-type:rounded-tr-xl last-of-type:rounded-bl-xl last-of-type:rounded-br-xl last-of-type:border-b-0 select-none flex justify-between' key={item.id}>
                  <div className='brightness-50'>{item.name}</div>
                  <div className='font-bold'>&#10003;</div>
                </Buttons>
                : <Buttons className='text-xl border-b p-4 first-of-type:rounded-tl-xl first-of-type:rounded-tr-xl last-of-type:border-b-0 last-of-type:rounded-bl-xl last-of-type:rounded-br-xl select-none cursor-pointer hover:bg-neutral-800 transition-all duration-75' key={item.id} setToggle={setShowSelected} setter={setSelected}>{item.name}</Buttons>)}
            </Lists>
          </SelectedState>
        </MainLayouts>
      </div>
      <Watermark className="pt-5 text-[14px] text-gray-400 opacity-60 select-none pointer-events-none z-40 text-center absolute bottom-0 left-0 right-0 pb-2"/>
    </div>
  );
}
