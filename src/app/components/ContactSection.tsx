const ContactSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-[80vw]">
                <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Mensaje</label>
                            <textarea
                                rows={4}
                                className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;