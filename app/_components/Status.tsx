import { Card } from "@/components/ui/card"
import { Section } from "./Section"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <Card className="flex-[2.75] p-4  flex flex-col gap-2">
                Side Project
            </Card>
            <div className="flex-[1.5] w-full h-full gap-4">
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