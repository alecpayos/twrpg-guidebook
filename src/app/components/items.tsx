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

import { 
  DamageColumnHeader,
  ArmorColumnHeader,
  ConstitutionColumnHeader,
  StatsGainColumnHeader,
  AffinitiesColumnHeader,
  DexterityColumnHeader,
  BossTargetedColumnHeader,
  DefenseColumnHeader,
  SurvivalColumnHeader
} from "components/items-table-headers";

import {
  DamageRows,
  ArmorRows,
  ConstitutionRows,
  StatsGainRows,
  AffinityRows,
  DexterityRows,
  BossTargetedRows,
  DefenseRows,
  SurvivalRows
} from "components/items-table-rows";

import { useState } from "react";
import { getFilteredItems, itemTabs } from "api/items";
import KeyLogger from "components/keylogger";
import Searchbar from "components/searchbar";

export default function Items({ rowHoverBg }: { rowHoverBg: string }) {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('Weapon');
  const [searchValue, setSearchValue] = useState('');
  const { items, totalPages } = getFilteredItems(page, category, searchValue);

  const changeItemCategory = (event: any) => {
    setPage(1);
    setCategory(event);
  };

  return (
    <>
      <section className="flex flex-col items-start">
        <section className="flex w-full items-end">
          <KeyLogger changeItemCategory={changeItemCategory} onKeyPress={setSearchValue} />
          <Searchbar searchValue={searchValue} />
          <Pagination className="self-end" onChange={setPage} page={page} total={totalPages} initialPage={1} />
        </section>

        <section className="flex w-full justify-between items-end">
          <Tabs items={itemTabs} aria-label="Options" selectedKey={category} onSelectionChange={changeItemCategory} className="my-2">
            {item => <Tab key={item.id} title={item.id}></Tab>}
          </Tabs>
        </section>
      </section>

      <section>
        <Table aria-label="Items table" classNames={{
          tr: rowHoverBg
        }}>
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn><DamageColumnHeader items={items} /></TableColumn>
            <TableColumn><ArmorColumnHeader items={items} /></TableColumn>
            <TableColumn><ConstitutionColumnHeader items={items} /></TableColumn>
            <TableColumn><StatsGainColumnHeader items={items} /></TableColumn>
            <TableColumn><AffinitiesColumnHeader items={items} /></TableColumn>
            <TableColumn><DexterityColumnHeader items={items} /></TableColumn>
            <TableColumn><BossTargetedColumnHeader items={items} /></TableColumn>
            <TableColumn><DefenseColumnHeader items={items} /></TableColumn>
            <TableColumn><SurvivalColumnHeader items={items} /></TableColumn>
          </TableHeader>
          
          <TableBody emptyContent={"No rows to display."} items={items}>
            {item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell><DamageRows item={item} /></TableCell>
                <TableCell><ArmorRows item={item} /></TableCell>
                <TableCell><ConstitutionRows item={item} /></TableCell>
                <TableCell><StatsGainRows item={item} /></TableCell>
                <TableCell><AffinityRows item={item} /></TableCell>
                <TableCell><DexterityRows item={item} /></TableCell>
                <TableCell><BossTargetedRows item={item} /></TableCell>
                <TableCell><DefenseRows item={item} /></TableCell>
                <TableCell><SurvivalRows item={item} /></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  )
}