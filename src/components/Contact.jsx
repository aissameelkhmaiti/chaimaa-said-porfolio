import React from "react";
import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
        >
            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-12 text-center">
                    <h2 className="text-[36px] md:text-[64px] 2xl:text-[80px] font-oswald uppercase text-[#111111] leading-tight">
                        Let’s Talk
                    </h2>
                    <p className="mt-4 text-[16px] 2xl:text-[20px] text-black max-w-[900px] mx-auto leading-relaxed">
                        Have questions or a project in mind? Whether you're a recruiter, a developer, or just curious, I'm happy to connect. Let’s collaborate and create something amazing together!
                    </p>
                </Div>
                {/* SECTION HEADING END */}

                <Form />
            </Wrapper>
        </section>
    );
};

export default Contact;
