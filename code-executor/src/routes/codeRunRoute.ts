import express, { Request, Response } from "express";
import CodeConverter from "../convertToCode/codeConverter";
import ExecuteCode from "../codeExecute/codeExecuter";

const router = express.Router();

router.post("/run", (req: Request, res: Response) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      res.status(400).send("Invalid credentials");
      return;
    }

    // Convert code to file
    const filepath = CodeConverter(code, language);

    // Execute code inside Docker
    ExecuteCode(filepath, language);

    res.status(200).send("Execution started");
  } catch (e) {
    console.log("Server error", e);
    res.status(500).send("Server error");
  }
});

export default router;
