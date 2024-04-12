import { placeholder } from "icons";
import Image from "next/image";
import { Item, RecipeIcon } from "../api/types";
import { Dispatch, Key, SetStateAction, useEffect, useState } from "react";
import { statsNameDictionary } from "../api/dictionaries";
import { capitalize } from "../api/helpers";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { ItemFullDetails } from "../api/classes";

export const ShowItemDetailsModal = ({
  isOpen,
  onOpenChange,
  itemId,
}: {
  isOpen: boolean,
  onOpenChange: () => void,
  itemId: Key,
}) => {
  const [id, setItem] = useState(itemId);

  const {
    details,
    itemIcon,
    itemColorGrade,
    recipeIcons,
    usedInIcons,
    droppedBy,
    drops,
  } = new ItemFullDetails(id);

  useEffect(() => {
    setItem(itemId);
  }, [itemId])

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="5xl">
        <ModalContent className="bg-zinc-800 text-white p-4">
          <ModalHeader className="flex items-center gap-4 w-full">
            <Image className="min-w-[128px]" src={itemIcon} alt={details.name} />
            <span className="flex flex-col">
              <p className="text-white text-4xl">{details.name}</p>
              <span className="flex gap-2 font-light">
                {details.rank != 'none' && <p style={{ color: itemColorGrade.color }}>{details.rank}</p>}
                {details.level && <p className="item-level">{`Lvl. ${details.level}`}</p>}
                {itemColorGrade.name && <p style={{ color: itemColorGrade.color }}>{itemColorGrade.name}</p>}
                <p>{details.type}</p>
              </span>
              <p className="text-white font-light">{details.description}</p>
            </span>
          </ModalHeader>

          <ModalBody className="flex flex-row">
              {details.recipe && <ItemRecipeList setItem={setItem} itemDetails={details} recipeIcons={recipeIcons} />}
              <section className="flex flex-col">
                {details.stats && <ItemStatsList itemDetails={details} />}
                {usedInIcons && <ItemIconsForIconNameList setItem={setItem} iconNameList={usedInIcons} propIndex={0} />}
                {droppedBy && <ItemIconsForIconNameList iconNameList={droppedBy} propIndex={1} />}
                {drops && <ItemIconsForIconNameList setItem={setItem} iconNameList={drops} propIndex={2} />}
              </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const ItemStatsList = ({ itemDetails }: { itemDetails: Item }) => {
  const statKeys = itemDetails?.stats && Object.keys(itemDetails.stats);

  const formatStats = (statName: string) => {
    if (itemDetails.stats) {
      const stat = itemDetails.stats[statName];

      return stat as number > 0
        ? stat as number % 1 == 0 ? "+" + stat : ("+" + ((stat as number) * 100).toFixed(1))
        : stat as number % 1 == 0 ? stat : (stat as number * 100).toFixed(1);
    }
  }

  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-xl">
        <p className="text-3xl font-semibold mb-4">Stats</p>
        {statKeys && statKeys.map((statName, index) => {
          const specStatColor = statName != 'spec' ? 'item-active-passive' : 'text-[#5a7da0]';

          if (itemDetails?.stats && Array.isArray(itemDetails?.stats[statName])) {
            const symbol = statName == 'passive' ? '⁘' : statName == 'active' ? '❖' : '※';

            return <span key={index}>
              <p className={`${specStatColor} !text-lg !font-semibold mt-4`}>{capitalize(statName)}</p>
              {(itemDetails?.stats[statName] as string[]).map((stat, index) => {
                return <p key={index} className={specStatColor}>{symbol} {stat}</p>
              })}
            </span>
          } else {
            return (
              <span key={index}>
                <p style={{ color: statsNameDictionary[statName].color }}>
                  ∴ {formatStats(statName)}
                  {statsNameDictionary[statName].name}
                </p>
              </span>
            );
          }
        })}
      </div>
    </section>
  );
}

export const ItemIconsForIconNameList = ({
  iconNameList = [],
  propIndex,
  setItem,
}: {
  iconNameList: RecipeIcon[],
  propIndex: number,
  setItem?: Dispatch<SetStateAction<string | number | bigint>>,
}) => {
  const iconNameProps = ['Used In', 'Dropped By', 'Drops'];
  const changeItem = (event: any) => setItem && setItem(event.target.id);

  return (
    <div className="mt-8">
      <p className="text-3xl font-semibold mb-4">{iconNameProps[propIndex]}</p>
      <div className="grid grid-cols-10">
        {iconNameList.map((item, index) => {
          const depsName = Object.keys(item)[0];

          return (
            iconNameList[index][depsName]
            ? <Image key={index} onClick={changeItem} id={depsName} width={64} height={64} className="min-w-[64px] max-w-[64px]" src={iconNameList[index][depsName]} alt={depsName} />
            : <Image key={index} width={64} height={64} className="min-w-[64px] max-w-[64px]" src={placeholder} alt={depsName} />
          );
        })}
      </div>
    </div>
  );
}

export const ItemRecipeList = ({
  itemDetails,
  recipeIcons,
  setItem,
}: {
  itemDetails: Item,
  recipeIcons: RecipeIcon[],
  setItem: Dispatch<SetStateAction<string | number | bigint>>,
}) => {
  const changeItem = (event: any) => setItem(event.target.id);
  
  return (
    <section className="flex flex-col w-max pe-8">
      <p className="text-3xl font-semibold mb-4">Ingredients</p>

      {itemDetails.recipe && itemDetails.recipe.map((recipe, index) => {
        const recipeName = Object.keys(recipe)[0];
        const recipeImageAlt = `${recipeName} image`;
        const recipeCountAndName = itemDetails.recipe && `x${itemDetails.recipe[index][recipeName]} ${recipeName}`;
        const recipeImageMatch = recipeIcons[index][recipeName] 
          ? <Image onClick={changeItem} id={recipeName} width={96} height={96} className="min-w-[96px] max-w-[96px]" src={recipeIcons[index][recipeName]} alt={recipeImageAlt} /> 
          : <Image className="min-w-[96px] max-w-[96px]" width={96} height={96} src={placeholder} alt="empty image placeholder" />

        return (
          <span key={index} className="flex items-center text-lg">
            {recipeImageMatch}
            <p className="ps-4 w-max">{recipeCountAndName}</p>
          </span>
        );
      })}
    </section>
  );
}