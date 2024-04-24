import { Section } from "./Section"

export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start mt-4">
        <div className="flex-[2] w-full">
            <h2 className="text-6xl font-bold">David Duranty</h2>
            <h3 className="text-3xl mt-2">Développeur Front-End</h3>
            <p className="text-2xl mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dolorem nemo odio rem minima magni sint optio dolore quis, maxime quas vitae quaerat amet consequuntur reprehenderit est officiis laudantium. Omnis.</p>
        </div>
        <div className="flex-1">
            <img className="rounded-full w-full h-auto" src="https://davidduranty.com/moi.jpg" alt="David Duranty picture" />
        </div>

    </Section>
}