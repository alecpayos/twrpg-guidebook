import Image from "next/image";
import heroIcons from "heroIcons";
import { useState } from 'react';
import { getHeroFullDetails, getHeroes } from "../api/heroes";

import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter
} from "@nextui-org/react";

import {
  Build,
  BuildItem,
  ItemColors,
  SpecItemEffectsAndColor
} from "types";

export default function Heroes() {
  const [category, setCategory] = useState('STR');
  const { categorizedHeroes } = getHeroes(category);
  const [selectedHero, setSelectedHero] = useState('Crusader');
  const selectedHeroIcon = `${selectedHero.replace(' ', '')}Icon`;
  const changeSelectedHero = (hero: any) => setSelectedHero(hero);
  const changeItemCategory = (event: any) => setCategory(event);

  const {
    hero,
    builds,
    specializedItems,
  } = getHeroFullDetails(selectedHero);

  return (
    <div className="flex flex-col gap-4">
      <section>
        <Tabs aria-label="Options" className="my-2" onSelectionChange={changeItemCategory}>
          <Tab key="STR" title="STR"></Tab>
          <Tab key="AGI" title="AGI"></Tab>
          <Tab key="INT" title="INT"></Tab>
        </Tabs>
      </section>

      <section>
        <section>
          <Tabs aria-label="Options" items={categorizedHeroes} onSelectionChange={changeSelectedHero}>
            {hero => <Tab key={hero.heroClass} title={hero.heroClass} />}
          </Tabs>
        </section>
        
        <Card className="mt-4 py-4 px-8">
          <CardHeader className="flex flex-col items-start">
            <section className="flex items-center">
              <Image className="min-w-28 max-w-28" src={heroIcons[selectedHeroIcon]} alt={`${selectedHeroIcon} image`} />
              <section className="flex flex-col ms-4">
                <p className="text-lg" style={{ color: `#${hero?.color}` }}>{hero?.name}</p>
                <p className="text-sm">{hero?.role.join(' / ')}</p>
                <p className="text-sm">{hero?.wearable.join(' / ')}</p>
              </section>
            </section>

            <section className="mt-4">
              <SpecializedItems specializedItems={specializedItems} />
            </section>
          </CardHeader>

          <Divider/>
          <CardBody className="grid grid-cols-3 gap-4">
            <ProgressionBuildTypes builds={builds} heroColor={hero?.color || ''} />
          </CardBody>
          <Divider/>

          <CardFooter>
            Test
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

const SpecializedItems = ({ specializedItems }: { specializedItems: SpecItemEffectsAndColor[] | undefined }) => {
  return specializedItems?.map((specItem, index) => {
    const itemName = Object.keys(specItem)[0];

    return (
      <span key={index}>
        <p style={{ color: `#${specItem.color}`}}>{itemName}</p>
        <span className="flex flex-col ms-4">
          {Object.values(specItem[itemName]).map((specEffects, index) => {
            return (
              <span key={index} className="flex">
                <p className="text-lg relative top-[-2px] me-2">※</p>
                <p>{specEffects.split(' - ')[1]}</p>
              </span>
            );
          })}
        </span>
      </span>
    );
  })
}

const ProgressionBuildTypes = ({ builds, heroColor }: { builds: Build[], heroColor: string }) => {
  return builds.map((build) => {
    return (
      <Card key={build.order} className="bg-zinc-800 p-2">
        <CardBody>
          <section className="flex flex-col gap-4">
            <div className="flex">
              <p style={{ color: `#${heroColor}` }}>{build.version}</p>
              <p className="ms-4">{build.type}</p>
            </div>

            {build.description && <div className="text-xs">
              <p><i>Comments:</i></p>
              {build.description?.map((desc, index) => {
                return <p key={index}><i>{index + 1}. {desc}</i></p>;
              })}
            </div>}
            
            <div className="flex flex-col">
              <p className="mb-3 text-xs"><i>Items: Weapon -&gt; Head -&gt; Ring -&gt; Armor -&gt; Wings</i></p>
              <BuildItems items={build.items} colors={build.itemColors || []} />
            </div>
          </section>
        </CardBody>
      </Card>
    );
  });
}

const BuildItems = ({ items, colors }: { items: BuildItem, colors: ItemColors[] }) => {
  return Object.keys(items).map((item, index) => {
    if (!items[item].length) {
      return <p style={{ color: `#${colors[index][item]}` }} key={item}>{item}</p>;
    } else {
      return (
        <span key={item}>
          <p style={{ color: `#${colors[index][item]}` }}>{item}</p>
          {items[item].map((altItem, index) => {
            return (
              <span key={index} className="flex items-center ms-4">
                <p className="alt-color">[{altItem}]</p>
              </span>
            );
          })}
        </span>
      );
    }
  });
}