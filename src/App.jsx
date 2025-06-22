
import { useState } from 'react';

import DefaultState from "./components/DefaultState/DefaultState";
import DefaultLists from "./components/DefaultLists/DefaultLists";
import SelectedState from "./components/SelectedState/SelectedState";
import Buttons from './components/Buttons/Buttons';
import MainLayouts from './layouts/MainLayouts';
import { Data } from "./data/Data";

export default function App() {
  const [showDefault, setShowDefault] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const [selected, setSelected] = useState(Data[0].name);
  const [defaultValue, setDefaultValue] = useState('Select an item');
  return (
    <div className='bg-stone-700 text-white h-screen flex justify-center items-center min-w-[320px] max-w-screen w-full'>
      <MainLayouts>
        <DefaultState className='bg-zinc-800 p-4 rounded w-40 h-72' showDefault={showDefault} setShowDefault={setShowDefault} defaultValue={defaultValue}>
          <DefaultLists className='list-none bg-gray-700 p-4 rounded'>
            {showDefault && Data.map(item => 
              defaultValue === item.name ? 
                <Buttons className='bg-gray-900' key={item.id}>{item.name}</Buttons>
                : <Buttons key={item.id} setToggle={setShowDefault} setter={setDefaultValue}>{item.name}</Buttons>)}
          </DefaultLists>
        </DefaultState>
        <SelectedState className='bg-zinc-800 p-4 rounded w-40 h-72' showSelected={showSelected} setShowSelected={setShowSelected} selected={selected}>
          <DefaultLists className='list-none bg-gray-700 p-4 rounded'>
            {showSelected && Data.map(item => 
              selected === item.name ? 
              <Buttons className='bg-gray-900' key={item.id}>{item.name}</Buttons>
              : <Buttons key={item.id} setToggle={setShowSelected} setter={setSelected}>{item.name}</Buttons>)}
          </DefaultLists>
        </SelectedState>
      </MainLayouts>
    </div>
  );
}
