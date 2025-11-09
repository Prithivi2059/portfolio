import { contactCards } from "@/constants";
import ButtonIcon from "./ButtonIcon";
import ContactCard from "./ContactCard";

const Contact = () => {
    return (
        <section className="w-full py-8 sm:py-12 bg-red-100">
            <div className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-1">
                <h1 className="h1">Contact</h1>
                <div className="w-full flex gap-8">
                    <div className="flex flex-col gap-4 md:w-1/2">
                        <ButtonIcon name="Contact" icon="/svgs/contact.svg" bg="#E3E3E3" relative="relative" />
                        <h1 className="font-semibold text-base md:text-xl">Get In Touch</h1>
                        <p className="text-gray-custom text-sm">Have a question about me or my work? Feel free to ask!</p>
                        <div className="flex flex-col gap-2">
                            {
                                contactCards.map((card) => (
                                    <ContactCard key={card.id} icon={card.icon} title={card.title} name={card.name} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <form action="" className="flex flex-col gap-2 md:w-1/2">
                            <input className="px-4 py-1 bg-[#F1F1F1]" type="text" name="Name" />
                            <input className="px-4 py-1 bg-[#F1F1F1]" type="text" name="Email" />
                            <textarea className="px-4 py-1 bg-[#F1F1F1]" name="" id=""></textarea>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;