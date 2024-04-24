import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {Code, LucideIcon, MessageCircle, Rss, Shuffle, Weight} from "lucide-react"
import Link from "next/link"


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3] w-full">
               <Card className="flex-[2.75] p-4  flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground text-slate-700">Side Fun Projects</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject 
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[1.5] w-full h-full gap-4 ">
                <Card className="p-4 flex-1">
                    Work
                </Card>
                <Card className="p-4 flex-1">
                    Contact me
                </Card>
            </div>
        </Section>
    )
}

const SIDE_PROJECTS = [
    {
        Logo: Code,
        title: "Codeline",
        description: "lorem ipsum ldbfhdjhfjjgdfk"
    },
    {
        Logo: Shuffle,
        title: "PowerNote",
        description: "lorem ipsum ldbfhdjhfjjgdfk"
    },
    {
        Logo: Rss,
        title: "PowerPost",
        description: "lorem ipsum ldbfhdjhfjjgdfk"
    },
    {
        Logo: MessageCircle,
        title: "Chat2Code",
        description: "lorem ipsum ldbfhdjhfjjgdfk"
    },
    {
        Logo: Weight,
        title: "LinkedLeads",
        description: "lorem ipsum ldbfhdjhfjjgdfk"
    },
]

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string
}
const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm text-slate-800">
                <props.Logo/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground text-slate-700">{props.description}</p>

            </div>
        </Link>
    )
}