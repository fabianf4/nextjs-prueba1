import Link from "next/link"
import { Routers } from "../models"
import Navigator from "../components/Navigator/Navigator"

export default function page() {
    return (
        <div>
            <h1>Welcome to Rick and Morty app</h1>
            <h2>What do you want to see?</h2>
            <Navigator
                pathNames={[
                    Routers.HOME,
                    Routers.CHARACTERS,
                    Routers.LOCATIONS
                ]}
            />
        </div>
    )
}
