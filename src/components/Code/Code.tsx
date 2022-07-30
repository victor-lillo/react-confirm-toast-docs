import React, { useEffect } from "react";
import Prism from "prismjs";

// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";

interface Props {
    children: string
    language?: string
}

function Code({ language = 'jsx', children }: Props) {

    useEffect(() => {
        Prism.highlightAll();
    }, [children]);

    return (
        <pre>
            <code
                className={`language-${language}`}
            >
                {children}
            </code>
        </pre>
    );
}
export default Code;