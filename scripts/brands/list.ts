// The brand logos Kineticons ships: the ~500 marks people most often need on a website, grouped so each group gets
// a motion that suits it and a few search words. Slugs are Simple Icons slugs (the logo data comes from the
// simple-icons package, CC0). Order matters: the first 500 that exist are kept, so the most wanted come first.

export type Motion = "pop" | "tilt" | "lift" | "pulse" | "spin" | "hop";

export interface Group {
  key: string;
  motion: Motion;
  tags: string[];
  slugs: string[];
}

export const GROUPS: Group[] = [
  {
    key: "social",
    motion: "pop",
    tags: ["social", "social media", "network", "share", "follow"],
    slugs: [
      "facebook", "instagram", "x", "threads", "tiktok", "youtube", "snapchat", "pinterest", "reddit", "tumblr",
      "twitch", "discord", "mastodon", "bluesky", "vk", "sinaweibo", "quora", "linktree", "behance", "dribbble",
      "medium", "substack", "devdotto", "hashnode", "producthunt", "flickr", "vimeo", "dailymotion", "kick", "bereal",
      "xing", "meetup", "goodreads", "letterboxd", "imdb", "deviantart", "500px", "unsplash", "pexels", "patreon",
      "kofi", "buymeacoffee", "clubhouse", "nextdoor", "douban", "zhihu", "bilibili", "rumble", "lemmy", "pixiv",
      "ycombinator", "stackoverflow", "stackexchange", "polywork", "peertube", "pixelfed", "vsco", "tiktok", "gravatar",
    ],
  },
  {
    key: "messaging",
    motion: "tilt",
    tags: ["chat", "message", "messaging", "talk", "contact"],
    slugs: [
      "whatsapp", "telegram", "signal", "messenger", "wechat", "line", "viber", "kakaotalk", "slack", "zoom",
      "googlemeet", "element", "matrix", "rocketdotchat", "mattermost", "zulip", "gmail", "protonmail", "thunderbird",
      "fastmail", "tutanota", "googlechat", "webex", "jitsi", "intercom", "crisp", "zendesk", "freshdesk", "helpscout",
      "tawkdotto", "livechat", "front", "missive", "superhuman", "spark", "qq", "imessage", "facetime",
    ],
  },
  {
    key: "tech",
    motion: "lift",
    tags: ["company", "tech", "brand"],
    slugs: [
      "google", "apple", "meta", "amazon", "netflix", "spotify", "samsung", "sony", "nvidia", "intel", "amd",
      "ibm", "cisco", "hp", "dell", "lenovo", "huawei", "xiaomi", "oneplus", "tesla", "uber", "airbnb", "lyft",
      "qualcomm", "arm", "asus", "acer", "lg", "panasonic", "philips", "canon", "nikon", "fujifilm", "gopro",
      "dji", "logitech", "razer", "bose", "sennheiser", "garmin", "fitbit", "oppo", "vivo", "honor", "motorola",
      "nokia", "realme", "nothing", "framework", "raspberrypi", "arduino", "espressif", "siemens", "bosch", "3m",
      "ge", "salesforce", "sap", "vmware", "redhat", "canonical", "mozilla", "wikipedia", "wordpress", "automattic",
    ],
  },
  {
    key: "ai",
    motion: "pulse",
    tags: ["ai", "artificial intelligence", "llm", "assistant", "machine learning"],
    slugs: [
      "anthropic", "claude", "openai", "googlegemini", "perplexity", "mistralai", "huggingface", "ollama", "deepseek",
      "metaai", "githubcopilot", "cursor", "replicate", "langchain", "stabilityai", "midjourney", "elevenlabs",
      "runway", "poe", "character.ai", "googlecolab", "kaggle", "tensorflow", "pytorch", "scikitlearn", "keras",
      "jupyter", "weightsandbiases", "nvidia", "cohere", "groq", "together", "v0", "lovable", "bolt", "windsurf",
      "zedindustries", "codeium", "tabnine", "notebooklm",
    ],
  },
  {
    key: "dev",
    motion: "lift",
    tags: ["developer", "code", "dev tools", "repository", "platform"],
    slugs: [
      "github", "gitlab", "bitbucket", "git", "githubactions", "npm", "vite", "jsr", "jsdelivr", "unpkg", "pnpm", "yarn", "bun", "deno", "nodedotjs",
      "docker", "kubernetes", "jenkins", "circleci", "travisci", "githubpages", "vercel", "netlify", "cloudflare",
      "cloudflarepages", "cloudflareworkers", "render", "railway", "flydotio", "heroku", "digitalocean", "linode",
      "vultr", "hetzner", "ovh", "googlecloud", "firebase", "supabase", "appwrite", "pocketbase", "convex", "clerk",
      "auth0", "okta", "stripe", "sentry", "datadog", "newrelic", "grafana", "prometheus", "posthog", "mixpanel",
      "amplitude", "googleanalytics", "plausibleanalytics", "hotjar", "postman", "insomnia", "swagger", "openapiinitiative",
      "graphql", "apollographql", "trpc", "prisma", "drizzle", "sequelize", "jira", "confluence", "trello",
      "linear", "asana", "clickup", "monday", "basecamp", "youtrack", "jetbrains", "intellijidea", "webstorm",
      "pycharm", "androidstudio", "xcode", "neovim", "vim", "gnuemacs", "sublimetext", "zedindustries", "visualstudiocode",
      "codepen", "codesandbox", "stackblitz", "replit", "glitch", "gitpod", "coolify", "portainer", "ansible",
      "terraform", "vagrant", "hashicorp", "nginx", "apache", "caddy", "traefikproxy", "letsencrypt", "homebrew",
      "chocolatey", "gnubash", "powershell", "windowsterminal", "iterm2", "warp", "alacritty", "tmux", "ohmyzsh",
      "eslint", "prettier", "biome", "vitest", "jest", "cypress", "playwright", "storybook", "puppeteer", "selenium",
      "webpack", "vite", "rollupdotjs", "esbuild", "babel", "swc", "turborepo", "nx", "lerna", "changesets",
      "renovate", "dependabot", "snyk", "sonarqubeserver", "codecov", "githubcopilot", "gitkraken", "sourcetree",
    ],
  },
  {
    key: "language",
    motion: "pop",
    tags: ["programming language", "code", "developer"],
    slugs: [
      "javascript", "typescript", "html5", "css", "sass", "markdown", "json", "python", "rust", "go", "java", "kotlin", "swift", "c", "cplusplus", "csharp",
      "dotnet", "php", "ruby", "dart", "elixir", "erlang", "haskell", "scala", "clojure", "lua", "perl", "r",
      "julia", "zig", "ocaml", "fsharp", "nim", "crystal", "gleam", "solidity", "webassembly", "html5", "css",
      "sass", "less", "markdown", "json", "yaml", "toml", "mdx", "latex", "gnu", "linux", "unity", "godotengine",
      "unrealengine",
    ],
  },
  {
    key: "framework",
    motion: "spin",
    tags: ["framework", "library", "frontend", "web"],
    slugs: [
      "react", "nextdotjs", "vuedotjs", "nuxt", "svelte", "angular", "astro", "remix", "solid", "qwik", "preact",
      "lit", "alpinedotjs", "htmx", "jquery", "emberdotjs", "gatsby", "eleventy", "hugo", "jekyll", "docusaurus",
      "vitepress", "tailwindcss", "bootstrap", "bulma", "chakraui", "mui", "shadcnui", "radixui", "headlessui",
      "daisyui", "unocss", "styledcomponents", "framer", "greensock", "threedotjs", "d3", "chartdotjs", "electron",
      "tauri", "capacitor", "ionic", "flutter", "expo", "reactquery", "redux", "mobx", "zod", "express", "fastify",
      "nestjs", "hono", "koa", "django", "flask", "fastapi", "laravel", "symfony", "rubyonrails", "spring",
      "springboot", "dotnet", "phoenixframework", "gin", "fiber", "strapi", "sanity", "contentful", "directus",
      "payloadcms", "ghost", "drupal", "joomla", "webflow", "wix", "squarespace", "shopify", "woocommerce",
      "magento", "bigcommerce", "framer",
    ],
  },
  {
    key: "data",
    motion: "lift",
    tags: ["database", "data", "storage", "backend"],
    slugs: [
      "postgresql", "mysql", "mariadb", "sqlite", "mongodb", "redis", "elasticsearch", "apachecassandra", "neo4j",
      "couchdb", "dynamodb", "cockroachlabs", "planetscale", "neon", "turso", "upstash", "clickhouse", "snowflake",
      "databricks", "apachekafka", "rabbitmq", "apachespark", "apachehadoop", "airtable", "notion", "pandas", "numpy",
      "duckdb", "influxdb", "timescale", "meilisearch", "algolia", "typesense", "pinecone", "qdrant", "weaviate",
    ],
  },
  {
    key: "design",
    motion: "tilt",
    tags: ["design", "creative", "ui", "art"],
    slugs: [
      "figma", "sketch", "framer", "canva", "affinitydesigner", "affinityphoto", "affinitypublisher", "blender",
      "inkscape", "gimp", "krita", "procreate", "invision", "zeplin", "miro", "excalidraw", "tldraw", "penpot",
      "lottiefiles", "rive", "spline", "googlefonts", "fontawesome", "iconify", "coolors", "adobe",
      "adobephotoshop", "adobeillustrator", "adobexd", "adobeaftereffects", "adobepremierepro", "adobeindesign",
      "davinciresolve", "obsstudio", "capcut", "darktable", "unsplash",
    ],
  },
  {
    key: "productivity",
    motion: "pop",
    tags: ["productivity", "work", "office", "notes", "app"],
    slugs: [
      "notion", "raycast", "obsidian", "evernote", "todoist", "googledrive", "googledocs", "googlesheets", "googleslides",
      "googlecalendar", "googlekeep", "googleforms", "dropbox", "box", "icloud", "onedrive", "1password", "bitwarden",
      "lastpass", "dashlane", "proton", "protondrive", "protonvpn", "nordvpn", "expressvpn", "calendly", "caldotcom",
      "zapier", "make", "ifttt", "n8n", "typeform", "tally", "googlesearchconsole", "googletagmanager", "grammarly",
      "deepl", "googletranslate", "readthedocs", "gitbook", "craft", "bear", "logseq", "roamresearch", "anytype",
      "loom", "raycast", "alfred", "arc", "zotero", "mendeley", "duolingo", "coursera", "udemy", "edx", "khanacademy",
      "codecademy", "freecodecamp", "leetcode", "hackerrank", "codewars",
    ],
  },
  {
    key: "commerce",
    motion: "hop",
    tags: ["payment", "pay", "money", "shopping", "store", "checkout"],
    slugs: [
      "paypal", "stripe", "visa", "mastercard", "americanexpress", "applepay", "googlepay", "samsungpay", "alipay",
      "wechatpay", "klarna", "afterpay", "affirm", "square", "cashapp", "venmo", "wise", "revolut", "monzo",
      "n26", "payoneer", "razorpay", "paytm", "phonepe", "mercadopago", "adyen", "braintree", "lemonsqueezy",
      "paddle", "gumroad", "shopify", "etsy", "ebay", "aliexpress", "alibabadotcom", "walmart", "target", "ikea",
      "bestbuy", "costco", "temu", "shein", "zalando", "flipkart", "rakuten", "mercadolibre", "wish", "coinbase",
      "binance", "kraken", "robinhood", "bitcoin", "ethereum", "solana", "tether", "dogecoin", "litecoin", "metamask",
      "trustpilot", "yelp", "tripadvisor",
    ],
  },
  {
    key: "media",
    motion: "pulse",
    tags: ["music", "video", "streaming", "media", "entertainment"],
    slugs: [
      "spotify", "applemusic", "youtubemusic", "soundcloud", "deezer", "tidal", "bandcamp", "audiomack", "pandora",
      "shazam", "lastdotfm", "netflix", "primevideo", "hbo", "hulu", "appletv", "crunchyroll", "plex", "jellyfin",
      "kodi", "vlcmediaplayer", "youtubeshorts", "youtubestudio", "tiktok", "twitch", "applepodcasts", "googlepodcasts",
      "pocketcasts", "overcast", "audible", "kindle", "wattpad", "nytimes", "bbc", "cnn", "reuters", "theguardian",
      "bloomberg", "forbes", "techcrunch", "theverge", "wired", "espn",
    ],
  },
  {
    key: "gaming",
    motion: "tilt",
    tags: ["game", "gaming", "play", "console"],
    slugs: [
      "steam", "epicgames", "playstation", "nintendo", "nintendoswitch", "xbox", "riotgames", "valorant",
      "leagueoflegends", "roblox", "minecraft", "fortnite", "ea", "ubisoft", "battledotnet", "blizzard", "gogdotcom",
      "itchdotio", "unity", "unrealengine", "godotengine", "rockstargames", "bandainamco", "sega", "capcom", "square",
      "chessdotcom", "lichess", "speedrun", "steamdeck",
    ],
  },
  {
    key: "platform",
    motion: "spin",
    tags: ["browser", "operating system", "os", "platform", "store"],
    slugs: [
      "googlechrome", "firefox", "firefoxbrowser", "safari", "opera", "brave", "vivaldi", "torbrowser", "duckduckgo",
      "arc", "chromium", "microsoftedge", "android", "ios", "macos", "windows", "windows11", "linux", "ubuntu",
      "debian", "fedora", "archlinux", "linuxmint", "manjaro", "nixos", "alpinelinux", "centos", "redhat", "freebsd",
      "chromeos", "googleplay", "appstore", "fdroid", "googlemaps", "applemaps", "openstreetmap", "waze",
      "googlechrome", "bing", "yahoo", "baidu", "yandex", "ecosia", "kagi", "startpage",
    ],
  },
  {
    key: "travel",
    motion: "hop",
    tags: ["travel", "delivery", "ride", "food", "booking"],
    slugs: [
      "uber", "ubereats", "lyft", "bolt", "grab", "didi", "doordash", "deliveroo", "grubhub", "instacart",
      "swiggy", "zomato", "airbnb", "bookingdotcom", "expedia", "trivago", "hotelsdotcom", "skyscanner", "kayak",
      "agoda", "tripadvisor", "lime", "starbucks", "mcdonalds", "burgerking", "kfc", "dominos", "cocacola",
      "pepsi", "redbull", "nike", "adidas", "puma", "underarmour", "newbalance", "lego", "disney", "marvel",
      "dccomics", "pixar", "warnerbros", "paramountplus", "toyota", "honda", "bmw", "mercedes", "audi", "volkswagen",
      "ford", "porsche", "ferrari", "lamborghini", "hyundai", "kia", "nissan", "volvo", "bmw", "rivian", "byd",
      "spacex", "nasa", "boeing", "airbus", "emirates", "qatarairways", "lufthansa", "ryanair", "delta",
      "unitedairlines", "americanairlines", "fedex", "ups", "dhl", "usps",
    ],
  },
];
