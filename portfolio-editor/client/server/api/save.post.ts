import { writeFile } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = dirname(dirname(dirname(dirname(__dirname))));
const configPath = join(parentDir, "composables", "config.ts");

export default defineEventHandler(async (event) => {
    const data = await readBody(event);

    const configData = `const config = ${JSON.stringify(data)};\n\nexport default config;`;

    writeFile(configPath, configData, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });

    return {
        rootdir: __dirname,
        statusCode: 200,
        body: data,
        configPath: configPath,
    };
});
