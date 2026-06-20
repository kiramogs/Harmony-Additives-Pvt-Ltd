# Harmony Additives Site

Marketing site for Harmony Additives Pvt. Ltd. built with Next.js, including the Addi-Buddy chat assistant.

## Local setup

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Addi-Buddy with Groq

The chatbot now uses Groq's OpenAI-compatible chat completions API from the server route at `src/app/api/chat/route.ts`.

Create a local `.env.local` file with:

```bash
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b
```

`GROQ_MODEL` is optional and defaults to `openai/gpt-oss-120b`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
