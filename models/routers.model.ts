export const Routers = {
    HOME: {
        path: "/",
        name: "Home"
    },
    CHARACTERS: {
        path: "/information/characters",
        name: "Characters"
    },
    LOCATIONS: {
        path: "/information/locations",
        name: "Locations"
    }
}

export interface Router {
    path: string
    name: string
}
