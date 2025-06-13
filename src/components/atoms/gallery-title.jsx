import clsx from 'clsx'

const GalleryTitle = ({children, className=""}) => {
    const baseStyle = "text-xl md:text-3xl font-medium"

    return (
        <div className={clsx(baseStyle, className)}>
            {children}
        </div>
    );
};

export default GalleryTitle