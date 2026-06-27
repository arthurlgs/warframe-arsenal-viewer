interface LoadingProps {
    message?: string;
}

export const Loading = ({ message = "Connecting..." }: LoadingProps) => {
    return (
        <div>
            <div></div>
            <p>{message}</p>
        </div>
    )
}
