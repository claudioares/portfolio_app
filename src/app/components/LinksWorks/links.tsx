type LinksProps = {
    work: string
}

export function Links ({work}:LinksProps) {

    return(
        <>
            <div className="cel_link">
                <strong>
                    {work}
                </strong>
            </div>
        </>
    )
}