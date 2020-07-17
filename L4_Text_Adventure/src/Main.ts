import { CustomConsole } from "./CustomConsole";

namespace TextAdventure {

    const customConsole: CustomConsole = CustomConsole.getInstance();

    try {
        customConsole.update("hello");  
    } catch (error) {
        alert(error.message);
    }
}