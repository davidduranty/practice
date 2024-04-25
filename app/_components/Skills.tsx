import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { OpeniaIcon } from "./icons/OpenaiIcon"
import { TailwindIcon } from "./icons/TailwindIcon"

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
            <h2 className="p-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on ...
        </h2>
        <div className="flex gap-8 ">
            <div className="flex max-md:flex-col gap-4">
                <div className="flex  flex-col gap-4 ">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42} className="animate-spin" style={{animationDuration: "10s",}} />
                </div>
                <h3 className=" text-2xl font-bold dark:text-white">React</h3>
                <p className="text-gray-500 dark:text-gray-400 ">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
            </div>
            <div className="flex max-md:flex-col gap-4 ">
                <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-2 flex-1">
                    <OpeniaIcon size={42}  />
                </div>
                <h3 className=" text-2xl font-bold dark:text-white">Ai Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
            </div>
            <div className="flex max-md:flex-col gap-4 p-2">
                <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon size={42}  />
                </div>
                <h3 className=" text-2xl font-bold dark:text-white">Tailwind</h3>
                <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
            </div>
        </div>
        
    </Section>
}