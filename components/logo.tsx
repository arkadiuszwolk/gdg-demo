import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4 select-none">
      <Image src={"/gdg-logo.svg"} width={60} height={60} alt="logo" />
      <div className="flex-col hidden lg:flex">
        <span className="font-medium">Google Developer Group</span>
        <span className="text-sm">Politechnika Warszawska</span>
      </div>
    </div>
  );
}
