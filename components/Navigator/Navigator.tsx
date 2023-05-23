import { Router } from "@/models"
import Link from "next/link"

interface Props {
    pathNames: Router[]
}

export default function Navigator({ pathNames }: Props) {
    return (
        <div>
            {pathNames.map((pathName) => (
                <Link href={pathName.path} key={pathName.path}>
                    {pathName.name}
                </Link>
            ))}
        </div>
    )
}
