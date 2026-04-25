# ConsultPost — TODO

## Completed
- [x] iPhone 393x852px frame with status bar, notch, and home indicator
- [x] Simplified welcome screen — just logo, name, subtitle, CTA
- [x] 5-step onboarding with progress bar (About / Website / Context / Brand / Platforms)
- [x] Voice recording in onboarding (step 3 — Business Context)
- [x] URL scraping in onboarding (step 2 — Website)
- [x] Real LLM chat via Forge API (GPT-4o) — sendMessage procedure
- [x] Voice recording in dashboard chat (Web Speech API + Whisper transcription)
- [x] URL detection in chat input with "Load content" banner
- [x] Generate 3 LinkedIn post variants (Professional / Conversational / Story) with AI
- [x] AI-generated graphics per post (generateImage)
- [x] Hashtags per post (5 relevant hashtags)
- [x] Edit post modal (bottom sheet)
- [x] Download post as .txt file (working)
- [x] Add to Schedule button → marks posts as scheduled
- [x] Schedule sidebar (hamburger menu → slide-in panel from right)
- [x] Hamburger menu (click-based, no hover required — mobile friendly)
- [x] Returning user: chat history saved per session
- [x] New conversation button to reset chat
- [x] Database schema: profiles, chatSessions, posts tables
- [x] tRPC routers: profile, scrapeUrl, transcribeVoice, chat, posts
- [x] 12 vitest tests passing

## Pending / Future
- [ ] Push notifications for scheduled post reminders
- [ ] Instagram / Twitter / Facebook platform support (Pro tier)
- [ ] Post directly to LinkedIn via LinkedIn API
- [ ] Weekly calendar view for scheduled posts
- [ ] Analytics: post performance tracking
- [ ] Team collaboration features

## Bug Fixes (Round 2)
- [x] Fix profile.get returning undefined (must return null when no profile exists)
- [x] Fix microphone — replace Web Speech API with MediaRecorder + Whisper upload
- [x] Fix LLM system prompt — extract from content, ask at most 1 clarifying question
- [x] Fix image generation — ensure generateImage is awaited and imageUrl stored in post

## Microphone Debug (Round 3)
- [x] Test Whisper transcription API directly with a real audio file
- [x] Fix transcribeVoice pipeline end-to-end
- [x] Verify microphone works in browser (Whisper API confirmed working, direct bytes pipeline fixed)

## Missing Screens Fix (Round 4)
- [x] Add welcome step (step 0) to Onboarding with app name, tagline, and Get Started CTA
- [x] Add post-generation completion screen (step 6) after onboarding that shows 3 LinkedIn post variants
- [x] Build PostsGenerated screen with Edit, Download, Add to Schedule per post
- [x] Fix Home routing — logged-in + onboarding complete → dashboard; others → onboarding step 0

## Round 5 Fixes
- [x] Add logout button to dashboard (in header or hamburger menu)
- [x] Restore all hamburger sidebar options (schedule list, new post, settings, profile, logout)

## No-Auth Demo Mode (Round 6)
- [x] Remove all auth guards — all pages accessible without login
- [x] Make all tRPC procedures public (no protectedProcedure)
- [x] Store profile/onboarding answers in localStorage (visitor ID key)
- [x] Inject profile context into every LLM call for personalized posts
- [x] Remove login/logout UI from welcome screen and sidebar
- [x] Skip onboarding if localStorage profile already exists (returning visitor)
- [x] Replace userId with visitorId (UUID from localStorage) in DB schema and all procedures
- [x] Replace logout with Reset/Start Over that clears localStorage and visitorId
- [x] All 11 vitest tests passing with no-auth context

## Knowledge Base (Round 7)
- [x] Store LinkedIn writing style guide as static knowledge base file (server/knowledge/linkedinWritingStyle.ts)
- [x] Inject full onboarding profile (name, title, company, industry, background, platforms) into every LLM system prompt
- [x] Inject writing style guide into every LLM system prompt for post generation and chat
- [x] Keep chat conversation history as session-scoped memory only (not in knowledge base)

## Post Card UX + Chat Fix (Round 8)
- [ ] Fix chat message sending failure (diagnose error from logs)
- [ ] Remove "Download" text button from post card action row
- [ ] Add download button overlaid on post image (download image + text)
- [ ] Replace "Edit" button with AI-refine button (Sparkles/wand icon, clearly AI)
- [ ] AI-refine button opens chat interface pre-loaded with style-guide clarifying questions for that post
- [ ] Clarifying questions based on writing style guide (specificity, voice, opening, proof points)
