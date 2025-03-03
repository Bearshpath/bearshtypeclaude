// Word lists filtered for specific fingers and hands

// Common English words (using only lowercase letters)
const commonWords = [
    "the", "be", "to", "of", "and", "in", "that", "have", "it", "for",
    "not", "on", "with", "he", "as", "you", "do", "at", "this", "but",
    "his", "by", "from", "they", "we", "say", "her", "she", "or", "an",
    "will", "my", "one", "all", "would", "there", "their", "what", "so",
    "up", "out", "if", "about", "who", "get", "which", "go", "me", "when",
    "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them",
    "see", "other", "than", "then", "now", "look", "only", "come", "its",
    "over", "think", "also", "back", "after", "use", "two", "how", "our",
    "work", "first", "well", "way", "even", "new", "want", "because", "any",
    "these", "give", "day", "most", "us"
];

// Enhanced word lists focusing on specific hands and fingers
const specializedWords = {
    // Left hand words (at least 97% left hand letters)
    leftHand: [
        "africa", "antarctica", "arab", "arabia", "arabic", "aruba", "belfast",
        "aboard", "above", "abroad", "absence", "absent", "abstract", "abuse", "accelerated",
        "accelerator", "accent", "accents", "accept", "acceptable", "acceptance", "accepted", "access",
        "accessed", "accessible", "accessories", "accord", "accordance", "accredited", "accurate", "accused",
        "acids", "acre", "acres", "acrobat", "across", "act", "acted", "activate",
        "activated", "active", "actor", "actors", "actress", "acts", "acute", "ad",
        "adapt", "adapted", "adapter", "adapters", "add", "added", "address", "addressed",
        "addresses", "addressing", "adds", "adequate", "ads", "advance", "advanced", "advances",
        "advantage", "advantages", "advent", "adventures", "adverse", "advert", "advertise", "advertised",
        "advertiser", "advertisers", "adverts", "advice", "advise", "advised", "adviser", "advisers",
        "advocate", "advocates", "adware", "affair", "affairs", "affect", "affected", "affects",
        "afford", "affordable", "afraid", "after", "afterwards", "age", "aged", "agenda",
        "agent", "agents", "ages", "aggregate", "aggressive", "agree", "agreed", "agreements",
        "agrees", "ahead", "aided", "aircraft", "airfare", "alert", "alerts", "algebra",
        "alter", "altered", "ambassador", "amber", "anger", "answer", "answered", "answers",
        "apart", "arc", "arcade", "architects", "arctic", "are", "area", "areas",
        "arena", "argue", "argued", "argues", "arise", "arises", "armed", "arrange",
        "arranged", "array", "arrays", "arrest", "arrested", "arrive", "arrived", "arrives",
        "arrow", "arrows", "art", "artifacts", "artist", "artists", "arts", "as",
        "aside", "asked", "aspect", "aspects", "assay", "assert", "assess", "assessed",
        "assessment", "assessments", "asset", "assets", "assist", "assistance", "assistants", "assisted",
        "assists", "associated", "associates", "assorted", "assure", "assured", "at", "ate",
        "atlas", "attach", "attached", "attack", "attacked", "attacks", "attend", "attendance",
        "attended", "attendees", "attic", "attract", "attracted", "attractive", "attributed", "attributes",
        "avatar", "average", "averages", "awake", "award", "awarded", "awards", "aware",
        "awareness", "babe", "babes", "babies", "backed", "backs", "backward", "backwards",
        "bacteria", "bad", "badge", "bag", "bags", "baked", "baker", "bands",
        "bar", "barbecue", "barcode", "bare", "barrel", "barrier", "barriers", "bars",
        "base", "based", "bases", "basic", "basics", "basis", "basket", "baskets",
        "bass", "bat", "batch", "baths", "batteries", "battery", "battle", "battles",
        "be", "beach", "beaches", "bead", "beads", "beans", "bear", "bears",
        "beast", "beat", "beaten", "beats", "beaver", "beavers", "became", "because",
        "bed", "beds", "bee", "beef", "beer", "before", "began", "beige",
        "belts", "berry", "beside", "besides", "best", "bestseller", "bet", "beta",
        "bets", "better", "between", "beverage", "beverages", "beware", "bidder", "bidders",
        "bigger", "biggest", "birds", "bitter", "bizarre", "blade", "blades", "blast",
        "bless", "blessed", "board", "boards", "boats", "border", "borders", "bored",
        "boxed", "boxer", "boxes", "bracelet", "bracelets", "bracket", "brackets", "brake",
        "brakes", "brand", "brands", "brass", "brave", "breach", "bread", "break",
        "breakfast", "breakfasts", "breaks", "breath", "breathe", "breed", "breeds", "breeze",
        "bride", "bridge", "bridges", "brief", "briefs", "broad", "broadcast", "broader",
        "browse", "browser", "browsers", "budget", "budgets", "buffer", "buffet", "burst",
        "buses", "butter", "bytes", "cab", "cable", "cables", "cache", "cached",
        "cad", "cafe", "cage", "cakes", "camcorders", "camera", "cameras", "cancer",
        "candidates", "canvas", "car", "caravan", "card", "cardiac", "cards", "care",
        "career", "careers", "cares", "cargo", "carpet", "carriage", "carried", "carrier",
        "carriers", "carries", "carry", "cars", "cart", "cartridge", "cartridges", "carts",
        "carved", "case", "cases", "cassette", "cast", "castle", "cat", "catch",
        "categories", "cats", "cattle", "cause", "caused", "causes", "cave", "cease",
        "cedar", "celebrate", "celebrated", "center", "centered", "centers", "cents", "cerebral",
        "certificate", "certificates", "character", "characteristics", "characterized", "characters", "charge", "charged",
        "charger", "chargers", "charges", "chart", "charter", "chartered", "charts", "chase",
        "cheat", "cheats", "cheer", "cheerleader", "cheers", "cheese", "chess", "chest",
        "cigar", "cigarette", "cigarettes", "circa", "cited", "class", "classes", "clear",
        "cleared", "clever", "coast", "coated", "coats", "cobra", "codes", "coffee",
        "converters", "correct", "corrected", "costs", "cottage", "cottages", "cover", "coverage",
        "covered", "covers", "crab", "crack", "cracks", "cradle", "craft", "crafted",
        "crafts", "crane", "crash", "crashes", "crazy", "cream", "create", "created",
        "creates", "creative", "creator", "creature", "creatures", "credit", "credited", "credits",
        "creed", "creek", "crest", "crew", "cried", "cross", "crowd", "crowded",
        "crude", "curse", "curve", "curves", "dad", "damage", "damaged", "damages",
        "dance", "dancer", "dancers", "dances", "danger", "dangers", "dare", "data",
        "database", "databases", "date", "dated", "dates", "dead", "deaf", "dealer",
        "dealers", "deals", "dealt", "dear", "death", "deaths", "debate", "debates",
        "debit", "debt", "debts", "debug", "debut", "decade", "decades", "decay",
        "deceased", "decent", "decide", "decided", "decides", "decks", "declare", "declared",
        "decor", "decorated", "decorative", "decrease", "decreased", "decreases", "decreasing", "decree",
        "dedicated", "deed", "deeds", "deemed", "deeper", "deer", "def", "defeat",
        "defeated", "defect", "defective", "defects", "defend", "defendants", "defender", "defense",
        "deferred", "degree", "degrees", "delegate", "delegates", "delete", "deleted", "delta",
        "dense", "depart", "deprecated", "depressed", "derby", "derivative", "derivatives", "derive",
        "derived", "describe", "described", "describes", "desert", "deserve", "deserves", "designated",
        "desire", "desired", "desires", "desks", "desperate", "dessert", "desserts", "detached",
        "detect", "detected", "detective", "detector", "detectors", "device", "devices", "devoted",
        "diabetes", "diets", "differ", "difference", "differences", "digest", "direct", "directed",
        "disagree", "disaster", "disasters", "discovered", "discrete", "discs", "disease", "diseases",
        "distress", "diverse", "dodge", "dosage", "doses", "draft", "drag", "drama",
        "draw", "drawer", "drawn", "draws", "dream", "dreams", "dress", "dressed",
        "dresses", "drew", "dried", "drift", "drive", "driver", "drivers", "drives",
        "drove", "drugs", "dryer", "eager", "eagle", "eagles", "ear", "earned",
        "ears", "earth", "ease", "easier", "easiest", "east", "easter", "eastern",
        "eat", "eaten", "edge", "edges", "edited", "edits", "educate", "educated",
        "effect", "effective", "effectiveness", "effects", "effort", "efforts", "egg", "eggs",
        "elder", "elect", "elected", "elevated", "embedded", "embrace", "emerge", "emerged",
        "enacted", "endangered", "ended", "engage", "engaged", "enter", "entered", "enters",
        "era", "error", "errors", "escape", "escort", "escorts", "essay", "essays",
        "essence", "estate", "estates", "esteem", "evanescence", "event", "events", "ever",
        "every", "everywhere", "exact", "exams", "exceed", "exceeded", "exceeds", "excel",
        "except", "excerpt", "excerpts", "excess", "excessive", "excite", "excited", "excuse",
        "executable", "execute", "executed", "executives", "exercise", "exercises", "exist", "existed",
        "exists", "expect", "expected", "expects", "expert", "experts", "express", "expressed",
        "extend", "extended", "extends", "extent", "extra", "extract", "extracted", "extracts",
        "extras", "extreme", "fabric", "fabrics", "face", "faced", "faces", "fact",
        "factor", "factors", "facts", "fade", "false", "far", "fare", "fares",
        "farmer", "farmers", "farms", "fast", "faster", "fastest", "fat", "fatal",
        "fate", "father", "fathers", "fatty", "favor", "favors", "fax", "faxes",
        "fear", "fears", "feast", "feat", "feather", "feature", "featured", "features",
        "federal", "fee", "feed", "feedback", "feeder", "feeds", "feels", "fees",
        "feet", "fence", "ferry", "fest", "fever", "few", "fewer", "fiber",
        "fired", "fires", "first", "fitted", "fixed", "fixes", "flags", "flats",
        "fleece", "fleet", "force", "forced", "forces", "forecast", "forecasts", "forest",
        "forests", "forever", "forge", "forget", "forward", "foster", "fragrance", "fragrances",
        "frame", "framed", "frames", "fraud", "free", "freeware", "freeze", "freezer",
        "fresh", "fridge", "fried", "frogs", "frost", "frustrated", "gadget", "gadgets",
        "gag", "games", "garage", "garbage", "garden", "gardens", "gas", "gases",
        "gate", "gates", "gateway", "gather", "gathered", "gauge", "gave", "gazette",
        "gear", "gender", "generate", "generated", "generates", "generators", "genes", "genre",
        "genres", "get", "gets", "gifted", "gifts", "gives", "glass", "glasses",
        "goddess", "grab", "grace", "grade", "grades", "graduate", "graduated", "graduates",
        "grams", "grand", "grandfather", "grant", "granted", "grants", "grape", "grasp",
        "grass", "grave", "gravel", "graves", "great", "greater", "greatest", "green",
        "greens", "grew", "grief", "gross", "grove", "grows", "guaranteed", "guarantees",
        "guard", "guards", "guess", "guest", "guests", "harder", "hardware", "harvest",
        "hazard", "hazards", "headed", "header", "headers", "headquarters", "heads", "headset",
        "headsets", "heard", "heart", "hearts", "heated", "heater", "heaters", "hedge",
        "herbs", "ideas", "integrated", "interested", "interfaces", "interstate", "ladder", "large",
        "larger", "largest", "laser", "later", "latest", "latter", "leader", "leaders",
        "leads", "lease", "leases", "least", "leave", "leaves", "lesser", "letter",
        "letters", "lever", "leverage", "massage", "masses", "master", "masters", "matter",
        "matters", "mattress", "meets", "merge", "merged", "merger", "message", "messages",
        "metadata", "meter", "meters", "nearest", "needed", "needs", "nerve", "nested",
        "never", "newer", "newest", "newsletter", "newsletters", "observe", "observed", "observer",
        "observers", "offer", "offered", "offers", "offset", "order", "ordered", "orders",
        "overseas", "padded", "pages", "parade", "parameters", "parse", "parts", "passage",
        "passed", "passengers", "passes", "pasta", "paste", "peace", "peers", "percentage",
        "percentages", "perfect", "prefer", "preference", "preferences", "preferred", "prefers", "prescribed",
        "preserve", "preserved", "press", "pressed", "quarter", "quarters", "quartet", "quest",
        "rabbit", "race", "racer", "races", "racks", "radar", "rage", "raise",
        "raised", "raises", "range", "rangers", "ranges", "rants", "rare", "rat",
        "rate", "rated", "rates", "rather", "rats", "raven", "raw", "razor",
        "reach", "reached", "reaches", "react", "reactor", "read", "readable", "reader",
        "readers", "reads", "ready", "rear", "rebate", "rebates", "rebels", "receive",
        "received", "receiver", "receivers", "receives", "recent", "rechargeable", "record", "recorded",
        "recorder", "recorders", "records", "recover", "recovered", "recruiters", "red", "redeem",
        "redhead", "redirect", "reduce", "reduced", "reduces", "reed", "reef", "refer",
        "reference", "referenced", "references", "referral", "referrals", "referred", "refers", "reflect",
        "reflected", "reflective", "reflects", "refresh", "refrigerator", "refuge", "refugee", "refugees",
        "refuse", "refused", "regard", "regarded", "regardless", "regards", "regents", "reggae",
        "register", "registered", "registers", "registrar", "regret", "rehab", "reject", "rejected",
        "relate", "related", "relates", "relax", "relaxed", "release", "released", "releases",
        "remembered", "render", "rendered", "renew", "renewed", "repeat", "repeated", "repeats",
        "representatives", "represented", "represents", "request", "requested", "requests", "rescue", "research",
        "researcher", "researchers", "reserve", "reserved", "reserves", "reset", "resist", "resistance",
        "resort", "resorts", "respect", "respected", "respective", "respects", "rest", "restart",
        "restaurant", "restaurants", "restore", "restored", "restrict", "restricted", "retire", "retired",
        "retreat", "retrieve", "retrieved", "retro", "reuse", "reveal", "revealed", "reveals",
        "revenge", "reverse", "reversed", "review", "reviewed", "reviewer", "reviewers", "reviews",
        "revise", "revised", "reward", "rewards", "rider", "riders", "rides", "ridge",
        "rises", "river", "rivers", "roads", "roses", "roster", "rover", "rubber",
        "rugged", "sacred", "sad", "safari", "safe", "safer", "safety", "sage",
        "salad", "sales", "samba", "santa", "sat", "sauce", "savage", "save",
        "saved", "saver", "saves", "saw", "scale", "scales", "scans", "scary",
        "scattered", "scattering", "scene", "scenes", "scent", "score", "scoreboard", "scored",
        "scores", "scrap", "scratch", "scream", "screen", "screened", "screens", "screensaver",
        "screensavers", "screw", "screws", "sea", "sealed", "search", "searchable", "searched",
        "seas", "seat", "seats", "secret", "secretariat", "secretaries", "secretary", "secrets",
        "sector", "sectors", "secure", "secured", "see", "seed", "seeds", "seeker",
        "seekers", "seeks", "seemed", "seems", "sees", "select", "selected", "selects",
        "semester", "senate", "sender", "sends", "sense", "senses", "separate", "separated",
        "series", "servant", "servants", "serve", "served", "server", "servers", "serves",
        "service", "services", "set", "sets", "settle", "settled", "seven", "several",
        "severe", "sewer", "shade", "shades", "shaft", "share", "shared", "shares",
        "shareware", "shaved", "sheer", "sheet", "sheets", "sides", "sierra", "sister",
        "sisters", "sites", "sized", "sizes", "skate", "slate", "sleeve", "sleeves",
        "smart", "soccer", "software", "sorted", "sorts", "space", "spacecraft", "spaces",
        "spare", "spears", "speed", "speeds", "spread", "spreads", "spreadsheet", "squad",
        "square", "squares", "stable", "stack", "staff", "stage", "stages", "stairs",
        "stakes", "stance", "stand", "standard", "standardized", "standards", "stands", "star",
        "stare", "stars", "start", "started", "starter", "starts", "state", "stated",
        "statements", "states", "statewide", "static", "statistics", "stats", "statue", "status",
        "statute", "statutes", "stayed", "stays", "steady", "steak", "steal", "steam",
        "steel", "steep", "steps", "stereo", "stern", "stiff", "storage", "store",
        "stored", "stores", "stove", "straightforward", "strand", "strange", "stranger", "strategic",
        "strategies", "strategy", "straw", "strawberry", "streak", "stream", "streams", "street",
        "streets", "stress", "stressed", "stretch", "stretched", "strict", "strive", "structured",
        "structures", "stuff", "stuffed", "subscriber", "subscribers", "subset", "substances", "succeed",
        "succeeded", "success", "successes", "suffer", "suffered", "sugar", "suggest", "suggested",
        "suggests", "surface", "surfaces", "surge", "sweat", "sweater", "sweatshirt", "sweep",
        "sweet", "swift", "sword", "tab", "table", "tables", "tablet", "tablets",
        "tabs", "tactics", "tag", "tagged", "tags", "takes", "tales", "tapes",
        "tar", "target", "targeted", "targets", "tariff", "tasks", "taste", "tastes",
        "tasty", "tax", "taxable", "taxes", "tea", "teach", "teacher", "teachers",
        "teaches", "teams", "tear", "tears", "tee", "teenage", "teenagers", "teens",
        "teeth", "tender", "tends", "tents", "terms", "terrace", "terror", "terrorists",
        "test", "tested", "tests", "tex", "text", "texts", "texture", "theater",
        "theft", "there", "thereafter", "these", "thread", "threaded", "threads", "three",
        "threw", "tiger", "tigers", "tired", "tires", "toast", "toward", "towards",
        "tower", "towers", "trace", "traces", "track", "trackbacks", "tracked", "tracker",
        "tracks", "tract", "tractor", "trade", "traded", "trademarks", "trader", "traders",
        "trades", "traffic", "tragedy", "tragic", "trance", "transfer", "transferred", "transfers",
        "translated", "traps", "trash", "travel", "traveled", "traveler", "travelers", "travels",
        "treasure", "treasurer", "treasures", "treat", "treated", "treatments", "treats", "treaty",
        "tree", "trees", "trend", "trends", "tribe", "tribes", "tried", "tries",
        "trigger", "trust", "trusted", "trustee", "trustees", "trusts", "tubes", "twelve",
        "twice", "twist", "twisted", "underwater", "urged", "usage", "users", "valve",
        "valves", "varied", "varies", "vase", "vast", "vat", "vector", "vectors",
        "vegetable", "vegetables", "vegetarian", "velvet", "verb", "verbal", "verse", "versus",
        "vertex", "vessel", "vessels", "vest", "veteran", "veterans", "viewed", "viewer",
        "viewers", "views", "vista", "voted", "voter", "voters", "votes", "wade",
        "wage", "wages", "waist", "waited", "waiver", "wanted", "wants", "ward",
        "wardrobe", "ware", "warned", "warrant", "warranties", "warren", "wars", "was",
        "washed", "washer", "waste", "wasted", "wastes", "watch", "watched", "watches",
        "water", "waterfront", "waters", "watershed", "watt", "watts", "wave", "waves",
        "wax", "we", "weaknesses", "wear", "weather", "weaver", "web", "webcam",
        "webcams", "webcast", "webcasts", "webmaster", "webmasters", "webpage", "webs", "website",
        "websites", "wed", "weed", "weeks", "weird", "welfare", "were", "west",
        "western", "wet", "whatever", "whatsoever", "wheat", "where", "whereas", "wherever",
        "wider", "widescreen", "widespread", "widget", "wired", "wires", "wives", "wizard",
        "wizards", "words", "worse", "worst", "wrist", "write", "writer", "writers",
        "writes", "wrote", "yards", "years", "yeast", "•",
    ],
    
    // Right hand words (at least 97% right hand letters)
    rightHand: [
        "ohio", "i", "pokemon", "july", "london", "polish", "alloy", "muslim",
        "amino", "apply", "joke", "billion", "blink", "bloom", "bunny", "chili",
        "chill", "colon", "colony", "column", "common", "commonly", "comply", "coupon",
        "dolphin", "domino", "employ", "enjoy", "floppy", "fully", "funky", "funny",
        "happily", "happy", "hello", "hi", "highly", "hiking", "hill", "hills",
        "him", "hip", "ho", "hollow", "holy", "honey", "honeymoon", "honor",
        "hook", "hooks", "hoop", "hop", "hoping", "hourly", "hull", "human",
        "humor", "hymn", "ill", "illusion", "immune", "immunity", "imply",
        "in", "inhibition", "injury", "ink", "inline", "inn", "input", "insulin",
        "jelly", "join", "joining", "joins", "joint", "joy", "juicy", "jump",
        "jumping", "junior", "junk", "kill", "killing", "kills", "kindly", "kiosk",
        "knock", "known", "lemon", "likelihood", "likely", "limit", "link", "linking",
        "links", "lion", "lions", "lip", "lithium", "login", "lonely", "look",
        "looking", "looks", "lookup", "loom", "loop", "loops", "lotion", "loyal",
        "lucky", "lunch", "lying", "mainly", "milk", "mill", "millennium", "million",
        "millions", "mills", "minimal", "minimum", "mining", "minor", "minus", "money",
        "monk", "monkey", "monopoly", "month", "monthly", "moody", "moon", "mop",
        "motion", "mount", "mouth", "multi", "my", "nil", "ninja", "ninth",
        "no", "noisy", "nominal", "nomination", "noon", "notion", "noun", "null",
        "nylon", "oil", "olympic", "olympus", "on", "onion", "online", "only",
        "opinion", "opinions", "opposition", "optimum", "option", "outlook", "penny", "phenomenon",
        "philosophy", "phone", "photo", "physiology", "piano", "pickup", "pill", "pillow",
        "pills", "pilot", "pin", "pink", "plain", "ploy", "plugin", "plump",
        "plush", "point", "poison", "policy", "poll", "polls", "pollution", "polo",
        "polyphonic", "pony", "pool", "pools", "poorly", "pop", "population", "pouch",
        "pound", "promo", "pull", "pulling", "pulls", "pump", "pumping", "pumpkin",
        "pumps", "punch", "punk", "pupil", "pupils", "puppy", "python", "silly",
        "simply", "skill", "skinny", "skull", "spill", "spoon", "sunny", "supply",
        "symphony", "think", "union", "unions", "unity", "unknown", "unlike", "unlikely",
        "unlock", "until", "up", "upon", "vinyl", "violin", "you", "young",
        "youth", "•",
    ],
};

