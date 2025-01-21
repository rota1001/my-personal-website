import Link from "next/link";

import {FaGithub, FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/rota1001" },
    { icon: <FaDiscord/>, path: "https://discordapp.com/users/769066951494205480" },
    { icon: <FaFacebook/>, path: "https://www.facebook.com/profile.php?id=100075545725322" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/johnny1001s000602/" },
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>;
}

export default Social;