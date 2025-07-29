import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get("/", (req, res) => {
  res.send("EcoGreen Whitelist API with Supabase 🚀");
});

app.post("/whitelist", async (req, res) => {
  const { fullName, email, walletAddress, telegram, newsletter } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const { data, error } = await supabase
      .from("whitelist")
      .insert([
        {
          full_name: fullName,
          email,
          wallet_address: walletAddress || null,
          telegram: telegram || null,
          newsletter: !!newsletter,
        },
      ])
      .select();

    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    return res.json({ success: true, message: "Successfully joined whitelist", data });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
