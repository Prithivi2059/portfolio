const SkillCard = ({ skill }) => {
    const { name, icon } = skill;
    return (
        <div className="bg-white rounded-xl px-6 py-4 flex items-center justify-center flex-col gap-2">
            <img src={icon} alt={name} />
            <h3 className="font-semibold">{name}</h3>
        </div>
    )
}

export default SkillCard;