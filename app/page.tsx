"use client";

import { useState } from "react";
import { MemberList } from "@/components/member-list";
import { SlidingTabs } from "@/components/sliding-tabs";
import CorgiShadow from "@/components/corgi-shadow";
import SideText from "@/components/side-text";

const tabs = [
  { value: "man", label: "Management (55)" },
  { value: "dev", label: "Development (38)" },
  { value: "mar", label: "Marketing (62)" },
];

const man_members = [
  { id: "1", name: "Anna Kowalska", status: "Przewodniczący", avatar: "AK" },
  { id: "2", name: "Piotr Nowak", status: "Członek", avatar: "PN" },
  { id: "3", name: "Maria Wiśniewska", status: "Kandydat", avatar: "MW" },
];

const dev_members = [
  { id: "1", name: "Adam Berek", status: "Przewodniczący", avatar: "AK" },
  { id: "2", name: "Michalina Nowacka", status: "Członek", avatar: "PN" },
  { id: "3", name: "Maciej Nawrocki", status: "Kandydat", avatar: "MW" },
  { id: "4", name: "Zuzanna Kwiecińska", status: "Kandydat", avatar: "MW" },
  { id: "5", name: "Adam Berek", status: "Przewodniczący", avatar: "AK" },
  { id: "6", name: "Michalina Nowacka", status: "Członek", avatar: "PN" },
  { id: "7", name: "Maciej Nawrocki", status: "Kandydat", avatar: "MW" },
  { id: "8", name: "Zuzanna Kwiecińska", status: "Kandydat", avatar: "MW" },
  { id: "9", name: "Adam Berek", status: "Przewodniczący", avatar: "AK" },
  { id: "10", name: "Adam Berek", status: "Przewodniczący", avatar: "AK" },
  { id: "12", name: "Michalina Nowacka", status: "Członek", avatar: "PN" },
  { id: "13", name: "Maciej Nawrocki", status: "Kandydat", avatar: "MW" },
  { id: "14", name: "Zuzanna Kwiecińska", status: "Kandydat", avatar: "MW" },
  { id: "15", name: "Adam Berek", status: "Przewodniczący", avatar: "AK" },
  { id: "16", name: "Michalina Nowacka", status: "Członek", avatar: "PN" },
  { id: "17", name: "Maciej Nawrocki", status: "Kandydat", avatar: "MW" },
  { id: "18", name: "Zuzanna Kwiecińska", status: "Kandydat", avatar: "MW" },
];

const mar_members = [
  {
    id: "1",
    name: "Michał Lewandowski",
    status: "Przewodniczący",
    avatar: "AK",
  },
  { id: "2", name: "Artur Zieliński", status: "Członek", avatar: "PN" },
  { id: "3", name: "Paweł Kordek", status: "Kandydat", avatar: "MW" },
  { id: "3", name: "Urszula Nowak", status: "Kandydat", avatar: "MW" },
  { id: "3", name: "Janusz Kowalski", status: "Kandydat", avatar: "MW" },
];

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("man");

  return (
    <>
      <CorgiShadow
        className="pointer-events-none fixed -bottom-20 left-1/2 -z-10 h-[95dvh] w-auto
                   -translate-x-1/2 -ml-[32vw]
                   text-neutral-500 dark:text-slate-800"
      />
      {/* <div
        aria-hidden="true"
        className="pointer-events-none select-none fixed bottom-4 right-0 -z-10
             max-h-dvh overflow-hidden
             [writing-mode:vertical-rl] rotate-180
             whitespace-nowrap font-extrabold uppercase leading-none
             text-[7vw] text-neutral-200 dark:text-slate-800 tracking-tighter"
      >
        Leader board
      </div> */}

      <main className="flex min-h-screen items-start justify-center p-4 md:p-18">
        <div
          aria-hidden="true"
          className="absolute left-16 bottom-8 flex items-center justify-center pointer-events-none z-0"
        />
        <div className="flex w-full max-w-xl flex-col items-center gap-8 z-10">
          <SlidingTabs items={tabs} onValueChange={setSelectedTab} />
          {selectedTab === "man" && <MemberList members={man_members} />}
          {selectedTab === "dev" && <MemberList members={dev_members} />}
          {selectedTab === "mar" && <MemberList members={mar_members} />}
        </div>
      </main>
    </>
  );
}
