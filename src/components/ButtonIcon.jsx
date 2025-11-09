const ButtonIcon = ({ icon, name, bg, pos, rotate }) => {
    return (
        <div className="absolute px-1 py-1 md:px-1 md:py-1 lg:px-2 lg:py-2 bg-[#DEDEDE] rounded-full" style={{ ...pos, transform: `rotate(${rotate}deg)` }}>
            <div className="w-full h-full bg-white flex items-center justify-between rounded-full gap-2 px-1 py-1">
                <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: bg }}>
                    <img className="w-2 h-2 md:w-4 md:h-4 object-cover" src={icon} alt={`${name} Icon`} />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[14px]">{name}</p>
            </div>
        </div>
    )
}

export default ButtonIcon;