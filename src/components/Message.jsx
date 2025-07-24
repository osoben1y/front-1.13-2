"use client"
import { useState } from "react"
const Message = () => {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setTimeout(() => {
                setIsSubscribed(false)
                setEmail("")
            }, 3000)
        }
    }
    return (
        <section className="relative overflow-hidden py-4">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="bg-gradient-to-r from-[#5D5DFF] to-[#4b4bff] rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-50 pointer-events-none" />
                    <div className="py-16 px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-white max-w-md text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay in the loop</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Join our newsletter to get top news before anyone else. Get exclusive insights, updates, and special
                                offers delivered straight to your inbox.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your best email…"
                                className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 outline-none border border-white/20 focus:border-white/40 transition-all duration-200 md:min-w-[320px] text-base"
                                required/>
                            <button
                                type="submit"
                                disabled={isSubscribed}
                                className="bg-white text-[#5D5DFF] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
                                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Message
