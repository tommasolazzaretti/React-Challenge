interface TitleProps {
    title: string
}

export default function Title({title}: TitleProps) {
    return (
        <h2>
            {title}
        </h2>
    )
}