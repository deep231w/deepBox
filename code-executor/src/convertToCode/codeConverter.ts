import fs from "fs";
import path from "path";

const FILE_DIR = path.join(__dirname, "../../temp");

if (!fs.existsSync(FILE_DIR)) {
  fs.mkdirSync(FILE_DIR);
}

const CodeConverter = (code: string, language: string) => {
  const file = `temp_${Date.now()}.${language}`;
  const filepath = path.join(FILE_DIR, file);

  fs.writeFileSync(filepath, code);
  return filepath;
};

export default CodeConverter;
