const ContactCard = ({ icon, title, name }) => {
    return (
        <div className="bg-[#E9E9E9]/80 px-4 py-4 flex items-center justify-between rounded-xl">
            <div className="flex gap-4 items-center justify-center">
                <div className="px-0.5 py-0.5 bg-white rounded-sm">
                    <img src={icon} alt={title} />
                </div>
                <div>
                    <h2 className="text-black text-sm">{title}</h2>
                    <p className="text-gray-custom text-[12px] ">{name}</p>
                </div>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img className="w-4 h-4" src="/svgs/upside.svg" alt="Upside SVG" />
            </div>

        </div>
    )
}

export default ContactCard;