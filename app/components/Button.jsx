import React from "react";
import Link from 'next/link';
import "../styles/style.css";

const Button = ({ link, label }) => {
    return (
        <Link className="btn text-center" href={link}>
            {label}
        </Link>
    );
};

export default Button;
