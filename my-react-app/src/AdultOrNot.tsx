
type GameProps = {
    name: string,
    description: string,
    version: number
}



export default function Game({name,description,version}:GameProps) {
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{version}</p>
        </div>
    )
}

