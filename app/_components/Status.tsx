import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import {ArrowUpRight, Code, LucideIcon, MessageCircle, Rss, Shuffle, Weight} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3] w-full mr-4">
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
                <p className="text-lg text-muted-foreground text-slate-700">Work</p>
                <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work 
                                key={index}
                                {... work}
                                 />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-3 mt-5">
                    <p className="text-lg text-muted-foreground text-slate-700">Contact me</p>
                    <ContactCard name="David Duranty" image="https://davidduranty.com/moi.jpg" mediumImage="https://tse4.mm.bing.net/th?id=OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa&pid=Api&P=0&h=180" description="25'000"/>
                    <ContactCard name="David Duranty" image="https://davidduranty.com/moi.jpg" mediumImage="https://tse3.mm.bing.net/th?id=OIP.C0KA02FcfjF8XTPWtKzHgQHaHa&pid=Api&P=0&h=180" description="2'000"/>
                </Card>
            </div>
        </Section>
    )
}

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold  p-1">{props.name}</p>
                </div>
                <p className="text-sm text-muted-foreground text-slate-700">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
        </Card>
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Codeline",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: Shuffle,
        title: "PowerNote",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: Rss,
        title: "PowerPost",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: MessageCircle,
        title: "Chat2Code",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: Weight,
        title: "LinkedLeads",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: Weight,
        title: "LinkedLeads",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
    {
        Logo: Weight,
        title: "LinkedLeads",
        description: "lorem ipsum ldbfhdjhfjjgdfk",
        url:"/"
    },
]
const WORKS: WorkProps[] = [
    {
        image:"https://media.licdn.com/dms/image/D4E0BAQFdeOklKnXm9A/company-logo_200_200/0/1704183023679/poleemploi_logo?e=1721865600&v=beta&t=mW31xPJ7t00GWWQwbxDCJ_ojJBcEP8JgNGIuqnRjT2A",
        title: "France Travail",
        role:"Search",
        date: "2024 - Present",
        url: "https://www.francetravail.fr/accueil/",
        freelance: true
    },
    {
        image:"https://media.licdn.com/dms/image/C4E0BAQFnIO6qGmQuvQ/company-logo_100_100/0/1675088575236/wild_code_school_logo?e=1721865600&v=beta&t=ghW6-6w76cZ84T354YKIJ65srVwE-lBHQ5G1jfWsrzI",
        title: "Wild Code School",
        role:"Student",
        date: "2023 - 2024",
        url: "https://www.wildcodeschool.com/fr-fr/",
    },
    {
        image:"https://media.licdn.com/dms/image/C4E0BAQEONeBpaarr0Q/company-logo_100_100/0/1663838423094/bordeaux_mtropole_logo?e=1721865600&v=beta&t=jFNhfxaSmVivEYai2Yr2u-9OspzaoXfDdBfXJwIL8Lk",
        title: "Bordeaux Métropole",
        role:"Emploiement",
        date: "1999 - 2023",
        url: "https://www.bordeaux-metropole.fr/",
    },
]
type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean
}

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string
}
const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm text-slate-800">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground text-slate-700">{props.description}</p>

            </div>
        </Link>
    )
}
const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-2 hover:bg-accent/50 transition-colors p-1 rounded">
             <img src={props.image} alt={props.title} className="w-16 h-16 object-contain rounded-md "/>   
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold  p-1">{props.title}</p>
                    {props.freelance  && <Badge variant="outline">Mission</Badge>}
                </div>
                <p className="text-sm text-muted-foreground text-slate-700">{props.role}</p>
            </div>
            <div className=" p-1 w-60 ">
                <p className="text-sm text-muted-foreground text-slate-400">{props.date}</p>
            </div>
        </Link>
    )
}