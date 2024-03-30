'use client'

import { Tabs, Tab } from "@nextui-org/react";
import Items from "components/items";
import { useState } from "react";
import Heroes from "./components/heroes";

export default function Page() {
  const darkmode = 'dark text-gray-400 bg-background';
  const darkHover = 'hover:bg-zinc-800';
  const lightmode = 'bg-sky-50';
  const lightHover = 'hover:bg-sky-100';

  const [mode, setMode] = useState('dark');
  const [darkmodeStyles, setDarkmodeStyles] = useState(darkmode);
  const [rowHoverBg, setRowHoverBg] = useState(darkHover);
  
  const changeMode = (mode: React.Key) => {
    mode == 'dark' ? setMode('dark') : setMode('light');
    mode == 'dark' ? setDarkmodeStyles(darkmode) : setDarkmodeStyles(lightmode);
    mode == 'dark' ? setRowHoverBg(darkHover) : setRowHoverBg(lightHover);
  }

  return (
    <main className={`flex w-full min-h-screen p-8 flex-col justify-start ${darkmodeStyles}`}>
      <Tabs defaultSelectedKey='dark' onSelectionChange={key => changeMode(key)} className="absolute right-[35px]">
        <Tab key="dark" title="Dark"></Tab>
        <Tab key="light" title="Light"></Tab>
      </Tabs>

      <Tabs aria-label="Options" className="flex px-[3px]">
        <Tab key="items" title="Items"><Items rowHoverBg={rowHoverBg} /></Tab>
        <Tab key="character" title="Character"><Heroes mode={mode} rowHoverBg={rowHoverBg} /></Tab>
        <Tab key="bosses" title="Bosses"></Tab>
      </Tabs>
    </main>
  );
}