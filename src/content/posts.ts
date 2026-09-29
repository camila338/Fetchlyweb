import type { ArticleBlock } from "@/components/article";

export type Post = {
  slug: string;
  title: string;
  /** Doubles as the index-card excerpt and the article standfirst. */
  lead: string;
  /** Search-result title and description, which differ from the on-page copy. */
  seoTitle: string;
  seoDescription: string;
  author: string;
  date: string;
  coverAlt: string;
  cover: { src: string; width: number; height: number };
  blocks: ArticleBlock[];
};

/** Newest first — the /blog grid renders this order as-is. */
export const POSTS: Post[] = [
  {
    slug: "the-value-of-not-knowing",
    seoTitle: "The Value of Not Knowing: How QA Advocates for Users",
    seoDescription:
      "A QA specialist experiences features the way real users will, catching what's confusing instead of just what's broken. Here's why that perspective matters.",
    title: "The Value of Not Knowing: How QA Advocates for Users",
    lead: "A QA specialist experiences features the way real users will, catching what's confusing instead of just what's broken. Here's why that perspective matters.",
    author: "Tália Beltrão",
    date: "2026-09-08",
    coverAlt: "The Value of Not Knowing cover image",
    cover: { src: "/images/blog/the-value-of-not-knowing.webp", width: 996, height: 664 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "Ask a developer if a feature works, and they'll tell you, honestly, yes. Ask whoever defined what the feature should do if it matches what was asked for, and they'll tell you, just as honestly, yes. Ask an actual user if the feature makes sense, though, and you might get a completely different answer. That third question is the one I spend most of my time on, because of where I sit in the process." },
          { p: "Say we're looking at a fairly ordinary feature: a form where a user updates their account details. The developer builds it, and everything checks out. Fields save correctly, validation works, the database updates as expected. Whoever defined the requirement reviews it against the documentation: does the form let someone update their name, email, and password? Yes. Sorted, approved, moving on." },
        ],
      },
      {
        type: "prose",
        heading: "Sitting in the user's seat",
        level: 2,
        items: [
          { p: "Then I open it. Not just to check that the code does what it's meant to, but to actually sit in the seat of someone encountering this thing for the first time, the way a real user eventually will. And that's when a few things start to stand out that nobody else noticed, not because anyone was sloppy, but because from where they were standing, there was no reason to." },
          { p: "The save button, for instance, works perfectly. Click it, and the update goes through. But nothing on the screen changes. No confirmation, no loading state, nothing. The developer knows it worked because they can see it in the database. I don't have that luxury, so I experience exactly what a user would: staring at a screen that looks like nothing happened, wondering if I need to try again." },
          { p: "Or the password field. Reject an entry, and it says: \"Password does not meet policy requirements.\" Fair enough, technically true, but completely useless if you don't already know what the policy is. How many characters? What type? Which symbols? The developer knows because they wrote the rule. I didn't, and neither did the person using the form." },
          { p: "This is the part I'm there for that almost nobody else is. Not because I'm more careful or skilled than the developer, but because I'm usually the first person touching the feature without already knowing how it works. It's a bit of an odd skill when you think about it: the value is in not understanding the thing already, in experiencing it the way someone with zero context would. Which, I reckon, is what makes me the user's advocate before the users have even turned up. I'm arguing their corner at the one point in the process where nobody else really can." },
        ],
      },
      {
        type: "prose",
        heading: "Broken versus confusing",
        level: 2,
        items: [
          { p: "That's also why it helps to draw a line between two very different kinds of problems: something being properly broken, and something being confusing but perfectly functional. A broken feature makes itself known: an error, a crash, something obviously gone wrong. A confusing one doesn't make a peep. The code runs fine. Every functional test passes. The only way you catch it is by actually experiencing it the way the user will, rather than the way you already know it to work." },
        ],
      },
      {
        type: "prose",
        heading: "Bring me in before the code exists",
        level: 2,
        items: [
          { p: "Timing matters here too, more than people probably realise. If I only see this form the week before launch, all I can really do is flag the confirmation message and the password error as fixes to squeeze in later. Useful, sure, but reactive. If I'm in on the requirements before a single line of code exists, I get to ask the more useful question early: what actually happens on screen after someone hits save? What do they see if their password's rejected? Bring me in from the start, and you get a lot more of that, simply because the questions get asked before they're expensive to answer." },
          { p: "None of this is about catching what someone else missed because they are careless. It's a blind spot that exists no matter how good everyone on the team is, because once you know exactly how something works, it takes real effort to un-know it, to set that understanding aside and experience the thing fresh. That's the bit I do: I know how it all works, arguably better than the user ever will, but I deliberately put myself in their shoes. My value, in that very specific sense, comes from seeing the system through the user's eyes even though I already know what's going on behind it." },
        ],
      },
    ],
  },
  {
    slug: "on-calculated-risk",
    seoTitle: "On Calculated Risks: Adopting AI Without the Gamble",
    seoDescription:
      "Standing still cost Stack Overflow and Tailwind. How technology leaders can take on AI as compensated risk, and why understanding decides how far you can push.",
    title: "On Calculated Risks: Adopting AI Without the Gamble",
    lead: "Standing still cost Stack Overflow and Tailwind. How technology leaders can take on AI as compensated risk, and why understanding decides how far you can push.",
    author: "Felipe Dos Anjos",
    date: "2026-08-20",
    coverAlt: "On Calculated Risk cover image",
    cover: { src: "/images/blog/on-calculated-risk.webp", width: 996, height: 664 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "In finance, there's a distinction between compensated and uncompensated risk. Compensated risk is the volatility you accept in exchange for expected returns: you buy a diversified portfolio knowing it will fluctuate, while expecting it to grow over time. Uncompensated risk is volatility without expected return, exposure to factors you're not being paid to bear. The former is the price of playing the game. The latter is just gambling with extra steps." },
          { p: "Technology leadership has its own version of this distinction, though we rarely name it." },
          { p: "When a new platform emerges, a new paradigm shifts, the instinct is often to wait. Let the early adopters find the pitfalls. Let the dust settle. Be prudent. This feels like risk management. Sometimes it is. Most new technologies don't pan out, and the patient operators who ignored the hype often end up ahead. But sometimes the caution itself becomes the uncompensated risk. It's the equivalent of holding a concentrated position in a stock that's been winning for years, assuming the past will continue to predict the future. Kodak held that position in film. Blockbuster held it in retail. The bet isn't that you're right about the technology, the bet is that you'll have time to adapt when you're wrong. When that bet fails, it fails quietly, which makes it dangerous." },
          { p: "The opposite instinct carries its own dangers. When a technology does seem to be panning out, the temptation is to grab it with both hands and run, to move fast and figure it out later, to ship now and understand never. This is the FOMO trade: chasing a stock because it's already up, buying the momentum without understanding the fundamentals. Sometimes it works. More often you end up holding something you don't understand, with an assumed growth you can't verify, with no clear plan for when to get out." },
          { p: "So the question for anyone leading a technology organization in the middle of the most significant shift in how software gets written since the advent of the internet is not whether to adopt AI, but how to adopt it in a way that's actually compensated. How do you take on variance that improves your expected outcomes, rather than variance that just makes things more volatile? How do you take compensated risk?" },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "Steep yourself in early 2023. Stack Overflow has just crossed 100 million monthly visits, the culmination of fifteen years as the canonical answer to every programming question. Tailwind CSS is approaching $2 million in annual revenue, growing into an eight-person team, its documentation pages the funnel that drives the entire business. Adam Wathan, Tailwind's creator, is writing about how a side project became a multi-million dollar company. If you think it through, you won't be surprised to learn that by late 2025, Stack Overflow's monthly question volume will have fallen below what it was three months after launch, in 2008. Tailwind's revenue will be down 80 percent, despite being more popular than it has ever been." },
          { p: "\"One of the hardest things for me,\" Wathan said on his podcast on January 7, 2026, \"is feeling like a fucking idiot for somehow being able to build this CSS framework that's like, taken over the world and is used by everything and is super popular, but I can't figure out how to have it make enough money so that eight people can work on it... which is like nobody.\"" },
          { p: "As of early 2026, Tailwind usage was at an all-time high. Seventy-five million downloads a month. And yet." },
          { p: "Here's what happened: they thought standing still was the safe option." },
          { p: "Stack Overflow's business was search traffic monetized through job ads and enterprise subscriptions. Tailwind's business was documentation traffic: developers googled \"how to center a div in Tailwind,\" landed on the docs, discovered Tailwind UI's premium components, and maybe bought something. The framework itself was free; the docs were the funnel." },
          { p: "When ChatGPT launched in November 2022, both companies had reason to believe their models would hold. AI would hallucinate, developers would learn to distrust it, the old patterns of searching and reading documentation would persist. The risk they didn't price in was that AI would be good enough. It was." },
          { p: "Wathan wrote on GitHub on January 7, 2026, responding to a community pull request, \"The reality is that 75% of the people on our engineering team lost their jobs here yesterday because of the brutal impact AI has had on our business. Traffic to our docs is down about 40% from early 2023 despite Tailwind being more popular than ever. The docs are the only way people find out about our commercial products, and without customers we can't afford to maintain the framework.\"" },
          { p: "In an episode of his podcast titled \"We had six months left,\" Wathan described the slow decline as a \"boiling the frog situation.\" Revenue dropped so gradually that he almost didn't notice. He got used to the lower numbers. They felt normal. It wasn't until he did proper forecasting over the holidays that he realized: \"If absolutely nothing changed, then in about six months we would no longer be able to meet payroll obligations.\"" },
          { p: "In both cases, the \"safe\" choice (continuing to operate the business that was working) turned out to be the uncompensated risk. They were exposed to massive downside with no corresponding upside, as the market didn’t reward them for staying the course. The variance was all in one direction." },
          { p: "Maybe Stack Overflow and Tailwind were just unlucky. Maybe their specific business models were unusually exposed to AI disruption, and most companies are fine. Maybe the rate of change will slow, giving everyone time to adapt. Maybe this will all look like a bubble in retrospect." },
          { p: "I don't find any of these scenarios convincing, because the pattern is too consistent: companies that treat AI adoption as optional are getting blindsided. But even if you grant the premise that something must change, there's a second failure mode waiting." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "The opposite of sitting on your hands is flailing." },
          { p: "Call it vibe coding: copy-pasting from ChatGPT without understanding what you're shipping. The output works, mostly. The tests pass, mostly. The feature gets deployed. And then, six months later, someone needs to modify it and they discover that nobody (not the original author, not the AI, not the reviewer who waved it through) actually understood why it worked." },
          { p: "This is the other uncompensated risk. You're adding variance to your outcomes without improving expected value. Security holes appear in places no one thought to check. Architectural decisions compound in directions no one intended. The codebase accumulates what I can only call mystery: sections that function but that no one can explain and that therefore no one can safely change." },
          { p: "The tell is simple: when something breaks, you don't know why, and when it works, you don't know why either. Mystery compounds. Every mystery module is a future incident. Every incident is a future outage. Every outage is a future conversation with your CTO about why the system you shipped is now a liability." },
          { p: "The vibe coder's defense is that they're moving fast. But speed without understanding is just velocity in a random direction. You might be moving toward your goal and you might be moving away from it, and you won't know until you arrive somewhere you didn't intend." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "What separates compensated risk from uncompensated risk in AI-assisted development?" },
          { p: "The craft didn't disappear. It moved." },
          { p: "Consider Rails. Out of the box, Claude produces the kind of Rails that junior developers write after reading too many Medium posts: service objects scattered everywhere, callbacks sprinkled across models, resources that don't map to REST, abstractions introduced before they're needed. It works, technically. But it's not Rails the way DHH intended it. It's not the kind of code that compounds, the kind that becomes easier to maintain over time rather than harder." },
          { p: "The craft is knowing that CRUD and resources are preferred, that Concerns are for composition, that service objects are a smell rather than a pattern, that the framework's conventions exist for a reason and that reason isn't to be circumvented at the first sign of complexity." },
          { p: "But here's the thing: Claude doesn't know this, not reliably and not consistently. If you ask it to write Rails code, it will write Rails code, and that code will run, and you will have learned nothing about whether it's the right Rails code. The model has ingested every Rails tutorial ever written, including the bad ones. Especially the bad ones." },
          { p: "So the craft, now, is encoding that knowledge. Building skills that assert your conventions. Writing hooks that catch drift. Defining what \"good\" looks like in a way that can be verified, not just vibed." },
          { p: "This is where the work went. Not into typing characters; rather, into defining constraints." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "Boris Cherny, the creator of Claude Code at Anthropic, disclosed in late December 2025 that he didn't open an IDE for an entire month. Every line of code he shipped (259 pull requests, 497 commits, 40,000 lines added, 38,000 lines removed) was written by AI." },
          { p: "This is not vibe coding." },
          { p: "Cherny runs multiple Claude instances in parallel, acting as what he calls a \"fleet commander.\" He maintains files that encode project conventions, so that every time the AI does something incorrectly, the correction becomes a rule. He uses test-driven development, writing failing tests that define correct behavior before letting the AI implement solutions. He reviews everything." },
          { p: "\"The future of coding,\" Cherny wrote in June 2025, \"would be less about writing code and more about reviewing it.\"" },
          { p: "The shift is real, but it would be a mistake to take Cherny's workflow as a universal template. He works on a codebase he knows intimately, building tools for other developers, in an environment where rapid iteration matters more than regulatory compliance. His context permits an approach that would be reckless in others." },
          { p: "Consider a payments system processing financial transactions, or a healthcare application handling patient records, or anything touching personal data in a jurisdiction that takes privacy seriously. In these domains, the character-by-character craft of writing code hasn't been displaced. Someone still needs to understand exactly what happens when a transaction fails, exactly how data flows through the system, exactly which edge cases can corrupt state. The stakes are too high and the failure modes too subtle to delegate entirely to generation and review." },
          { p: "But even here, AI changes the nature of the work rather than eliminating it. A developer writing financial transaction code can use AI to review their logic, to suggest edge cases they might have missed, to check their implementation against regulatory requirements. The craft of careful, deliberate coding remains essential; AI becomes a collaborator in that craft rather than a replacement for it." },
          { p: "The point is not that typing is dead, because it isn't. The point is that the relationship between typing and thinking has changed. In some contexts, you can now think in constraints and let AI handle the keystrokes. In others, the keystrokes themselves are the thinking, and AI's role is to augment your attention rather than replace your hands. Knowing which context you're in is itself a form of expertise." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "At Fetchly, we've been thinking about this as a question of leverage." },
          { p: "The old model of software development was labor-intensive in predictable ways. You needed people to write code, test code, review code, deploy code. Each step took time and each step required attention. The constraint was hours." },
          { p: "The new model changes the constraint. AI can generate code faster than humans can review it. The bottleneck shifts from production to verification, from writing to understanding, from \"can we build this\" to \"should we build this, and is what we built actually what we intended.\"" },
          { p: "This means the returns to understanding have gone up, not down. If you can verify faster (because you've encoded your standards into automated checks, because you've built skills that assert your conventions, because your team deeply understands what good looks like) you can leverage AI more aggressively. If you can't verify, you're just generating mystery faster." },
          { p: "Our approach is to invest in the new craft layer." },
          { p: "Start with skills that encode domain expertise. Rails the DHH way, yes, but also: Shopify integrations that follow the platform's actual patterns rather than fighting the Admin API, ERP middleware that respects the boundaries that fifteen years of enterprise software have taught us matter, database schemas that anticipate the queries you'll actually run instead of normalizing for theoretical purity." },
          { p: "These aren't the kinds of insights that appear in tutorials. They come from production incidents and late-night debugging sessions and long conversations with clients who've been burned before. But they can be encoded." },
          { p: "The Svelte team understood this instinctively. When Svelte 5 shipped with its new runes syntax, every AI assistant on the market confidently generated the old reactive patterns, mixing $: declarations with $state() calls in ways that wouldn't even compile. The team could have complained about training data cutoffs. Instead, in November 2025, they released an official MCP server that gives AI assistants access to current documentation and validates generated code against Svelte 5 patterns before it reaches the developer. The craft moved: from writing Svelte to teaching machines how Svelte works now." },
          { p: "The knowledge that makes good code good doesn't disappear when AI writes the code. It becomes the specification that AI writes to." },
          { p: "Then there are hooks that assert correctness: not just tests that check behavior, but architectural constraints that catch drift. If the AI generates a service object in a project where we've decided service objects are a smell, that's a signal, and the system should surface it before a human has to notice." },
          { p: "Plan-first workflows that separate what from how, defining the shape of the solution before generating the implementation. This is where human judgment compounds: in deciding what to build, not in typing the characters that build it." },
          { p: "And review as core competency, where the code is generated and the understanding is verified. This is the work now: reading with intention, catching the subtle wrongness that passes all the tests but violates the invariants you haven't made explicit yet." },
          { p: "And yes, in domains where the stakes demand it, we still write code character by character. The difference is that we make that choice deliberately; understanding which parts of the system require that level of attention and which parts can be safely delegated. The judgment about where to apply craft is itself a form of craft." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "Is this approach guaranteed to work? Of course not. There are valid reasons to hesitate." },
          { p: "Maybe the models will plateau, and the current wave of capability is as good as it gets. Maybe the returns to understanding will diminish as AI itself becomes better at verification. Maybe we're overcorrecting, investing too much in the new craft layer when the old one still matters more than we think." },
          { p: "But consider the alternatives." },
          { p: "The sitting-on-hands approach bets that the disruption will slow down, that we'll have time to adapt later, that the things we're good at today will remain valuable tomorrow. Stack Overflow and Tailwind made that bet. The results are not encouraging." },
          { p: "The vibe-coding approach bets that speed is sufficient, that understanding is optional, that you can outrun the consequences of not knowing what you've built. This is the single-stock bet: sometimes it pays off, but usually it doesn't, and when it doesn't the downside is severe. Technical debt that can't be reasoned about, systems that can't be safely modified, teams that have shipped product but haven't built capability." },
          { p: "The Fetchly approach bets that craft still compounds, but at a different layer. That the developers who understand their domain deeply will leverage AI better than those who don't. That encoding expertise is itself a form of expertise. That verification scales with understanding." },
          { p: "This is, we think, a compensated risk. We're taking systematic exposure to a technological shift while maintaining the judgment layer that makes that exposure pay off. We're not betting on any single tool or model. We're betting that deep understanding still matters, and that it matters more now than it used to, because understanding is the constraint on how much leverage you can safely take." },
        ],
      },
      { type: "divider" },
      {
        type: "prose",
        items: [
          { p: "Linus Torvalds published a hobby project in January 2026 called AudioNoise, a learning exercise in digital signal processing that grew out of his guitar pedal experiments. The Python visualizer was generated entirely by AI. \"I cut out the middle-man,\" he wrote in the README, \"and just used Google Antigravity to do the audio sample visualiser.\" The audio processing logic, though, he wrote himself in C." },
          { p: "The Linux kernel still gets the same exacting attention it always has. Torvalds knows exactly where the boundary lies, and the boundary isn't arbitrary. Two factors determine it." },
          { p: "The first is system criticality. The kernel underpins most of the internet's infrastructure; a subtle bug can cascade through millions of systems. A Python visualizer for a hobby project can break and nobody cares. The cost of failure determines how much verification you need, and verification is still the bottleneck." },
          { p: "The second factor is novelty. The kernel is a unique artifact with decades of accumulated decisions that aren't documented anywhere but the code itself. AI can't draw on prior art because there isn't any; the kernel is the prior art. A Python visualizer, by contrast, has thousands of examples to learn from. The problem is well-trodden. AI can pattern-match its way to something that works." },
          { p: "High criticality and high novelty demand full attention. Low criticality and low novelty can be safely delegated. Most systems fall somewhere in between, and the judgment about where each component lands is the work." },
          { p: "This is the same judgment Torvalds applied to Rust in the kernel. In 2021, he was explicitly in the \"wait and see\" camp: interested in the promises, skeptical of the excitement, wanting to see how it worked in practice. By late 2022, the evidence was sufficient; Rust was merged. By December 2025, it was declared a core part of the kernel, no longer experimental. He didn't rush in. He didn't resist forever. He watched, evaluated, and moved when the case was made." },
          { p: "This is not a new kind of judgment. Technology leaders have always faced the question of when to adopt, when to wait, and when to hold the line. What's different now is the pace, and the cost of getting it wrong in either direction. The questions for technology leaders today: do you understand your own systems well enough to know where the boundaries are? Which parts are critical enough that failure is catastrophic? Which parts are novel enough that AI can't pattern-match its way to correctness? Which parts are commodity problems with abundant prior art, where delegation is not just safe but efficient?" },
          { p: "The answers aren't obvious. They require a deep understanding of your own stack, your own competitive position, your own tolerance for different kinds of failure. The work is hard. It's also the only work that matters." },
          { p: "The craft isn't dying, it's shifting." },
        ],
      },
    ],
  },
  {
    slug: "your-teams-hidden-curriculum",
    seoTitle: "Your Team's Hidden Curriculum",
    seoDescription:
      "Every team learns unwritten values from its leader's choices. Here's the weekly ritual Fetchly's design team uses to shape that curriculum on purpose.",
    title: "Your Team's Hidden Curriculum",
    lead: "Every team learns unwritten values from its leader's choices. Here's the weekly ritual Fetchly's design team uses to shape that curriculum on purpose.",
    author: "Tim Huey",
    date: "2026-07-30",
    coverAlt: "Your Team&#x27;s Hidden Curriculum cover image",
    cover: { src: "/images/blog/your-teams-hidden-curriculum.avif", width: 1000, height: 663 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "Your team has a hidden curriculum." },
          { p: "The hidden curriculum hides behind both the choices you make and don’t make as the leader. It hides under your team rituals. It hides within the felt knowledge of whose voice matters on the team, and whose voice doesn’t. When team members don’t feel respected within their team’s hidden curriculum, they’ve likely got one foot out the door, considering other opportunities." },
          { p: "Here, I want to encourage you to be intentional about your team’s hidden curriculum. To make it not hidden. And to tell you about one practice that’s done more for my team in this area than almost anything else I’ve tried." },
        ],
      },
      {
        type: "prose",
        heading: "Hidden Curriculum",
        level: 2,
        items: [
          { p: "In educational fields, \"hidden curriculum\" refers to what students learn implicitly in school. There's the explicit curriculum: the subject matter, the learning goals. And then there's the hidden curriculum: the values and norms that make up the context wherein a student learns." },
          { p: "Each classroom has a hidden curriculum, whether it's acknowledged or not. The same is true of professional teams, although we might think more in terms of \"team culture.\" Each team has a team culture, which carries with it a hidden curriculum; acknowledged or not, it's there. The team feels it (either as motivating or demotivating). The work reflects it." },
          { p: "Back when I was studying education, our professors encouraged us to deeply consider our own biases, our own beliefs and circumstances, and how these might affect the hidden curriculums of our future classrooms. They guided us in how to craft the hidden curriculums of our classrooms intentionally, in other words, how to unhide hiddenness in order to create environments where people felt respected and safe to be themselves. The idea being that in spaces where we feel respected, we do our best work. And we want to be there." },
          { p: "I've taken this same approach in building up the design team here at Fetchly. And I now understand why my professors spent so much time on it, why it's so important to be intentional about crafting and recrafting hidden curriculum. Especially on teams where many people working together have different backgrounds from one another, like the many teams within Fetchly. Here it requires more effort, not less. It requires not ignoring what makes us distinct, but bringing our uniquenesses into light together and listening to one another." },
          { p: "As a note, part of the work of shaping team culture is about establishing and respecting work rules and boundaries. Naturally we don't need to share everything about ourselves in order to feel comfortable; we feel comfortable when what we do share is received with respect." },
        ],
      },
      {
        type: "prose",
        heading: "The Share",
        level: 2,
        items: [
          { p: "It's worth the time to try out a variety of team rituals. And to keep changing it up. Don't just settle for a weekly retro because you've always done it that way. We cut our retro because it had gone stale. I didn't want staleness to be what we relate over. Instead, experiment. Dig for resources. There's a lot out there. Here’s a list of human-invented icebreakers from The Art of Noticing that I rocked for a couple years of meetings, got us smiling. Whatever you do, don't settle for the work being all that matters, or your team's work will reflect that low bar." },
          { p: "All that said, I could talk about a number of rituals that have done a lot for my team's curriculum. For brevity though, I'll highlight just one." },
          { p: "The Share is a half hour long, full team, weekly meeting, where one person shares… anything." },
          { p: "Whatever they want (again, within work rules, which by the way we've landed on, \"No religion, No politics\"). Someone shares whatever they want for a half hour. That’s it. Super simple. They might give a presentation, show a video, hold a discussion, hold your undivided attention as they rate every household item they ever purchased using their own complicated rubric. Who knows?! It's glorious." },
          { p: "I'm gonna go ahead and list some of the Shares we've had over the last couple years. Give you a taster. While these examples might express the personalities of my team, the point here is range. Space. Freedom for your team to be themselves." },
          { p: "Some of my team’s Shares:" },
          {
            list: [
              "I Miss Old Internet",
              "Discovering Electronic Music",
              "Live piano performance",
              "The Paintings of José Pancetti",
              "A collective rating of the foods of Festa Junina",
              "My Trash Journal (see blog cover image)",
              "Top 10 Conspiracy Theories",
              "My Favorite Color",
            ],
          },
        ],
      },
      {
        type: "prose",
        heading: "What's Changed",
        level: 2,
        items: [
          { p: "I’ve been running the Share weekly for almost two years now. My team is not the same (literally, we’ve almost tripled). When new team members join the team, they ramp into our culture more quickly now, seeing that while our work might suggest we belong to a superior species we are indeed strangely human." },
          { p: "When your team is allowed to be strangely human, even fallible, they stop performing competence and start sharpening one another. Vulnerability becomes a bridge to collaboration and skilling up." },
          { p: "Strengths become more visible too, in a way that’s reliable. This opens opportunities for pairings, workshops, specialization, leadership. Yesterday, a designer on my team put together an impressive marketing campaign proposal, which we shared with our marketing agency directly. She’s a designer, not a marketer, but she has a marketing background." },
          { p: "It helps to know your people." },
          { p: "It helps for hard conversations, for performance reviews, even easy conversations! Sometimes what makes a conversation hard is simply not knowing who you're talking to." },
          { p: "The Share is one ritual. It won't be the right one for every team, and it's not the only thing shaping my team's curriculum. It's just the one I can easily point to and say: here, this is what happens when you stop leaving it to chance." },
          { p: "Your hidden curriculum is there. Shape it." },
        ],
      },
    ],
  },
  {
    slug: "what-shopify-plus-merchants-need-from-their-development-team-as-ai-changes-ecommerce",
    seoTitle: "Shopify Plus and AI: What Your Dev Team Needs to Deliver",
    seoDescription:
      "AI is reshaping Shopify Plus storefronts. Here's where AI projects break, and what it takes for a development team to ship features that hold up.",
    title: "Shopify Plus and AI: What Your Dev Team Needs to Deliver",
    lead: "AI is reshaping Shopify Plus storefronts. Here's where AI projects break, and what it takes for a development team to ship features that hold up.",
    author: "Mick Schroers",
    date: "2026-07-17",
    coverAlt: "What Shopify Plus Merchants Need From Their Development Team as AI Changes Ecommerce cover image",
    cover: { src: "/images/blog/what-shopify-plus-merchants-need-from-their-development-team-as-ai-changes-ecommerce.avif", width: 996, height: 664 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "A large number of Shopify Plus merchants pulling ahead right now aren’t necessarily the ones with the biggest budgets or the most aggressive roadmaps. The ones we see really moving the needle are the ones whose development teams are able to leverage and execute with AI and custom development." },
          { p: "That’s a narrower group than many people assume." },
        ],
      },
      {
        type: "prose",
        heading: "The Expectation Gap Is Already Here",
        level: 2,
        items: [
          { p: "Shopify Plus merchants are fielding AI-powered expectations from customers who’ve already experienced them elsewhere. Personalized product recommendations that reflect browsing behavior. Search that understands intent. Dynamic pricing that responds to demand signals in real time." },
          { p: "These aren't experimental features anymore. They're becoming the baseline for what a competitive storefront looks like. The merchants who wait tend to find out the hard way, once a competitor's storefront becomes the new reference point for what customers expect." },
        ],
      },
      {
        type: "prose",
        heading: "The Skills Gap Many Teams Haven’t Admitted To",
        level: 2,
        items: [
          { p: "Building a great Shopify storefront and integrating AI features into one are related problems, but not the same issue." },
          { p: "A team that knows Liquid, understands theme architecture, and can build cleanly against the Storefront API has a strong foundation. That foundation does not automatically prepare them to work with large language models or the evaluation frameworks that keep AI outputs from going sideways in production." },
          { p: "AI integration pulls from a unique body of knowledge, one that many Shopify-focused teams haven’t had reason to build until now." },
          { p: "Merchants who hand AI projects to their existing Shopify team without asking targeted questions may learn about this distinction, months later." },
        ],
      },
      {
        type: "prose",
        heading: "Where Many AI Projects on Shopify Break",
        level: 2,
        items: [
          { p: "The integration layer. Very common." },
          { p: "The idea phase goes fine. The vendor selection goes fine. Somebody demos a promising proof of concept and leadership gets excited. Then the team starts connecting the AI capability to Shopify’s systems (product catalogs, customer data, order history, checkout flows) and the complexity compounds fast." },
          { p: "Shopify's APIs are well-documented and good. But they're built around specific data models and rate limits, and real-time AI features have different latency and throughput demands. Getting a recommendation engine to return relevant results quickly, while staying inside API constraints, requires engineering judgment that goes beyond standard Shopify development." },
          { p: "Add the data pipeline work required to keep AI models current, the infrastructure costs that spike unexpectedly at scale, and the failure modes that only appear under production load, and you have a project that stalls quietly rather than failing loudly." },
        ],
      },
      {
        type: "prose",
        heading: "AI Features Need Product Thinking Before Implementation",
        level: 2,
        items: [
          { p: "The teams that ship AI features cleanly start with a clear brief." },
          { p: "What should this feature do when it works? What should it do when it doesn’t? Where does the AI output go next, and what happens if that output is wrong? Who reviews edge cases before launch, and what are the guardrails that prevent the model from surfacing something harmful, irrelevant, or embarrassing?" },
          { p: "These are design questions. But on many teams, they don’t get answered until a developer is already mid-implementation and runs into a scenario nobody thought through. At that point, the decision gets made under pressure, without a designer present." },
          { p: "The merchants who handle this well treat AI feature specs with the same rigor they'd apply to a checkout flow redesign. Design defines what the experience should feel like when the AI gets it right and when it gets it wrong, and the guardrails around that. Every behavior is documented before a line of code gets written." },
        ],
      },
      {
        type: "prose",
        heading: "QA Gets Harder With AI",
        level: 3,
        items: [
          { p: "Traditional QA is built on a simple premise: given the same input, the system should produce the same output. Test it, confirm it, ship it." },
          { p: "AI breaks that premise. Language models are non-deterministic. Recommendation engines respond to data that changes continuously. The same customer query can return different results on different days, and some of those results will be wrong in ways that are hard to catch with conventional test coverage (both human and automated)." },
          { p: "Teams that apply their existing QA playbook to AI features tend to miss the failure modes that matter most. Instead they should adapt and build evaluation frameworks that measure AI output against the guardrails their design team defined. That's a different discipline, and it requires a slightly different method, one built in partnership with the team that set the bar for what \"wrong\" looks like in the first place." },
        ],
      },
      {
        type: "prose",
        heading: "Ship, Learn, Iterate. In That Order.",
        level: 2,
        items: [
          { p: "None of this is in tension with moving fast. Rigor and iteration aren't opposites, they just apply to different things. The guardrails get worked out up front, as they’re informed by stakeholder, business, and value needs. What the feature actually does, and how widely it rolls out, is exactly what should keep changing as you learn." },
          { p: "That's what separates the merchants farthest ahead. They scope something small, inside the guardrails already defined, ship it, watch how customers respond, and adjust. Then they do it again." },
          { p: "Waiting for a complete implementation plan in a space moving this fast is its own form of falling behind. The goal isn't to get AI right on the first try. It's to build the organizational muscle to keep improving it, and that muscle only develops through production reps." },
          { p: "Imperfection is expected in scope and rollout, not in the guardrails themselves. Monitoring stays in place so problems are found quickly, and the team treats iteration as the default mode within defined objectives." },
        ],
      },
      {
        type: "prose",
        heading: "What the Right Team Looks Like",
        level: 2,
        items: [
          { p: "The development teams that serve Shopify Plus merchants well in this environment aren't just strong Shopify developers with passing familiarity with AI tools. They're teams where Shopify expertise, AI integration experience, QA, design, and project management coordination exist in the same unit and work together day in and day out." },
          { p: "Shopify depth means knowing the platform's limits. Where custom apps are necessary, where Hydrogen makes sense, where Functions give you flexibility a Liquid-only build won't." },
          { p: "AI integration experience means having shipped these systems before: knowing which models suit which use cases, how to build evaluation into the workflow, and how to keep costs from climbing past the point where the feature makes economic sense." },
          { p: "QA means building evaluation frameworks that test against those guardrails, catching the failure modes that only show up once the feature is live and the inputs stop being predictable." },
          { p: "Design means defining what the feature should do, what \"wrong\" looks like, and the guardrails that protect the customer experience, before implementation starts." },
          { p: "Project management means someone is tracking all of it, connecting the AI work to the broader roadmap, and making sure the team is finishing features." },
          { p: "The merchants getting this right have the right people, working together, with a clear process to absorb the pace of change." },
          { p: "Fetchly is an embedded technical services company. We work with Shopify Plus merchants and mid-size software teams on month-to-month contracts. fetch.ly · inflow@fetch.ly" },
        ],
      },
    ],
  },
  {
    slug: "sign-your-agent-in",
    seoTitle: "Authorize LLM Agent Tools in Rails With Existing Code",
    seoDescription:
      "Your Rails app already knows who can see what. Reuse that authorization for your chatbot's LLM tools instead of building it a second time.",
    title: "Authorize LLM Agent Tools in Rails With Existing Code",
    lead: "Your Rails app already knows who can see what. Reuse that authorization for your chatbot's LLM tools instead of building it a second time.",
    author: "Felipe Dos Anjos",
    date: "2026-06-23",
    coverAlt: "Sign your agent in: authorize LLM tools with the code you already have cover image",
    cover: { src: "/images/blog/sign-your-agent-in.avif", width: 996, height: 664 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "We added a chatbot to Pulse, the app we run our agency on. Of course we did; it's 2026 and everyone is adding a chatbot to everything. Pulse tracks projects, sprints, time logs, and client repos for a few hundred users, which right now means 258 projects and about 43 thousand tracked work items. The chatbot needed tools: list my projects, show this sprint, read that pull request. Standard function calling, nothing exotic." },
          { p: "Then we hit the question that teams building like this hit, usually about three tools in: who's actually making this request, the chatbot or the user?" },
          { p: "Our answer ended up being the user. That one decision settl, because the same code that authorizes every other request can authorize this one, and the alternative is to build your authorization a second time and watch it drift out of sync with the first. The mechanism for reusing the original is a Rails API you already have installed. It's been sitting in your test suite the whole time. Two ideas carry the whole pattern: the agent is just a user, making requests by other means, and the LLM is just another format your controllers respond to, sitting next to format.html and format.json like it was always supposed to be there. Everything else, including every section below, is plumbing between those two sentences, and the whole of it comes to about 750 lines counting the comments." },
        ],
      },
      {
        type: "prose",
        heading: "The trap: a second authorization layer you didn't mean to write",
        level: 2,
        items: [
          { p: "Here's the trap, and lots of teams building tools walk into it. Your app already knows who can see what. Years of authorization fixes live in your controllers, your policies, your scopes. The moment you hand those resources to a model through a separate tool layer, you start re-deriving all of it in a second place: which rows this user can read, which actions they can take, which fields they're allowed to see. That second copy is never quite the first. It's missing the edge cases you patched last fall, and it drifts a little further from the real one every sprint." },
          { p: "We call it the shadow API: a second set of endpoints with the same names as your real ones, minus the years of fixes. Everything below is one long argument for not building it. The two ideas that carry the pattern both reduce to the same move, which is to make the model go through the authorization you already have instead of around it." },
          { p: "But first, the alternatives, because we tried to like them." },
        ],
      },
      {
        type: "prose",
        heading: "The paths we didn't take: why the obvious fixes don't escape the trap",
        level: 2,
        items: [
          { p: "The default path is the one the library docs show you. We use RubyLLM and we like it a lot; acts_as_chat persistence alone pays for the dependency. Its tools guide tells you to subclass RubyLLM::Tool and write an execute method, and the security section says this:" },
          { p: "Good advice. Now search that page for the words user, tenant, or permission. Nothing. That's not a knock on RubyLLM, which is an LLM client and has no idea Pundit exists. But it means the obvious implementation looks like this:" },
          { p: "class ListProjects < RubyLLM::Tool description \"Lists the user's projects\" def execute Project.all.map { |p| { id: p.id, name: p.name } } end end" },
          { p: "Project.all. Whose projects? Everyone's projects. To fix it you thread the current user into every tool and re-apply your scoping rules inside every execute. Congratulations: you've just built the shadow API by hand, one execute method at a time." },
          { p: "What about MCP? MCP is great for what it's for: exposing tools to agents you don't control, across a process boundary. The price is that you, a person who wanted to add a chatbot to your app, now operate an OAuth resource server. The authorization spec needed a community rescue by Aaron Parecki, got rewritten in June 2025, still has a documented confused deputy problem, and enterprise identity folks remain unconvinced. All of that machinery exists to answer one question: what is this agent allowed to do on behalf of this user? If the agent is your own chatbot inside your own app, your session already answers that question on every request. Standing up a second auth system to re-derive it is work you get to do twice and desync once." },
          { p: "Third option: have tools call your own REST API over actual HTTP. Warmer! The controllers do the authorizing. But now you need API tokens for an internal caller, the tokens are almost always coarser than a session (\"can read projects\" vs. \"is Felipe\"), and you've added a network hop so your chatbot can talk to the process it's running in." },
          { p: "We wanted the third option without the HTTP and without the tokens." },
        ],
      },
      {
        type: "prose",
        heading: "Idea one: the agent is just a user",
        level: 2,
        items: [
          { p: "Start with the first idea: an agent acting on behalf of a user is that user, making requests by other means. The auth world has precise words here. The user is the principal, the identity on whose authority things happen, and the software doing the asking is the actor. The authorization question your app answers on every request was always about the principal, never about which software asked. The web even named the actor decades ago: HTTP calls the browser a user agent, software that makes requests on behalf of a user. Every request your app has ever served came from an agent acting for a principal. The browser just happened to be a very obedient one, and an LLM is only the newest one." },
          { p: "Rails, meanwhile, has shipped a way to make authenticated, full-stack, in-process requests since before any of us had heard the word \"agent\": ActionDispatch::Integration::Session. It's what your integration tests use, assuming you write them. It runs the entire middleware stack (routing, Warden, strong params, Pundit, your jbuilder views) over an in-process Rack call, with no server or socket involved." },
          { p: "So in Pulse, a tool call is a real request, signed in as the chatting user. A small dispatcher wraps an integration session, mints a short-lived signed token carrying the user's id, and attaches it to every request through the Rack env rather than a header. It also introduces itself honestly, with a User-Agent of Pulse-Chatbot." },
          { p: "Putting the token on the env, not a header, is what makes it safe. A request has two kinds of input: the parts a remote client controls (headers, params, the URL) and the Rack env, which only in-process code can write. Put the token in a header and two bad things follow: every tool that snapshots request data (error trackers, APM, proxy access logs) records a live credential, and because the auth strategy is global, anyone who replays that header against your public app authenticates as the user. Put it on the env instead and both problems vanish. The capture tools don't read arbitrary env keys, and a remote client has no way to set one, so the public boundary can't present the token at all. It is reachable only from inside the process that minted it." },
          { p: "From the controller's point of view, a tool call is the same principal who clicks around the app, arriving through a different user agent that introduces itself honestly in the User-Agent header, because that is literally what it is. current_user is correct. policy_scope filters rows. Strong params reject junk arguments the model hallucinated. The tool cannot leak what the user cannot see, because there is no tool-specific data path to forget the check in." },
          { p: "Who checks that token? Warden, the auth framework already sitting underneath Devise. Warden is a strategy framework at heart, and authenticating from a signed token is just one more strategy: it reads the token off the env slot the dispatcher set, verifies the signature, loads the user, and refuses to serialize anything into the session so the credential can't outlive its request. One unshift in the Devise initializer puts it ahead of the cookie and password strategies. The whole thing is sixty-one lines, most of them comments." },
          { p: "A real request runs your whole stack, and the agent runs it in ways a browser never did. Two things follow, and both fall straight out of the agent being a real request." },
        ],
      },
      {
        type: "prose",
        heading: "What the agent breaks first: the policy check that never ran",
        level: 3,
        items: [
          { p: "Reusing your controllers means inheriting their authorization, which is the whole point. But the agent exercises those endpoints in ways a browser never did: the model will call projects_index with no arguments on its first turn just to see what comes back, where a page only ever lists through the sidebar with a scope already applied. An action that looks correct in the UI but never actually applied a policy has simply never been asked the awkward question before. The agent asks it on turn one." },
          { p: "Which is why one Pundit setting stops being optional the day you do this. Pundit ships two after_actions that raise at response end if an action never consulted a policy:" },
          { p: "# in ApplicationController after_action :verify_authorized, except: :index after_action :verify_policy_scoped, only: :index" },
          { p: "Turn those on and a forgotten scope fails loudly on the next request instead of quietly returning everything. The rule is simple: don't hand the model an endpoint whose policy check isn't guaranteed to run. The cleanest way to guarantee it is to make exposing an action arm its verifier in the same breath, so the two can never drift apart." },
        ],
      },
      {
        type: "prose",
        heading: "The only new code: one signed token doing two jobs",
        level: 3,
        items: [
          { p: "Reusing the request pipeline means inheriting CSRF protection, which will correctly reject in-process POSTs that carry no authenticity token. The escape hatch is the same token that authenticates the request. The dispatcher mints it fresh for every dispatch with Rails' own message_verifier, signs it with secret_key_base, gives it a five-minute expiry, and reads it back off the same env slot to wave the request past CSRF. One token, two consumers: the Warden strategy reads the user out of its payload, and the CSRF check rides the same verification." },
          { p: "Three properties keep it honest. It's signed with your master key, so no one can mint one without it. It expires after five minutes. And because it travels on the env rather than a header, it never reaches a log or an error tracker, and the public boundary can't replay it even if it somehow did leak. It is a bearer credential, but one that lives and dies inside one process." },
          { p: "Together with the Warden strategy, this is the entire amount of novel security code the pattern required. We've written bigger commit messages." },
        ],
      },
      {
        type: "prose",
        heading: "Idea two: the LLM is just another format your app already negotiates",
        level: 2,
        items: [
          { p: "The oldest idea in Rails is that one controller serves many representations of the same resource: respond_to has been negotiating HTML and JSON and XML from the same action since DHH was blogging about REST. Every pattern we surveyed earlier quietly abandons that idea: it puts the model behind a separate tool layer, a separate server, a separate API. We registered a MIME type instead." },
          { p: "# config/initializers/mime_types.rb Mime::Type.register \"application/x-llm\", :llm" },
          { p: "After that one line, the model is just another format the app knows how to negotiate. The dispatcher's Accept: application/x-llm, application/json;q=0.9 is ordinary content negotiation, and the controller answers it the way it answers everything else:" },
          { p: "respond_to do |format| format.html # people with browsers format.json # programs format.llm { render_llm } # models end" },
          { p: "Your app has been multi-audience since the day you added format.json. The LLM is the first new audience to show up in about fifteen years, and it slotted into a twenty-year-old API without that API noticing." },
          { p: "The model gets its own representation rather than eating the JSON because it's an audience with expensive attention. Views answer the question \"what should this audience see\". For this audience, every field is tokens, billed and re-read on every subsequent turn of the conversation. So exposed actions render an *.llm.jbuilder template: a deliberately tight projection, 25 items a page, a pagination envelope the tool description teaches the model to read. The JSON view keeps serving browsers and picking up whatever fields the frontend needs; the LLM view doesn't inherit them. We deliberately do not fall back to .json when an .llm template is missing; boot fails instead. A silent fallback means the model's context inherits whatever a frontend needed last month." },
          { p: "format.llm is a sentence we did not expect to write in 2026, but it's done more for our token bill than any prompt engineering. And it gives token budgeting a home: it's a rendering concern, in the view layer, where projections of a resource have always lived. When the model needs less detail, you edit a jbuilder template. Nobody touches the agent." },
        ],
      },
      {
        type: "prose",
        heading: "A tool is just a declaration over a controller",
        level: 3,
        items: [
          { p: "If the LLM is just a format, a tool is just a pointer to the action that renders it. A tool in Pulse is pure declaration. There are thirty-three of them, and each one is a small file like this:" },
          { p: "module Chatbot module Tools class ProjectsIndex < Chatbot::Tool action ProjectsController, :index summary \"Returns the projects the current user can see. \" \\ \"The response is already scoped to the user.\" param :status, type: :string, desc: \"Restrict by status (proposal, fulfilment, inactive, archived).\" param :page, type: :integer, desc: \"Page number (1-indexed).\" end end end" },
          { p: "If this reads like a mailer, that's deliberate. The controller stays a plain HTTP controller; its only nod to the LLM is an allowlist of the actions and params it's willing to expose:" },
          { p: "class ProjectsController < ApplicationController include ExposesToLlm exposes_to_llm :index, params: %i[status q organization_id page] exposes_to_llm :show end" },
          { p: "A registry walks the tool classes at boot and synthesizes a RubyLLM::Tool subclass for each, pointing at the matching route. The declaration and the controller have to agree, and the registry checks the whole handshake at boot: the action called exposes_to_llm, every param the tool advertises is in the controller's allowlist, a route exists, and the .llm template exists. Any mismatch refuses the boot with a named error. Rename a controller action and the app won't start until the tool file agrees. Without those checks a renamed action would synthesize a tool that 404s on every call, and a missing .llm view would silently feed the model whatever the JSON view emits. Both now cost a red boot instead of a confused afternoon. We've been saved by this twice already." },
        ],
      },
      {
        type: "prose",
        heading: "Field notes: the conveniences we never had to build",
        level: 2,
        items: [
          { p: "None of these were designed up front. They fell out of tools being declarations over controllers, and each one would have been real work in a hand-rolled tool layer." },
          { p: "Identity is not a tool parameter. Everything in a tool's schema is something the model can set, so the user must never appear there. Our agent injects identity in a side channel instead, overriding each tool's call to pass a server-side context that carries the user the conversation belongs to, captured when the agent was built. There is no user_id argument to hallucinate, no prompt injection that can ask for someone else's rows. The model literally has no vocabulary for \"as a different user\"." },
          { p: "Status messages nobody wrote. During a multi-step turn the chat UI shows what the model is doing: \"Looking up time logs\", then \"Loading the pull request\". That copy doesn't exist anywhere in the codebase. It's derived from the controller and action the tool dispatches to: an index becomes \"Looking up projects\", a show becomes \"Loading the project\". When someone adds a tool, the status message is already there, because it falls out of the controller name. It's the same convention-over-configuration bet Rails makes everywhere else, pointed at a part of the app we didn't expect to point it at." },
          { p: "Tools that excuse themselves. Every tool class answers available_for?(context:, user:) before the agent binds it to a chat. The repository tools (file tree, commits, pull requests) return false when the page you're chatting from has no repository attached, so the model never sees a tool it can't use. Fewer schemas in the request means fewer tokens spent on every single turn, and no doomed calls for the model to flail through." },
        ],
      },
      {
        type: "prose",
        heading: "‍",
        level: 2,
        items: [
          { p: "This is what signing the agent in buys you: not just the authorization you already wrote, but a handful of conveniences you didn't. The chatbot turned out to be the app you already had, answering one more kind of request." },
        ],
      },
      {
        type: "prose",
        heading: "‍",
        level: 2,
        items: [
          { p: "If you've built the write-tool story properly, or you think signing an agent into Warden is an abomination and you have a better way to reuse ten years of authorization code: we want to hear it." },
        ],
      },
    ],
  },
  {
    slug: "the-multiplier",
    seoTitle: "AI Doesn't Add Skill. It Multiplies What's Already There.",
    seoDescription:
      "AI doesn't add engineering skill, it multiplies what's already there. How the best engineers use it to build understanding, while others quietly fall behind.",
    title: "AI Doesn't Add Skill. It Multiplies What's Already There.",
    lead: "AI doesn't add engineering skill, it multiplies what's already there. How the best engineers use it to build understanding, while others quietly fall behind.",
    author: "Nifemi",
    date: "2026-05-14",
    coverAlt: "The Multiplier cover image",
    cover: { src: "/images/blog/the-multiplier.avif", width: 1000, height: 522 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "A couple of years ago the AI conversation was about autocomplete. Now it is about whether your engineers are actually getting better or just getting faster at shipping things they don’t fully understand, and I’ve been watching both happen on the same teams, with the same tools." },
        ],
      },
      {
        type: "prose",
        heading: "What you bring in is what gets multiplied",
        level: 2,
        items: [
          { p: "AI doesn’t add skill, it multiplies what’s already there. If you bring deep knowledge of your domain, a clear sense of what good looks like in your stack, and an instinct for when something smells wrong even when it compiles, AI gives you more leverage on all of that. If you bring surface-level familiarity and a backlog of tickets to close, it gives you confident output that looks right until it doesn’t, and by the time you find out, the problem is usually buried three layers deep in a system nobody fully owns anymore." },
          { p: "The engineers I’ve seen get genuinely better using AI treat the output the way a good reviewer treats a PR: with a perspective already formed, reading to understand what it actually does rather than what it appears to do. When the output diverges from what they expected, that’s the interesting part. Why did it do that? Is that approach better, or is it a pattern the model learned from a tutorial that doesn’t apply here? What does the difference reveal about the problem? Every one of those questions is a chance to build something, and the engineers skipping past them to merge and move on are accumulating debt they don’t know they have yet." },
        ],
      },
      {
        type: "prose",
        heading: "What it can’t do for you",
        level: 2,
        items: [
          { p: "There are things AI cannot accelerate, and the list is worth being upfront about." },
          { p: "Judgment about what to build is one of them. You can describe a feature in a prompt and get a working implementation back, but you cannot hand off the question of whether the feature is worth building, whether the abstraction you’re reaching for is the right one for the system’s direction, or whether the thing you’re designing will still make sense in eighteen months. That requires knowing the domain and the users well enough to have opinions, and having been burned enough times to know where the hidden costs tend to live." },
          { p: "System intuition is another. The mental model of how a system behaves under real load, how failures cascade across service boundaries, where the edge cases actually live in production rather than in the spec: that comes from incidents, from long debugging sessions, from reading code other people wrote years ago and trying to understand not just what it does but why it was written that way. AI can help you move faster inside a system you already understand deeply. Building that understanding is still your job, and there’s no version of that process that doesn’t take time." },
          { p: "The third thing, and the one that compounds the most, is knowing what to ask. Getting real value out of AI means being able to frame precise questions: not “implement this feature” but “implement this using these constraints, following this pattern, and avoiding these specific failure modes.” That precision is a direct function of how much you already know about the problem space. The engineers getting the most out of AI are the ones who could have written a detailed spec before they opened a prompt, and what AI gives them is speed, not direction." },
        ],
      },
      {
        type: "prose",
        heading: "How the fast learners are actually using it",
        level: 2,
        items: [
          { p: "The engineers I’ve watched compress years of exposure into months are not generating more, they’re reading more and comparing more and treating the output as a starting point for thinking rather than an endpoint for a ticket." },
          { p: "They ask for multiple approaches to the same problem and spend time on the tradeoffs between them. They use AI to review their own code before sending it to a human reviewer, not to get a green light but to surface the questions they haven’t thought to ask yet. One practice that seems to matter a lot: write the implementation yourself first, then ask AI to do the same thing, then sit with the difference between the two versions. That gap is a map of your own assumptions. Sometimes AI shows you a better way and you understand why. Sometimes your version holds up and you finally understand why that too. Either way you’ve learned something you wouldn’t have learned by generating first." },
        ],
      },
      {
        type: "prose",
        heading: "What this looks like on a team",
        level: 2,
        items: [
          { p: "At Fetchly, I've watched this play out across enough projects to have a clear read on what separates teams that grow from teams that plateau. The ones that compound fastest are the ones where senior engineers have encoded their knowledge into shared conventions, review patterns, and constraints that the rest of the team works inside of, so that junior engineers aren't just learning what working code looks like but what good code looks like, which is a different thing and a harder one to pick up from output alone." },
          { p: "The real risk isn’t that AI makes engineers lazy, it’s that teams start treating shipping velocity as the signal and quietly stop measuring whether understanding is keeping pace with it. At some point the system you’ve built becomes the system you can’t safely change without a week of archaeology first, and by then it’s expensive to fix and hard to explain to anyone who wasn’t there for it." },
          { p: "The engineers who are still getting better in five years will be the ones who used AI to understand more, faster, while holding onto the judgment and domain knowledge and system intuition that the tool still can’t build for them." },
          { p: "The multiplier only works if there’s something to multiply." },
        ],
      },
    ],
  },
  {
    slug: "the-part-ai-cant-prompt-for",
    seoTitle: "What AI Can't Do in Web and Mobile App Design & Development",
    seoDescription:
      "AI might generate your UI in hours, but mobile app development still requires human experience and judgement on UX execution. Here's what prompts can't replace.",
    title: "What AI Can't Do in Web and Mobile App Design & Development",
    lead: "AI might generate your UI in hours, but mobile app development still requires human experience and judgement on UX execution. Here's what prompts can't replace.",
    author: "Tim Huey",
    date: "2026-04-07",
    coverAlt: "The Part AI Can&#x27;t Prompt For cover image",
    cover: { src: "/images/blog/the-part-ai-cant-prompt-for.avif", width: 1200, height: 631 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "When Netflix started competing seriously for original content, something unexpected happened to the people who write television. Not the writers, the showrunners. Personally, I'd never heard of a showrunner until more recently. It's the person responsible for holding an entire season together as a coherent experience for a real audience. That role had always existed, always mattered, always been the difference between a show that works and one that doesn't. But it was largely invisible to anyone outside the industry." },
          { p: "Then streaming made producing content cheap and fast, and suddenly that judgment, the ability to understand an audience deeply enough to make hundreds of creative decisions in service of their experience, became the scarcest thing in the room. Netflix signed Shonda Rhimes for $150 million and Ryan Murphy for $300 million in what Fast Company described as a \"billion-dollar arms race\" for showrunner talent Fast Company. Once volume stopped being the constraint, the judgment to make shows that work for people became the thing that actually differentiated one platform from another." },
          { p: "The work hadn't changed. What changed was how visible it became." },
        ],
      },
      {
        type: "prose",
        heading: "We're Watching a Similar Shift Happen in Product Design",
        level: 2,
        items: [
          { p: "We've been watching something similar happen in product design, and it's worth naming, because it has real implications for how product teams are built right now." },
          { p: "AI tools have made producing interfaces crazy fast. A founder or product owner can go from concept to something that looks and functions like a real product in a matter of hours. Getting a proof of concept in front of stakeholders faster, pressure-testing an idea before committing resources, moving quickly through early validation; these are legitimate gains, and teams should use them." },
          { p: "Yet there's a specific moment we keep seeing, somewhere after the prototype exists and before the product ships, where the nature of the problem changes. The screens look right. The flows are plausible. And then real users encounter it." },
        ],
      },
      {
        type: "prose",
        heading: "What AI Handles Well, and What It Doesn't",
        level: 2,
        items: [
          { p: "Nielsen Norman Group recently drew a careful distinction between vibe coding (where a user describes what they want and AI builds it) and professional design work, arguing that the line between them determines what you're holding AI accountable for: execution fidelity or design judgment. Nielsen Norman Group Execution fidelity is something AI handles well. Design judgment is something else: it's the work of understanding that a first-time user reads your product differently than the team that built it. It's knowing where people hesitate, where they misread a label, where a flow that feels obvious to an insider creates friction for a stranger. It's the questions a prompt can't ask on your behalf." },
        ],
      },
      {
        type: "prose",
        heading: "What Remains When AI Handles the Execution",
        level: 2,
        items: [
          { p: "We're now seeing that when AI handles the execution layer (generating screens, producing layouts, building functional interfaces), what remains is exactly the work that product design has always been about. Intuition is part of that, yes, but intuition built on theoretical frameworks you've studied and an educated eye you've developed over time. User research, behavioral analysis, usability testing, pattern recognition earned from working in the space and watching real people interact with real products. Mapping where a user's mental model diverges from the team's assumptions. Understanding where that gap lives, not because it seems right but because you looked. Making the hundreds of small decisions that determine whether an experience holds together for someone who didn't build it." },
          { p: "Nielsen Norman Group's State of UX 2026 observed that users are increasingly fatigued by “AI slop.” When everything gets that AI sparkle, it can easily become noise, not novelty. Nielsen Norman Group The products standing out right now aren't the ones that moved fastest through the generative phase. They're the ones where someone asked harder questions after the prototype existed." },
        ],
      },
      {
        type: "prose",
        heading: "The Screens Were Never the Hard Part",
        level: 2,
        items: [
          { p: "The showrunner's job didn't become less valuable when Netflix could produce more content; it became more visible, because volume exposed the thing volume couldn't solve. Product design is in the same moment. The screens were never the hard part. Now, finally, that's easier for everyone to see." },
        ],
      },
      {
        type: "prose",
        heading: "Sources:",
        level: 3,
        items: [
          { p: "Fast Company, \"How Netflix Created a $1 Billion Arms Race for TV Writers,\" 2019; Nielsen Norman Group, \"GenUI vs. Vibe Coding: Who's Designing?,\" March 2026; Nielsen Norman Group, \"State of UX 2026,\" January 2026." },
        ],
      },
    ],
  },
  {
    slug: "the-problem-isnt-your-traffic",
    seoTitle: "Troubleshooting ECommerce Store & Product Page Traffic",
    seoDescription:
      "51% of top ECommerce sites have poor product page UX that hurts performance no matter the traffic.",
    title: "Troubleshooting ECommerce Store & Product Page Traffic",
    lead: "51% of top ECommerce sites have poor product page UX that hurts performance no matter the traffic.",
    author: "Tim Huey",
    date: "2026-03-16",
    coverAlt: "The Problem Isn&#x27;t Your Traffic. It&#x27;s Your Product Page. cover image",
    cover: { src: "/images/blog/the-problem-isnt-your-traffic.avif", width: 1200, height: 972 },
    blocks: [
      {
        type: "prose",
        items: [
          { p: "Recently a friend asked me to read the draft of his book he planned to self-publish. He wasn't looking for feedback, he said; he just wanted meto read it. He insisted it would only take two or three hours. Wanting to lower his expectations, I assured him I was a slow reader." },
          { p: "A week later he asked what page I was on. Only about page 20, I told him, but it's really good so far. And it was. The next time I ran into him, he asked again. I fumbled for an answer, having made little progress. Then, yesterday, I was out walking my kids, pushing our heavy double stroller when I ran into him. He says to me, no lie, \"Have you finished my book yet? It's been 50 days.\"" },
          { p: "At this point, I've got to say, I really don't feel like reading his book anymore." },
          { p: "My friend had a motivated reader. I had every intention of finishing his book. And somewhere in the gap between intention and the right conditions, the motivation dissolved." },
          { p: "That's what a product page can do to a ready buyer." },
          { p: "There's a moment in every shopping session where the sale is either won or surrendered. Not at checkout, not in the cart, but on the product page. That's the highest-intent moment in your funnel. Someone who already found you, already clicked through, already cares enough to look, and now they're deciding. Baymard Institute, which has spent over 200,000 hours researching ecommerce UX, is clear on this: nearly every user passes through a product page before making a purchase decision." },
          { p: "Here's what makes that significant. Baymard's 2025 benchmark found that 51% of leading US and European ecommerce sites have \"mediocre\" or worse product page UX. And not one got a perfect score. Not small shops, established stores with real traffic and real budgets. The gap between stores that convert and stores that don't usually isn't traffic or pricing. It's the product page, and whether it was built with intention or just shipped with the theme defaults." },
          { p: "Here's what actually separates them." },
        ],
      },
      {
        type: "prose",
        heading: "Hierarchy does the heavy lifting before the shopper knows it",
        level: 2,
        items: [
          { p: "When someone lands on a product page, they're scanning, not reading. Visual hierarchy controls what they see first and in what order. A well-structured page earns the decision — it leads with what the shopper came to see, layers in what they need to feel confident, and delivers the CTA at the natural moment. When hierarchy breaks, shoppers feel friction they can't name, and they leave. Common failures: pricing below the fold, variant selectors disconnected from imagery, secondary content crowding the action zone before the shopper has even decided they want the product." },
        ],
      },
      {
        type: "prose",
        heading: "Trust signals answer questions shoppers never ask out loud",
        level: 2,
        items: [
          { p: "Before adding to cart, shoppers run a quiet checklist. Is this site legitimate? Is my card safe? They're not asking these questions out loud, but they're asking them — and if the page doesn't answer them, doubt wins. Baymard found that 18% of US shoppers have abandoned a checkout solely because they didn't trust the site with their credit card information. Placement matters as much as presence. A return policy near the Add to Cart button lands differently than one buried in the footer. Real customer photos answer questions that polished studio imagery often can't." },
        ],
      },
      {
        type: "prose",
        heading: "Mobile is where most of your traffic is, and where most stores underperform",
        level: 2,
        items: [
          { p: "Mobile drives around 78% of global ecommerce traffic. The average mobile CVR sits at roughly 2.85% versus desktop's 3.85%. That gap is a design problem, not a device problem. \"Works on mobile\" because it's responsive isn't the bar; responsive means it renders. Mobile shoppers navigate with a thumb, in distracted contexts, on screens that amplify every friction point. With mobile projected to account for 59% of all global online retail sales in 2025, this isn't something to revisit later." },
        ],
      },
      {
        type: "prose",
        heading: "Imagery is the closest thing to holding the product",
        level: 2,
        items: [
          { p: "Your images do the work a physical store does naturally. Most stores have a primary image. Fewer have multiple angles, lifestyle context, scale references, and variant-specific photos that update when a shopper makes a selection. When someone picks \"Forest Green\" and the photo stays on \"White,\" that uncertainty is a conversion killer. Real customer photos carry particular weight. Authentic context removes doubt in a way polished photography often can't." },
        ],
      },
      {
        type: "prose",
        heading: "The CTA is a designed decision, not a default",
        level: 2,
        items: [
          { p: "The Add to Cart button is the most important single element on the page, and most stores have never consciously made a decision about it. The label, the placement, the surrounding context, whatever the theme shipped with. Shopify Plus opens up real flexibility here: custom checkout flows, persistent cart elements, accelerated options like Shop Pay and Apple Pay. But platform capability only matters if the design decision has been made first." },
        ],
      },
      {
        type: "prose",
        heading: "What this adds up to",
        level: 2,
        items: [
          { p: "A product page that converts isn't one thing done right. It's these five dimensions (hierarchy, trust signals, mobile, imagery, and CTA) working as a system. That's the lens we bring to Shopify Plus clients. Not a patch list, but a clear-eyed look at how the page functions as a whole and where the friction actually lives." },
          { p: "My friend still hasn't gotten me to finish his book. Not for lack of caring, but the conditions just never came together. A ready shopper on the wrong product page ends up in the same place." },
          { p: "If you want to dig into how your product page holds up, we're happy to take a look." },
        ],
      },
      {
        type: "prose",
        heading: "Sources:",
        level: 3,
        items: [
          { p: "Baymard Institute Product Page UX Benchmark 2025; Baymard Institute Checkout Usability Research; Monetate / Oberlo mobile ecommerce conversion data 2024; Venn Apps mobile commerce projections 2025." },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
