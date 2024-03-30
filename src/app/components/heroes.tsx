import Image from 'next/image';
import heroIcons from 'heroIcons';
import heroSkillsIcons from "heroSkillsIcons";
import { getHeroSkills, getHeroes } from '../api/heroes';
import { useRef, useState } from 'react';
import { placeholder } from 'icons';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tabs,
  Tab
} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";

export default function Heroes({ mode, rowHoverBg }: { mode: string, rowHoverBg: string }) {
  const [category, setCategory] = useState('STR');
  const { categorizedHeroes, formattedHeroSpecs } = getHeroes(category);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const selectedHero = useRef<HeroInfoAndSkills>({ hero: {}, skills: [] });

  const moddedModalStyles = mode == 'dark' 
    ? "bg-zinc-800 text-white" 
    : "bg-white text-zinc-900";

  const setHeroDetails = (hero: any) => {
    onOpen();
    selectedHero.current.hero = hero;
    selectedHero.current.skills = getHeroSkills(hero.heroClass);
  };

  const changeItemCategory = (event: any) => {
    setCategory(event);
  };

  return (
    <>
      <section>
        <Tabs aria-label="Options" className="my-2" onSelectionChange={changeItemCategory}>
          <Tab key="STR" title="STR"></Tab>
          <Tab key="AGI" title="AGI"></Tab>
          <Tab key="INT" title="INT"></Tab>
        </Tabs>
      </section>

      <section>
        <Table aria-label="Heroes table" classNames={{
          tr: rowHoverBg
        }}>
          <TableHeader>
            <TableColumn>ICON</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>WEARABLE ITEM TYPES</TableColumn>
            <TableColumn>SPECIALTIES</TableColumn>
          </TableHeader>
          
          <TableBody emptyContent={"No rows to display."} items={categorizedHeroes}>
            {hero =>
              <TableRow key={hero.id} onClick={() => setHeroDetails(hero)}>
                <TableCell>
                  <Image className='min-w-16 max-w-16' src={heroIcons[hero.icon]} alt={`${hero.name} image`} />
                </TableCell>

                <TableCell>
                  <p className="w-max" style={{ color: `#${hero.color}` }}>{hero.heroClass}</p>
                </TableCell>

                <TableCell>
                  <p className='min-w-[200px] max-w-[200px]'>{hero.role}</p>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    {hero.wearable.map((wearable, index) => <p key={index}>{wearable}</p>)}
                  </div>
                </TableCell>
                
                <TableCell>
                  <div className="flex flex-col">
                    {hero.spec.map((spec, index) => {
                      const formattedSpecList = formattedHeroSpecs[hero.name] || [];
                      const formattedSpec = formattedSpecList[index] && formattedSpecList[index].split(' - ')[1];

                      return (
                        <span key={index}>
                          <p style={{ color: `#${hero.color}` }}>{spec}</p>
                          <span className="flex items-center">
                            {formattedSpec && <p className="text-lg relative top-[-2px] me-2">※</p>}
                            <p>{formattedSpec}</p>
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>

        <Modal 
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={motionProps}
          size="5xl"
          placement="top"
          classNames={{
            base: "pt-4 pb-8"
          }}
        >
          <ModalContent className={moddedModalStyles}>
            {() => <HeroDetails selectedHero={selectedHero} />}
          </ModalContent>
        </Modal>
      </section>
    </>
  )
}

const HeroDetails = ({ selectedHero }: { selectedHero: React.MutableRefObject<HeroInfoAndSkills> }) => {
  const {current: { hero, skills }} = selectedHero;
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const handleSelectSkill = (index: number) => setSelectedSkill(skills[index]);
  
  const getTextColor = (index: number) => {
    return index == 1 ? 'text-lime-400' 
      : index > 1 ? 'text-purple-400'
      : 'text-white';
  }
  
  return (
    <>
      <ModalHeader className="flex items-center">
        <section className="flex flex-col items-center me-12">
          <Image className='min-w-16 max-w-16' src={heroIcons[hero.icon]} alt={`${hero.name} image`} />
          <p>{hero.heroClass}</p>
        </section>

        <section className="grid grid-cols-10 items-center">
          {skills.map((skillObj, index) => {

            return (
              <div key={skillObj.id} className="flex flex-col items-center gap-2">
                <Image
                  onClick={() => handleSelectSkill(index)}
                  src={heroSkillsIcons[skillObj.icon] ?? placeholder}
                  alt={`${skillObj.name} image`}
                  className='
                    min-w-12 max-w-12
                    hover:border-4
                    hover:border-yellow-400
                    active:border-yellow-600
                  '
                />
              </div>
            );
          })}
        </section>
      </ModalHeader>

      <ModalBody>
        <section className="flex flex-col">
          <span className="flex items-center">
            <Image className='min-w-16 max-w-16' src={heroSkillsIcons[selectedSkill.icon] ?? placeholder} alt={selectedSkill.name} />
            <p className="ms-4 text-lg w-max font-semibold">{selectedSkill.name}</p>
            <p className="ms-4 text-lg text-yellow-400">{selectedSkill.hotkey}</p>
            <p className="ms-4 text-sm">Proc Co-efficient: {selectedSkill?.proc_rate || 'None'}</p>
          </span>

          <section className="flex flex-col mt-4">
            {selectedSkill.passive && <span className="flex flex-col mt-4">
              <p className="text-lg font-semibold">PASSIVE</p>
              {selectedSkill.passive?.map((passive: string, index: number) => (
                <p key={index} className={getTextColor(index)}>{passive}</p>
              ))}
            </span>}

            {selectedSkill.active && <span className="flex flex-col mt-4">
              <p className="text-lg font-semibold">ACTIVE</p>
              {selectedSkill.active?.map((active: string, index: number) => (
                <p key={index} className={getTextColor(index)}>{active}</p>
              ))}
            </span>}

            {selectedSkill.toggle && <span className="flex flex-col mt-4">
              <p className="text-lg font-semibold">TOGGLE</p>
              {selectedSkill.toggle?.map((toggle: string, index: number) => (
                <p key={index} className={getTextColor(index)}>{toggle}</p>
              ))}
            </span>}
          </section>
        </section>
      </ModalBody>
    </>
  );
}

type HeroInfoAndSkills = {
  hero: any,
  skills: any[]
}

const motionProps = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }
};