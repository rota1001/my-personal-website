"use client";
import { Description } from "@radix-ui/react-dialog";
import React from "react";

import { FaEnvelope, FaGithub, FaFacebook, FaIdCard, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaIdCard />,
        title: "ID",
        description: "rota1001, Chisheng Chen"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "johnny1001s000602@gmail.com",
    },
    {
        icon: <FaGithub />,
        title: "Github",
        description: "rota1001"
    }
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex-1 flex items-start ord1 md:order-none mb-8 md:mb-0">
                    <ul className="flex flex-col gap-10">
                        <div/>
                        {info.map((item,index) => {
                            return (
                            <li key={index} className="flex items-center gap-6">
                                <div className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded-sm flex items-center justify-center">
                                    <div className="text=[28px]">{item.icon}</div>
                                </div>
                                <div>
                                    <p>{item.title}</p>
                                    <h3>{item.description}</h3>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            
        </motion.section>
    );
};

export default Contact;
