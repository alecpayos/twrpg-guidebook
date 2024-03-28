'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tabs,
  Tab
} from "@nextui-org/react";

import { useState } from "react";
import { getFilteredItems, getItemAttrMatches, getItemMatches } from "../api/items";
import Searchbar from "./searchbar";

export default function Items() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('Weapon');
  const [searchValue, setSearchValue] = useState('');
  const { items, totalPages, statsList } = getFilteredItems(page, category, searchValue);
  
  const itemTabs = [
    { id: 'Weapon' },
    { id: 'Head' },
    { id: 'Armor' },
    { id: 'Accessory' },
    { id: 'Wings' },
    { id: 'Special' },
    { id: 'Mat' },
    { id: 'Misc' },
    { id: 'Token' },
    { id: 'Pickaxe' },
    { id: 'Food' },
    { id: 'Icon' },
    { id: 'Coin' },
  ];
  
  const hideConstitutionHeader = !getItemMatches('constitution', items) ? 'hidden' : '';
  const hideStatsGainsHeader = !getItemMatches('statsgain', items) ? 'hidden' : '';
  const hideAffinitiesHeader = !getItemMatches('affinities', items) ? 'hidden' : '';

  const changeItemCategory = (event: any) => {
    setPage(1);
    setCategory(event);
  };

  return (
    <>
      <section className="flex flex-col items-start">
        <section className="flex w-full items-end">
          <Searchbar searchValue={setSearchValue} />
          <Pagination className="self-end" onChange={setPage} page={page} total={totalPages} initialPage={1} />
        </section>

        <section className="flex w-full justify-between items-end">
          <Tabs items={itemTabs} aria-label="Options" onSelectionChange={changeItemCategory} className="my-2">
            {item => <Tab key={item.id} title={item.id}></Tab>}
          </Tabs>
        </section>
      </section>

      <section className="flex gap-4">
        <Table aria-label="Items table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn><ConstitutionColumnHeader hide={hideConstitutionHeader} /></TableColumn>
            <TableColumn><StatsGainColumnHeader hide={hideStatsGainsHeader} /></TableColumn>
            <TableColumn><AffinitiesColumnHeader hide={hideAffinitiesHeader} /></TableColumn>
          </TableHeader>
          
          <TableBody emptyContent={"No rows to display."} items={items}>
            {item => {
              return (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell><ConstitutionRows item={item} /></TableCell>
                  <TableCell><StatsGainRows item={item} /></TableCell>
                  <TableCell><AffinityRows item={item} /></TableCell>
                </TableRow>
              );
            }}
          </TableBody>
        </Table>

        <Table aria-label="Possible stats table" className="w-fit" classNames={{
          wrapper: "overflow-scroll min-h-[240px] max-h-[725px]"
        }}>
          <TableHeader>
            <TableColumn>POSSIBLE STATS LIST</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {...possibleStatsRows(statsList)}
          </TableBody>
        </Table>
      </section>
    </>
  )
}

const possibleStatsRows = (statsList: string[]) => {
  return statsList.map((stat, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{stat}</TableCell>
      </TableRow>
    );
  });
}

const ConstitutionColumnHeader = ({ hide }: { hide: string }) => {
  return (
    <div className={`flex justify-center ${hide}`}>
      <div className="flex flex-col items-center border-r-1 border-black pe-2">
        <p>REGEN</p>
        <p>HP - MP</p>
      </div>
      <div className="flex flex-col items-center ps-2">
        <p>GAIN</p>
        <p>HP - MP</p>
      </div>
    </div>
  );
}

const StatsGainColumnHeader = ({ hide }: { hide: string }) => {
  return (
    <div className={`flex flex-col items-center ${hide}`}>
      <p>STATS GAIN</p>
      <p>MAIN/ALL STATS | STR/AGI/INT</p>
    </div>
  );
}

const AffinitiesColumnHeader = ({ hide }: { hide: string }) => {
  return (
    <div className={`flex flex-col items-center ${hide}`}>
      <p>AFFINITIES (%)</p>
      <section className="flex">
        <p>ICE</p> /
        <p>WATER</p> /
        <p>LIGHT</p> /
        <p>DARK</p> /
        <p>FLAME</p> /
        <p>EARTH</p>
      </section>
    </div>
  );
}

const StatsGainRows = ({ item }: { item: any }) => {
  const isEmpty = (!item.stats?.hasOwnProperty('mainstat')
    && !item.stats?.hasOwnProperty('allstat')
    && !item.stats?.hasOwnProperty('str')
    && !item.stats?.hasOwnProperty('agi')
    && !item.stats?.hasOwnProperty('int')
  ) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{item.stats?.mainstat || 0}</p> -
      <p>{item.stats?.allstat || 0}</p>
      <p className="mx-2">|</p>
      <p className={item.stats?.str ? 'text-red-400' : ''}>{item.stats?.str || 0}</p> /
      <p className={item.stats?.agi ? 'text-green-400' : ''}>{item.stats?.agi || 0}</p> /
      <p className={item.stats?.int ? 'text-blue-400' : ''}>{item.stats?.int || 0}</p>
    </div>
  );
}

const ConstitutionRows = ({ item }: { item: any }) => {
  const isEmpty = !getItemAttrMatches('constitution', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{item.stats?.hpregen || 0}</p> -
      <p>{item.stats?.mpregen || 0}</p>
      <p className="mx-2">|</p>
      <p>{item.stats?.hp || 0}</p> -
      <p>{item.stats?.mp || 0}</p>
    </div>
  );
}

const AffinityRows = ({ item }: { item: any }) => {
  const dark = Math.round((item.stats?.affinitydarkpercent || 0) * 100);
  const flame = Math.round((item.stats?.affinityflamepercent || 0) * 100);
  const earth = Math.round((item.stats?.affinityearthpercent || 0) * 100);
  let light = Math.round(item.stats?.affinitylightpercent * 100);
  let ice, water;
  ice = water = light = 0;

  if (item.stats?.affinityiwpercent) {
    ice = water = Math.round((item.stats?.affinityiwpercent) * 100);
  } else if (item.stats?.affinitywlpercent) {
    water = light = Math.round((item.stats?.affinitywlpercent) * 100);
  } else if (item.stats?.affinitylightpercent) {
    light = Math.round((item.stats?.affinitylightpercent) * 100);
  }

  const isEmpty = !getItemAttrMatches('affinities', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p className={ice ? 'text-sky-300' : ''}>{ice}</p> /
      <p className={water ? 'text-blue-600' : ''}>{water}</p> /
      <p className={light ? 'text-yellow-500' : ''}>{light}</p> /
      <p className={dark ? 'text-gray-800' : ''}>{dark}</p> /
      <p className={flame ? 'text-red-400' : ''}>{flame}</p> /
      <p className={earth ? 'text-green-400' : ''}>{earth}</p>
    </div>
  );
}