// Track used words to prevent repetition
let usedWords = [];

// Clear used words when switching modes
function resetUsedWords() {
    usedWords = [];
}

// Filter words based on mode (hand or finger)
function getWordsByMode(mode) {
    // Use specialized word lists if available
    if (specializedWords[mode] && specializedWords[mode].length > 0) {
        return specializedWords[mode];
    }
    
    // Fall back to filtering common words if no specialized list exists
    if (!keyboardMap[mode]) return commonWords;
    
    return commonWords.filter(word => {
        // For hands and rows, calculate percentage of matching characters
        const chars = word.split('');
        const matchingChars = chars.filter(char => keyboardMap[mode].includes(char));
        const percentage = (matchingChars.length / chars.length) * 100;
        
        // Require at least 97% of characters to match the selected mode
        return percentage >= 97;
    });
}

// Get a set of random non-repeating words based on mode and desired length
function getRandomWords(mode, totalLength) {
    const availableWords = getWordsByMode(mode);
    let result = [];
    let currentLength = 0;
    
    // Handle case where no words match the filter
    if (availableWords.length === 0) {
        return generateText(mode, totalLength);
    }
    
    // Create a copy of words list, excluding already used words
    let wordPool = availableWords.filter(word => !usedWords.includes(word));
    
    // If we've used all words, reset the pool
    if (wordPool.length === 0) {
        resetUsedWords();
        wordPool = [...availableWords];
    }
    
    while (currentLength < totalLength && wordPool.length > 0) {
        const randomIndex = Math.floor(Math.random() * wordPool.length);
        const randomWord = wordPool[randomIndex];
        
        result.push(randomWord);
        usedWords.push(randomWord);
        
        // Remove the used word from the pool
        wordPool.splice(randomIndex, 1);
        
        currentLength += randomWord.length + 1; // +1 for space
    }
    
    // If we need more words and have exhausted our pool, start over
    if (currentLength < totalLength && availableWords.length > 0) {
        resetUsedWords();
        const additionalWords = getRandomWords(mode, totalLength - currentLength);
        return result.join(' ') + ' ' + additionalWords;
    }
    
    return result.join(' ');
}

// Generate text for practice - using meaningful words for all modes
function generatePracticeText(mode, length) {
    // Always try to use real words first
    const wordText = getRandomWords(mode, length);
    
    // If we couldn't get enough meaningful words, fall back to random characters
    if (wordText.length < length / 2) {
        return generateText(mode, length);
    }
    
    return wordText;
}
