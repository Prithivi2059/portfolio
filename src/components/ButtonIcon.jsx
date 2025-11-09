import { cn } from "@/lib/utils";
const ButtonIcon = ({ icon, name, bg, pos = {}, rotate, relative }) => {
    const { md = "" } = pos;
    return (
        <div
            className={cn(
                "hidden w-max md:block z-0 px-1 py-1 md:px-1 md:py-1 lg:px-1 lg:py-1 bg-[#DEDEDE] rounded-full",
                md,
                rotate && `rotate-[${rotate}deg]`,
                relative ? "relative" : "absolute"
            )}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <div className="bg-white flex items-center justify-between rounded-full gap-4 px-1 py-0.5">
                <div
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: bg }}
                >
                    <img
                        className="w-2 h-2 md:w-4 md:h-4 object-cover"
                        src={icon}
                        alt={`${name} Icon`}
                    />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[14px]">{name}</p>
            </div>
        </div>
    );
};

export default ButtonIcon;
