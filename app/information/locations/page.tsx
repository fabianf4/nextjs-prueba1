import { Card } from "@/components"
import { getLocations } from "./services"

export default async function Locations() {
    const locations = await fetchLocations()
    return (
        <>
                {locations.map((location) => (
                    <Card key={location.id} data={location} />
                ))}
        </>
    )
}

async function fetchLocations() {
    return await getLocations()
}
