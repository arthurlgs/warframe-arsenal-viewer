export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>
                  &copy; {currentYear} Tenno Arsenal Database.  
                </p>
                <p>
                    Data provided by the warframestat.us community API. This application is not affiliated with Digital Extremes.
                </p>
            </div>
        </footer>
    )
}