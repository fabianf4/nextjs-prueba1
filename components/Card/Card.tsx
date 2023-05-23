import "./Card.css"
import Image from "next/image"

interface CardData {
    name: string
    type?: string
    created: string
    image?: string
}

interface Props {
    data: CardData
}

export default function Card({ data }: Props) {
    return ( 
        <div className="Card">
            <p>name: {data.name}</p>
            <p>Type: {data.type ? data.type : "No type"} </p>
            <p>Created: {data.created}</p>
            {data.image && ( 
                <Image width="100" height="100" src={data.image} alt="image" />
            )}
        </div>
    )
}
