import React, { useEffect } from "react";
import Prism from "prismjs";
// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-coy.min.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";

interface Props {
    code: string
    language?: string
}

function Code({ code, language = 'jsx' }: Props) {

    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    return (
        <pre>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );
}
export default Code;