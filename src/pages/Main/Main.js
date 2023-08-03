import React, {useState} from "react";
import './Main.scss';
import 'react-notifications-component/dist/theme.css'

const Main = () => {
    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target.result;
            setFileContent(content);
        };

        if (file.type === "text/plain" || file.type === "text/csv") {
            reader.readAsText(file);
        } else {
            console.error("Підтримуються лише файли типів .txt і .csv");
        }
    };

    return (
        <div className={'text-area'}>
            <input type="file" className={'waves-effect waves-light btn'} onChange={handleFileChange} />
            <div id="displayContent">
                <pre>{fileContent}</pre>
            </div>
        </div>
    );
}

export default Main;