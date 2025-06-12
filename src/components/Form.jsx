import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "./Div";

const Form = () => {
    const [userInput, setUserInput] = useState({});
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        send(
            "service_j99m6no",
            "template_rw86dsu",
            userInput,
            "ohsnrgxXe6zuFMQV4"
        )
            .then(() => {
                toast.success("✅ Message sent successfully!");
                document.getElementById("queryForm").reset();
                setUserInput({});
            })
            .catch(() => {
                toast.error("❌ Failed to send message. Please try again.");
            })
            .finally(() => setLoading(false));
    };

    const onChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    return (
        <Div className="relative max-w-[1200px] mx-auto px-4">
            <ToastContainer />

            {/* LOADER OVERLAY */}
            {loading && (
                <div className="absolute inset-0 bg-white/60 flex justify-center items-center z-10">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
            )}

            <form
                id="queryForm"
                className={`flex flex-col gap-8 ${loading ? "pointer-events-none opacity-60" : ""}`}
                onSubmit={formSubmitHandler}
            >
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="from_name" className="text-sm font-semibold text-gray-700">
                            Your Name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            name="from_name"
                            type="text"
                            placeholder="Enter your name"
                            className="h-[52px] bg-black px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="from_email" className="text-sm font-semibold text-gray-700">
                            Your Email <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            name="from_email"
                            type="email"
                            placeholder="Enter your email"
                            className="h-[52px] bg-black px-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black"
                            required
                            autoComplete="off"
                            onChange={onChange}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Your Message <sup className="text-red-500">*</sup>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Tell us a bit about your project..."
                        className="h-[150px] bg-black p-4 border border-gray-300 rounded-md outline-none resize-none focus:ring-2 focus:ring-black"
                        required
                        onChange={onChange}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white h-[52px] px-8 rounded-md font-medium hover:bg-gray-800 transition active:scale-95 disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Send "}
                </button>
            </form>
        </Div>
    );
};

export default Form;
