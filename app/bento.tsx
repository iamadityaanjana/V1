import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Ico } from "@/components/ui/calendar";
import { Tasks,Audio } from "@/components/ui/task";
import {
  IconClipboardCopy,
  IconSignature,
  IconWaveSine,
} from "@tabler/icons-react";

export function Bento() {
  return (
    <>
    <div className=" m-auto my-20">
    <h1 className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center  mx-auto ">Features</h1>
    <BentoGrid className="max-w-4xl  my-40 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    <div id="Pricing"></div>
    </div></>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-[full] min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );
const items = [
  {
    title: "Extending the use of Ai",
    description: "Natural language to tasks.",
    header: <Tasks />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Why type when you can talk",
    description: "Natural voices to tasks.",
    header: <Audio />,
    className: "md:col-span-1",
    icon: <IconWaveSine className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Connectivity",
    description: "Sync across Google and Apple calendar.",
    header: <Ico />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   className: "md:col-span-2",
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
];
