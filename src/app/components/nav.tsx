import {Accordion, AccordionItem} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['items', 'heroes', 'bosses']));

  return (
    <NextUIProvider>
      <nav className="w-[176px] h-screen overflow-scroll fixed border-e-[1px]">
        <Accordion selectedKeys={selectedKeys}>
          <AccordionItem key="items" aria-label="accordion-item" title="Items">
            <section id="accordion-items" className="flex flex-col items-start">
              <Link href="/items/armor">Armor</Link>
              <Link href="/items/head">Head</Link>
              <Link href="/items/accessory">Accessory</Link>
              <Link href="/items/weapon">Weapon</Link>
              <Link href="/items/wing">Wing</Link>
              <Link href="/items/misc">Misc</Link>
              <Link href="/items/mat">Mat</Link>
              <Link href="/items/food">Food</Link>
              <Link href="/items/token">Token</Link>
              <Link href="/items/pickaxe">Pickaxe</Link>
              <Link href="/items/icon">Icon</Link>
              <Link href="/items/special">Special</Link>
              <Link href="/items/coin">Coin</Link>
            </section>
          </AccordionItem>

          <AccordionItem key="heroes" aria-label="accordion-item" title="Heroes">
            <section id="accordion-heroes" className="flex flex-col items-start">
              <Link href="/heroes/str">STR</Link>
              <Link href="/heroes/agi">AGI</Link>
              <Link href="/heroes/int">INT</Link>
            </section>
          </AccordionItem>

          <AccordionItem key="bosses" aria-label="accordion-item" title="Bosses">
            <section id="accordion-bosses" className="flex flex-col items-start">
              <Link href="/bosses/endgame">Ends</Link>
              <Link href="/bosses/lategame">Lates</Link>
              <Link href="/bosses/highgame">Highs</Link>
              <Link href="/bosses/midgame">Mids</Link>
              <Link href="/bosses/minor">Minors</Link>
              <Link href="/bosses/field">Fields</Link>
              <Link href="/mobs">Mobs</Link>
            </section>
          </AccordionItem>
        </Accordion>
      </nav>
    </NextUIProvider>
  )
}
