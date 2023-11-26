import { SelectArrow } from "@/components";

const TranslatorSection: React.FC = () => {
  return (
    <section className="w-full items-center gap-16 border-b border-gray-300 bg-gradient-to-b from-zinc-200  pt-4 font-mono text-sm backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="flex w-full flex-row pb-4">
        <div className="w-1/2 px-4">
          <div className="relative inline-flex">
            <select className=" w-full appearance-none rounded-xl border border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 pr-10 text-zinc-200 backdrop-blur-2xl focus:outline-none dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <option selected>Recognise lang</option>
            </select>
            <SelectArrow />
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="relative inline-flex">
            <select className=" w-full appearance-none rounded-xl border border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 pr-10 text-zinc-200 backdrop-blur-2xl focus:outline-none dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <option selected>Choose langs</option>
            </select>
            <SelectArrow />
          </div>
        </div>
      </div>
      <div className="flex w-full divide-x divide-gray-300 border-t border-gray-300 dark:divide-neutral-800 dark:border-neutral-800">
        <textarea className="flex h-96 w-1/2 resize-none rounded-bl-2xl bg-transparent p-4"></textarea>
        <div className="flex h-96 w-1/2 resize-none rounded-br-2xl bg-transparent"></div>
      </div>
    </section>
  );
};

export default TranslatorSection;
