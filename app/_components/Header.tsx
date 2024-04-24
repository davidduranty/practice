import { Button, buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./Section"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { FacebookIcon } from "./icons/FacebookIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">David.com</h1>
                <div className="flex-1" />
                <ul>
                    <Link href="https://github.com/davidduranty" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} >
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/david-duranty/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} >
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.facebook.com/david.duranty.1" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} >
                        <FacebookIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}