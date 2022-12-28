const Footer = () => {
    return (
        <div className="h-[200px] border-[#cb3b8a] border-t-2">
            <div className="flex mt-12">
                <div className="flex flex-col gap-4 basis-1/3 [&>p]:cursor-pointer">
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                </div>
                <div className="flex flex-col gap-4 basis-1/3">
                    <p><a href="https://github.com/Fikriihsan03" target="_blank" rel="noreferrer">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/fikri-ihsan-0776b91b9/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                </div>
                <div className="flex flex-col gap-4 basis-1/3">
                    <p>Home</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
