# Islam AI — Cloudflare starter

This is a deployable starter for an Islamic Q&A website using Cloudflare Workers AI.

## Important
This is not unlimited or guaranteed free. Workers AI has a daily free allowance and charges/limits beyond it. Check current pricing before inviting lots of visitors. AI can make religious mistakes; verify Quran and Hadith references and consult qualified scholars for personal rulings.

## Deploy
1. Create a GitHub repository and upload these files.
2. In Cloudflare, go to Workers & Pages → Create application → Connect to Git.
3. Select this repository and deploy.
4. In Worker Settings → Bindings → Add → Workers AI, set variable name exactly `AI`.
5. Redeploy and open the `workers.dev` URL.

The project uses a Cloudflare Workers AI binding, not a Gemini/OpenAI key. Do not paste its backend code into the minified starter `index.js`; deploy this project as its own repository.
