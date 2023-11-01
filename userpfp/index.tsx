/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Import required modules and components
import { enableStyle } from "@api/Styles";
import { Link } from "@components/Link";
import definePlugin from "@utils/types";

// Importing the style managed fixes on and off switch
import style from "./userpfp.css?managed";

// Define the Vencord plugin
export default definePlugin({
    name: "UserPFP",
    authors: [
    { name: "Yeetov", id: 789872551731527690n },
    { name: "Luna <3", id: 799319081723232267n },
    { name: "wolfieeeeeeee", id: 347096063569559553n },
    { name: "dablulite", id: 582170007505731594n },
    { name: "thororen", id: 848339671629299742n }
    ],
    description: "Custom animated profile pictures without Discord nitro.",
    settingsAboutComponent: () => {
        return (
            <div>
                <h1>About UserPFP</h1>
                <Link href="https://discord.gg/userpfp-1129784704267210844">CLICK HERE FOR YOUR PFP</Link>
                <p>Custom animated profile pictures without Discord nitro.</p>
            </div>
        );
    },

    async start() {
        enableStyle(style);
    }
});
