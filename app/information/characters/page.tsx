import { Card } from "@/components"
import { getCharacters } from "./services"

export default async function Characters() {
    const characters = await fetchCharacters()
    return (
        <>
                {characters.map((characater) => (
                    <Card key={characater.id} data={characater} />
                ))}
        </>
    )
}

async function fetchCharacters() {
    return await getCharacters()
}
