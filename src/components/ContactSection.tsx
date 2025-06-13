import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })
    const [sent, setSent] = useState(false)
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
        fetch("/assets/contactAnimation.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Error loading animation:", err))
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            alert("Por favor, completá todos los campos.")
            return
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            setSent(true)
            setFormData({ firstName: "", lastName: "", email: "", message: "" })
        }
    }

    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-[90vw] flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold relative inline-block">
                        Contacto
                        <span className="block h-1 w-1/3 bg-blue-400 mt-2 mx-auto rounded"></span>
                    </h2>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                    {/* Formulario */}
                    <div className="bg-[linear-gradient(45deg,_#13203a,_transparent)] shadow-md border border-[#13203a] rounded-xl p-8 w-full max-w-[600px]">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-md font-semibold mb-2">Nombre</label>
                                <CustomInput
                                    placeholder="Nombre"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}

                                />
                            </div>

                            <div>
                                <label className="block text-md font-semibold mb-2">Apellido</label>
                                <CustomInput
                                    placeholder="Apellido"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}

                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-md font-semibold mb-2">Email</label>
                                <CustomInput
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-md font-semibold mb-2">Mensaje</label>
                                <CustomInput
                                    textarea
                                    placeholder="Escribe tu mensaje..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}

                                />
                            </div>

                            <button
                                type="submit"
                                className="sm:col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
                            >
                                Enviar Mensaje
                            </button>

                            {sent && (
                                <p className="sm:col-span-2 text-center text-green-400 transition-all">
                                    ¡Gracias por comunicarte! 🙌
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Info de contacto + animación */}
                    <div className="flex flex-col items-center text-center max-w-md">
                        <p className="text-xl font-semibold mb-2">¿Tienes algún proyecto en mente?</p>
                        <p className="text-xl font-semibold mb-4">¡Contactame!</p>

                        <div className="flex gap-10 mt-10">
                            <a href="https://www.linkedin.com/in/agustinmontes10/" target="_blank">
                                <svg className="animate-bounce" viewBox="0 0 128 128" height={40} width={40}>
                                    <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                                </svg>
                            </a>

                            <a href="https://github.com/agustinmontes10" target="_blank">
                                <svg className="animate-bounce" viewBox="0 0 128 128" height={40} width={40}>
                                    <g fill="#d1d5dc"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                                </svg>
                            </a>

                            <a href="mailto:montesagustin99@gmail.com">
                                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg>
                            </a>
                        </div>

                        {animationData && (
                            <div className="w-full max-w-[300px]">
                                <Lottie animationData={animationData} loop={true} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection