'use client'

import { Tabs, Tab } from "@nextui-org/react";
import Items from "./components/items";
import { useState } from "react";

export default function Page() {
  const darkmode = 'dark text-gray-400 bg-background';
  const lightmode = 'bg-sky-50';
  const [mode, setMode] = useState(darkmode);
  
  const changeMode = (mode: React.Key) => {
    mode == 'dark' ? setMode(darkmode) : setMode(lightmode);
  }

  return (
    <main className={`flex w-full min-h-screen p-8 flex-col justify-start ${mode}`}>
      <Tabs defaultSelectedKey='dark' onSelectionChange={key => changeMode(key)} className="absolute right-8">
        <Tab key="dark" title="Dark"></Tab>
        <Tab key="light" title="Light"></Tab>
      </Tabs>

      <Tabs aria-label="Options" className="flex">
        <Tab key="items" title="Items">
          <Items />
        </Tab>

        <Tab key="character" title="Character">
          
        </Tab>

        <Tab key="bosses" title="Bosses">
          
        </Tab>
      </Tabs>
    </main>
  );
}