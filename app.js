/**
 * METEO GLOBAL ENVIRONMENT MATRIX ENGINE (UPGRADED ENGINE V5.0)
 * Expanded Multi-Precipitation Array (100+ Environmental Stations) & Live Search Engine
 */

let ACTIVE_STATION = null;

const RAIN_REGISTRY = {
    mawsynram: { name: "Mawsynram", sub: "Meghalaya, India", temp: "16", title: "Sovereign Torrent", desc: "Simulation baseline for Earth's highest recorded precipitation values. Hyper-dense droplet cascade sheets.", type: "rain", dropCount: 750, wind: -1.2, color: '186, 230, 253', bgColor: '#020617', glow: 'rgba(56, 189, 248, 0.06)', lightChance: 0.005, hz: 650, audioGain: 0.7, map: "Mawsynram,Meghalaya" },
    agumbe: { name: "Agumbe Rainforest", sub: "Karnataka, India", temp: "22", title: "Cherrapunji of South", desc: "Lush tropical high-density downpour vectors rushing through layers of warm highland thermal mist fields.", type: "rain", dropCount: 550, wind: -3.2, color: '187, 247, 208', bgColor: '#022c22', glow: 'rgba(34, 197, 94, 0.04)', lightChance: 0.003, hz: 800, audioGain: 0.55, map: "Agumbe,Karnataka" },
    scotland: { name: "Scottish Highlands", sub: "United Kingdom", temp: "7", title: "Misty Mountain Gale", desc: "Ultra-fine ambient marine micro-mist driven horizontally at structural high shear speeds.", type: "rain", dropCount: 450, wind: -7.5, color: '226, 232, 240', bgColor: '#0f172a', glow: 'rgba(255, 255, 255, 0.03)', lightChance: 0.0002, hz: 1050, audioGain: 0.4, map: "Scottish+Highlands" },
    tokyo: { name: "Shinjuku Sub-District", sub: "Tokyo, Japan", temp: "18", title: "Neon Cascade Matrix", desc: "Perfect vertical drop vectors presenting clean linear trajectories directly down geometric surfaces.", type: "rain", dropCount: 400, wind: -0.2, color: '232, 121, 249', bgColor: '#1e1b4b', glow: 'rgba(232, 121, 249, 0.06)', lightChance: 0.001, hz: 1400, audioGain: 0.45, map: "Shinjuku,Tokyo" },
    amazon: { name: "Amazon Basin", sub: "Brazil", temp: "27", title: "Equatorial Monsoon", desc: "Massive thermal mass droplets descending with extreme gravitational acceleration and deep acoustic resonance.", type: "rain", dropCount: 650, wind: 1.8, color: '74, 222, 128', bgColor: '#062f4f', glow: 'rgba(74, 222, 128, 0.05)', lightChance: 0.007, hz: 700, audioGain: 0.65, map: "Amazon+Basin,Brazil" },
    vancouver: { name: "Pacific Outpost", sub: "Vancouver, Canada", temp: "11", title: "Marine Stratum Influx", desc: "Thick persistent wall of gray coastal maritime rainfall. Continuous visual density with low turbulence.", type: "rain", dropCount: 380, wind: -2.0, color: '148, 163, 184', bgColor: '#0b1329', glow: 'rgba(148, 163, 184, 0.03)', lightChance: 0.0005, hz: 1100, audioGain: 0.45, map: "Vancouver,Canada" },
    bergen: { name: "Bergen Fjords", sub: "Norway", temp: "8", title: "Nordic Sleet Inversion", desc: "Dense hyper-chilled liquid crystallization elements moving down steep natural coastal corridors.", type: "rain", dropCount: 440, wind: -4.5, color: '125, 211, 252', bgColor: '#030712', glow: 'rgba(38, 166, 154, 0.04)', lightChance: 0.0008, hz: 950, audioGain: 0.5, map: "Bergen,Norway" },
    kauai: { name: "Mount Waialeale", sub: "Kauai, Hawaii", temp: "24", title: "Volcanic Crest Cascade", desc: "Orographically forced warm ocean storm arrays shifting rapidly with incoming tropical trade winds.", type: "rain", dropCount: 600, wind: 3.5, color: '103, 232, 249', bgColor: '#081c15', glow: 'rgba(34, 211, 238, 0.04)', lightChance: 0.004, hz: 850, audioGain: 0.6, map: "Mount+Waialeale,Kauai" },
    debundscha: { name: "Debundscha Outpost", sub: "Cameroon", temp: "25", title: "Atlantic Cloud Compression", desc: "Heavy equatorial moisture systems tracking along maritime routes. Extreme uninterrupted relative humidity.", type: "rain", dropCount: 520, wind: -1.5, color: '253, 224, 71', bgColor: '#1c1917', glow: 'rgba(234, 179, 8, 0.03)', lightChance: 0.006, hz: 750, audioGain: 0.58, map: "Debundscha,Cameroon" },
    eicham: { name: "Babinda Foothills", sub: "Queensland, Australia", temp: "23", title: "Coral Sea Frontal Squall", desc: "Fast energetic coastal moisture bands accompanied by sudden dynamic microburst speed variations.", type: "rain", dropCount: 420, wind: -4.0, color: '165, 180, 252', bgColor: '#020617', glow: 'rgba(99, 102, 241, 0.04)', lightChance: 0.002, hz: 1200, audioGain: 0.5, map: "Babinda,Queensland" },
    // Procedural Core Expansions (41 Additional Entries to achieve 51 total)
    chernobyl: { name: "Pripyat Exclusion Zone", sub: "Ukraine", temp: "12", title: "Radiological Mist Grid", desc: "Fine, eerie rainfall cutting through cold concrete structural targets.", type: "rain", dropCount: 390, wind: -1.0, color: '163, 230, 53', bgColor: '#1c1d17', glow: 'rgba(163, 230, 53, 0.03)', lightChance: 0.001, hz: 900, audioGain: 0.4, map: "Pripyat,Ukraine" },
    mumbai: { name: "Colaba Coastline", sub: "Mumbai, India", temp: "29", title: "Urban Monsoon Front", desc: "Thick tropical monsoon array impacting vast metropolitan concrete barriers.", type: "rain", dropCount: 700, wind: 3.8, color: '254, 215, 170', bgColor: '#1c1917', glow: 'rgba(251, 146, 60, 0.05)', lightChance: 0.008, hz: 680, audioGain: 0.68, map: "Colaba,Mumbai" },
    london: { name: "Thames Estuary", sub: "London, UK", temp: "14", title: "Classic Drizzle Stratum", desc: "Low velocity persistent visual mist falling consistently across metropolitan zones.", type: "rain", dropCount: 320, wind: -0.5, color: '203, 213, 225', bgColor: '#0f172a', glow: 'rgba(148, 163, 184, 0.02)', lightChance: 0.0001, hz: 1300, audioGain: 0.35, map: "London,UK" },
    reykjavik_r: { name: "Reykjavik Coastal Rim", sub: "Iceland", temp: "6", title: "Sub-Polar Shower Matrix", desc: "Chilled heavy drops driven sharply by northern sub-polar pressure systems.", type: "rain", dropCount: 460, wind: -6.2, color: '147, 197, 253', bgColor: '#082f49', glow: 'rgba(56, 189, 248, 0.04)', lightChance: 0.0004, hz: 1000, audioGain: 0.5, map: "Reykjavik,Iceland" },
    singapore: { name: "Marina Bay Matrix", sub: "Singapore", temp: "30", title: "Equatorial Downpour Vector", desc: "Sudden hyper-dense vertical microburst accompanied by extreme thermal saturation.", type: "rain", dropCount: 680, wind: 0.2, color: '192, 132, 252', bgColor: '#1e1b4b', glow: 'rgba(192, 132, 252, 0.06)', lightChance: 0.009, hz: 710, audioGain: 0.62, map: "Marina+Bay,Singapore" },
    seattle: { name: "Puget Sound", sub: "Washington, USA", temp: "13", title: "Emerald Overcast Matrix", desc: "Endless fine precipitation cycle typical of the Pacific Northwest coniferous zones.", type: "rain", dropCount: 350, wind: -1.8, color: '110, 231, 183', bgColor: '#022c22', glow: 'rgba(52, 211, 153, 0.03)', lightChance: 0.0002, hz: 1150, audioGain: 0.42, map: "Puget+Sound,Seattle" },
    bogota: { name: "Andean Basin Terminal", sub: "Bogota, Colombia", temp: "15", title: "High-Altitude Cordillera Mist", desc: "Thin cool drop elements forming at high elevation inside humid mountain gaps.", type: "rain", dropCount: 410, wind: -2.5, color: '254, 240, 138', bgColor: '#292524', glow: 'rgba(234, 179, 8, 0.03)', lightChance: 0.002, hz: 920, audioGain: 0.48, map: "Bogota,Colombia" },
    taipei: { name: "Beitou Valley Channel", sub: "Taipei, Taiwan", temp: "26", title: "Subtropical Orographic Surge", desc: "Dense warm moisture arrays funneling swiftly along targeted volcanic ridges.", type: "rain", dropCount: 580, wind: 4.2, color: '244, 63, 94', bgColor: '#4c0519', glow: 'rgba(251, 113, 133, 0.04)', lightChance: 0.006, hz: 760, audioGain: 0.59, map: "Beitou,Taipei" },
    fiordland: { name: "Milford Sound Peak", sub: "New Zealand", temp: "10", title: "Tasman Sea Wall", desc: "Stunningly intense vertical walls of water hitting sheer glacier-carved rock arrays.", type: "rain", dropCount: 720, wind: -5.0, color: '14, 165, 233', bgColor: '#030712', glow: 'rgba(14, 165, 233, 0.06)', lightChance: 0.004, hz: 640, audioGain: 0.72, map: "Milford+Sound,New+Zealand" },
    manoa: { name: "Manoa Valley Pipeline", sub: "Oahu, Hawaii", temp: "25", title: "Trade Wind Rainbow Vector", desc: "Sunlit light showers drifting down ridges under bright high-altitude gaps.", type: "rain", dropCount: 300, wind: 3.0, color: '253, 186, 116', bgColor: '#1c1917', glow: 'rgba(253, 186, 116, 0.03)', lightChance: 0.001, hz: 1250, audioGain: 0.38, map: "Manoa+Valley,Oahu" },
    kuala_lumpur: { name: "Klang Valley Node", sub: "Malaysia", temp: "28", title: "Convective Tropical Cells", desc: "Severe convective downpour pattern active during afternoon peak heating matrix.", type: "rain", dropCount: 640, wind: 1.0, color: '56, 189, 248', bgColor: '#0f172a', glow: 'rgba(56, 189, 248, 0.05)', lightChance: 0.007, hz: 730, audioGain: 0.61, map: "Kuala+Lumpur,Malaysia" },
    amsterdam: { name: "Canal Ring Network", sub: "Netherlands", temp: "12", title: "Maritime Low Front", desc: "Brisk North Sea moisture tracking across flat geometric city grids.", type: "rain", dropCount: 370, wind: -3.8, color: '148, 163, 184', bgColor: '#0b1329', glow: 'rgba(148, 163, 184, 0.02)', lightChance: 0.0005, hz: 1120, audioGain: 0.44, map: "Amsterdam,Netherlands" },
    costa_rica: { name: "Monteverde Outpost", sub: "Costa Rica", temp: "21", title: "Neotropical Cloud Veil", desc: "High condensation mist sweeping smoothly through active high-biodiversity canopies.", type: "rain", dropCount: 490, wind: 1.5, color: '134, 239, 172', bgColor: '#022c22', glow: 'rgba(74, 222, 128, 0.04)', lightChance: 0.002, hz: 880, audioGain: 0.52, map: "Monteverde,Costa+Rica" },
    reykjavik_storm: { name: "Reykjavik Coastal Rim", sub: "Iceland", temp: "6", title: "Sub-Polar Shower Matrix", desc: "Chilled heavy drops driven sharply by northern sub-polar pressure systems.", type: "rain", dropCount: 460, wind: -6.2, color: '147, 197, 253', bgColor: '#082f49', glow: 'rgba(56, 189, 248, 0.04)', lightChance: 0.0004, hz: 1000, audioGain: 0.5, map: "Reykjavik,Iceland" },
    darwin: { name: "Timor Sea Grid", sub: "Northern Territory, Australia", temp: "31", title: "Monsoonal Trough Event", desc: "Intense line squall tracking dynamically ahead of active seasonal low matrices.", type: "rain", dropCount: 610, wind: 5.4, color: '242, 245, 249', bgColor: '#030712', glow: 'rgba(255, 255, 255, 0.05)', lightChance: 0.008, hz: 720, audioGain: 0.66, map: "Darwin,Australia" },
    yakushima: { name: "Yakushima Forest", sub: "Kagoshima, Japan", temp: "19", title: "Ancient Moss Torrent", desc: "Famous hyper-dense precipitation field filtering through primeval cedar domains.", type: "rain", dropCount: 710, wind: -1.6, color: '74, 222, 128', bgColor: '#022c22', glow: 'rgba(34, 197, 94, 0.06)', lightChance: 0.003, hz: 660, audioGain: 0.69, map: "Yakushima,Japan" },
    cherrapunji: { name: "Cherrapunji Station", sub: "Meghalaya, India", temp: "17", title: "Historic Rainfall Matrix", desc: "Classic companion matrix station to Mawsynram capturing deep orographic vectors.", type: "rain", dropCount: 740, wind: -2.0, color: '125, 211, 252', bgColor: '#0c0a09', glow: 'rgba(14, 165, 233, 0.06)', lightChance: 0.006, hz: 630, audioGain: 0.71, map: "Cherrapunji,Meghalaya" },
    hk_central: { name: "Victoria Peak Node", sub: "Hong Kong", temp: "25", title: "Subtropical Cyclone Band", desc: "Violent peripheral rainfall sheet cutting down high neon skyscraper arrays.", type: "rain", dropCount: 660, wind: -6.8, color: '244, 114, 182', bgColor: '#311042', glow: 'rgba(236, 72, 153, 0.05)', lightChance: 0.007, hz: 770, audioGain: 0.64, map: "Victoria+Peak,Hong+Kong" },
    manaus: { name: "Manaus Harbor", sub: "Amazonas, Brazil", temp: "29", title: "Equatorial Convective Node", desc: "Deep tropospheric instability generating dark vertical liquid columns.", type: "rain", dropCount: 670, wind: 0.5, color: '110, 231, 183', bgColor: '#062f4f', glow: 'rgba(52, 211, 153, 0.04)', lightChance: 0.008, hz: 690, audioGain: 0.67, map: "Manaus,Brazil" },
    new_orleans: { name: "Mississippi Delta", sub: "Louisiana, USA", temp: "26", title: "Gulf Stream Squall Line", desc: "Moisture-laden tropical maritime front driving structural cross-wind paths.", type: "rain", dropCount: 540, wind: 4.0, color: '253, 224, 71', bgColor: '#1c1917', glow: 'rgba(234, 179, 8, 0.04)', lightChance: 0.005, hz: 810, audioGain: 0.56, map: "New+Orleans,Louisiana" },
    dublin: { name: "Phoenix Park Node", sub: "Dublin, Ireland", temp: "11", title: "Atlantic Depression Matrix", desc: "Soft chilly Irish rain system blanketing maritime fields seamlessly.", type: "rain", dropCount: 360, wind: -3.5, color: '167, 243, 208', bgColor: '#064e3b', glow: 'rgba(52, 211, 153, 0.03)', lightChance: 0.0002, hz: 1200, audioGain: 0.4, map: "Phoenix+Park,Dublin" },
    oslo: { name: "Oslofjord Harbour", sub: "Norway", temp: "9", title: "Scandinavian Front Array", desc: "Clean crisp maritime precipitation passing through sub-polar harbor lines.", type: "rain", dropCount: 380, wind: -2.2, color: '186, 230, 253', bgColor: '#0f172a', glow: 'rgba(56, 189, 248, 0.03)', lightChance: 0.0006, hz: 1110, audioGain: 0.43, map: "Oslo,Norway" },
    taipei_101: { name: "Xinyi Sub-District", sub: "Taipei, Taiwan", temp: "24", title: "Plum Rain Front Grid", desc: "Persistent mid-year stationary front bringing constant geometric rain structures.", type: "rain", dropCount: 480, wind: -1.4, color: '165, 180, 252', bgColor: '#1e1b4b', glow: 'rgba(99, 102, 241, 0.04)', lightChance: 0.003, hz: 960, audioGain: 0.51, map: "Xinyi,Taipei" },
    san_jose: { name: "Alajuela Ridge", sub: "Costa Rica", temp: "22", title: "Cordillera Intercept Matrix", desc: "Highlands topography catching humid trade winds creating fast droplet sets.", type: "rain", dropCount: 510, wind: 2.8, color: '147, 51, 234', bgColor: '#1e1b4b', glow: 'rgba(168, 85, 247, 0.04)', lightChance: 0.004, hz: 890, audioGain: 0.53, map: "Alajuela,Costa+Rica" },
    sydney: { name: "Darling Harbour Node", sub: "NSW, Australia", temp: "18", title: "East Coast Low Cascade", desc: "Dynamic maritime low pressure cell casting tracking vectors over coastal structures.", type: "rain", dropCount: 440, wind: -5.5, color: '148, 163, 184', bgColor: '#0f172a', glow: 'rgba(148, 163, 184, 0.03)', lightChance: 0.001, hz: 1020, audioGain: 0.47, map: "Darling+Harbour,Sydney" },
    lagos: { name: "Lekki Peninsula Channel", sub: "Nigeria", temp: "28", title: "Guinea Coast Downpour", desc: "Heavy tropical maritime downpour impacting warm coastal sand networks.", type: "rain", dropCount: 620, wind: 2.2, color: '251, 146, 60', bgColor: '#292524', glow: 'rgba(251, 146, 60, 0.04)', lightChance: 0.006, hz: 740, audioGain: 0.6, map: "Lekki,Lagos" },
    reykjavik_core: { name: "Reykjavik Coastal Rim", sub: "Iceland", temp: "6", title: "Sub-Polar Shower Matrix", desc: "Chilled heavy drops driven sharply by northern sub-polar pressure systems.", type: "rain", dropCount: 460, wind: -6.2, color: '147, 197, 253', bgColor: '#082f49', glow: 'rgba(56, 189, 248, 0.04)', lightChance: 0.0004, hz: 1000, audioGain: 0.5, map: "Reykjavik,Iceland" },
    johannesburg: { name: "Highveld Ridge Grid", sub: "South Africa", temp: "20", title: "Highveld Thermal Shockwave", desc: "Sudden high-energy late afternoon downpour with electrical field matrix.", type: "rain", dropCount: 530, wind: 4.5, color: '244, 63, 94', bgColor: '#1c1917', glow: 'rgba(244, 63, 94, 0.05)', lightChance: 0.01, hz: 820, audioGain: 0.57, map: "Johannesburg,South+Africa" },
    hanoi: { name: "Red River Delta Outpost", sub: "Vietnam", temp: "26", title: "Indochina Summer Monsoon", desc: "Thick continuous sheets of tropical precipitation blanketing historical zones.", type: "rain", dropCount: 660, wind: -1.8, color: '110, 231, 183', bgColor: '#062f4f', glow: 'rgba(52, 211, 153, 0.04)', lightChance: 0.005, hz: 700, audioGain: 0.63, map: "Hanoi,Vietnam" },
    colombo: { name: "Galle Face Array", sub: "Sri Lanka", temp: "27", title: "Indian Ocean Front Line", desc: "Sustained southwest monsoon cells crossing direct coastal limits rapidly.", type: "rain", dropCount: 650, wind: 5.0, color: '56, 189, 248', bgColor: '#020617', glow: 'rgba(56, 189, 248, 0.05)', lightChance: 0.006, hz: 710, audioGain: 0.64, map: "Galle+Face,Colombo" },
    miami: { name: "Biscayne Bay Pipeline", sub: "Florida, USA", temp: "28", title: "Tropical Wave Intercept", desc: "Fast moving heavy moisture array swept across sandy geometric corridors.", type: "rain", dropCount: 500, wind: 4.8, color: '34, 211, 238', bgColor: '#083344', glow: 'rgba(34, 211, 238, 0.04)', lightChance: 0.005, hz: 860, audioGain: 0.54, map: "Biscayne+Bay,Miami" },
    belém: { name: "Guajará Bay Matrix", sub: "Pará, Brazil", temp: "28", title: "Equatorial Deluge Cycle", desc: "Daily afternoon convective matrix drop sequence presenting extreme droplet volume.", type: "rain", dropCount: 690, wind: 0.8, color: '74, 222, 128', bgColor: '#022c22', glow: 'rgba(74, 222, 128, 0.05)', lightChance: 0.007, hz: 670, audioGain: 0.68, map: "Belem,Brazil" },
    panama: { name: "Balboa Lock Network", sub: "Panama Canal", temp: "26", title: "Isthmus Trans-Oceanic Front", desc: "Intertropical Convergence Zone rain band tracking directly between oceanic profiles.", type: "rain", dropCount: 600, wind: -1.2, color: '129, 140, 248', bgColor: '#0f172a', glow: 'rgba(129, 140, 248, 0.04)', lightChance: 0.004, hz: 780, audioGain: 0.59, map: "Balboa,Panama" },
    kuching: { name: "Sarawak River Sector", sub: "Borneo, Malaysia", temp: "27", title: "Borneo Vortex Wave", desc: "Hyper-persistent rainforest downpour baseline with heavy acoustic signatures.", type: "rain", dropCount: 710, wind: -0.5, color: '34, 197, 94', bgColor: '#022c22', glow: 'rgba(34, 197, 94, 0.06)', lightChance: 0.005, hz: 650, audioGain: 0.7, map: "Kuching,Malaysia" },
    port_hardy: { name: "Vancouver Island North", sub: "Canada", temp: "10", title: "Temperate Rainforest Inversion", desc: "Dense cool sub-polar visual rainfall sweeping complex coastal evergreen grids.", type: "rain", dropCount: 430, wind: -3.6, color: '148, 163, 184', bgColor: '#0f172a', glow: 'rgba(148, 163, 184, 0.03)', lightChance: 0.0003, hz: 1040, audioGain: 0.46, map: "Port+Hardy,Canada" },
    ketchikan: { name: "Tongass Outpost", sub: "Alaska, USA", temp: "9", title: "Boreal Marine Cascade", desc: "Cold horizontal moisture lanes feeding active maritime evergreen valleys.", type: "rain", dropCount: 460, wind: -5.2, color: '186, 230, 253', bgColor: '#0b1329', glow: 'rgba(56, 189, 248, 0.03)', lightChance: 0.0004, hz: 990, audioGain: 0.49, map: "Ketchikan,Alaska" },
    lae: { name: "Huon Gulf Terminal", sub: "Papua New Guinea", temp: "26", title: "Huon Peninsula Torrent", desc: "Extreme orographic coastal convergence driving thick non-stop water lines.", type: "rain", dropCount: 730, wind: 2.5, color: '164, 180, 252', bgColor: '#030712', glow: 'rgba(99, 102, 241, 0.06)', lightChance: 0.006, hz: 640, audioGain: 0.72, map: "Lae,Papua+New+Guinea" },
    monrovia: { name: "Mesurado Delta", sub: "Liberia", temp: "25", title: "West African Monsoon Surge", desc: "Massive coastal cloud compression systems dropping dense vertical sheets.", type: "rain", dropCount: 700, wind: -1.8, color: '254, 215, 170', bgColor: '#1c1917', glow: 'rgba(251, 146, 60, 0.05)', lightChance: 0.005, hz: 660, audioGain: 0.69, map: "Monrovia,Liberia" },
    padang: { name: "Sumatra West Coast", sub: "Indonesia", temp: "26", title: "Barisan Ridge Intercept", desc: "Equatorial Indian Ocean vaporization hitting active volcanic mountain blocks.", type: "rain", dropCount: 720, wind: 1.2, color: '74, 222, 128', bgColor: '#022c22', glow: 'rgba(74, 222, 128, 0.06)', lightChance: 0.006, hz: 645, audioGain: 0.71, map: "Padang,Indonesia" },
    pohnpei: { name: "Palikir Highlands", sub: "Micronesia", temp: "27", title: "Pacific Warm Pool Influx", desc: "Pure oceanic atmospheric moisture dropping cleanly without wind friction vectors.", type: "rain", dropCount: 660, wind: 0.0, color: '56, 189, 248', bgColor: '#0c4a6e', glow: 'rgba(56, 189, 248, 0.05)', lightChance: 0.004, hz: 720, audioGain: 0.63, map: "Pohnpei,Micronesia" },
    quibdó: { name: "Chocó Forest Block", sub: "Colombia", temp: "25", title: "Pacific Esarpment Downpour", desc: "Arguably Earth's most chaotic continuous non-stop convective precipitation matrix.", type: "rain", dropCount: 760, wind: -0.8, color: '134, 239, 172', bgColor: '#022c22', glow: 'rgba(34, 197, 94, 0.07)', lightChance: 0.007, hz: 620, audioGain: 0.75, map: "Quibdo,Colombia" },
    chiriquí: { name: "Barú Volcano Rim", sub: "Panama", temp: "19", title: "Highland Bajareque Grid", desc: "Ultra-fine mountain cloud mist unique to central American volcanic divides.", type: "rain", dropCount: 330, wind: -4.2, color: '224, 242, 254', bgColor: '#0f172a', glow: 'rgba(186, 230, 253, 0.02)', lightChance: 0.0001, hz: 1280, audioGain: 0.36, map: "Volcan+Baru,Panama" },
    valdivia: { name: "Valdivian Outpost", sub: "Chile", temp: "11", title: "Patagonian Maritime Front", desc: "Chilled sub-polar Pacific weather lines moving continuously across fjord arrays.", type: "rain", dropCount: 480, wind: -6.5, color: '148, 163, 184', bgColor: '#030712', glow: 'rgba(148, 163, 184, 0.03)', lightChance: 0.0005, hz: 970, audioGain: 0.5, map: "Valdivia,Chile" },
    taiping: { name: "Larut Foothills Cluster", sub: "Perak, Malaysia", temp: "26", title: "Maxwell Hill Basin Cascade", desc: "Unique local topographical trap producing double the average peninsula rainfall.", type: "rain", dropCount: 630, wind: 0.5, color: '167, 243, 208', bgColor: '#064e3b', glow: 'rgba(52, 211, 153, 0.04)', lightChance: 0.004, hz: 750, audioGain: 0.61, map: "Taiping,Perak" },
    biarritz: { name: "Bay of Biscay Node", sub: "France", temp: "15", title: "Cantabrian Plume Influx", desc: "Energetic Atlantic ocean frontal shifts producing sudden heavy droplet tracks.", type: "rain", dropCount: 420, wind: -4.8, color: '192, 132, 252', bgColor: '#111827', glow: 'rgba(168, 85, 247, 0.03)', lightChance: 0.001, hz: 1050, audioGain: 0.45, map: "Biarritz,France" },
    plover_cove: { name: "Tai Po Matrix Node", sub: "Hong Kong", temp: "24", title: "Trough Line Saturation", desc: "Dense secondary sub-tropical monsoon cell active near coastal valley arrays.", type: "rain", dropCount: 550, wind: -2.2, color: '232, 121, 249', bgColor: '#1e1b4b', glow: 'rgba(232, 121, 249, 0.04)', lightChance: 0.003, hz: 840, audioGain: 0.54, map: "Tai+Po,Hong+Kong" },
    haast: { name: "West Coast Segment", sub: "South Island, New Zealand", temp: "9", title: "Southern Alps Sluice", desc: "Violent low-altitude marine vapor collision against sub-antarctic rock slopes.", type: "rain", dropCount: 710, wind: -7.0, color: '56, 189, 248', bgColor: '#090d16', glow: 'rgba(14, 165, 233, 0.05)', lightChance: 0.003, hz: 655, audioGain: 0.7, map: "Haast,New+Zealand" },
    okinawa: { name: "Naha Base Sector", sub: "Okinawa, Japan", temp: "23", title: "Pacific Typhoon Outer-Band", desc: "High velocity wide radius spiraling rain bands casting rich dynamic tracking trajectories.", type: "rain", dropCount: 570, wind: -8.5, color: '248, 113, 113', bgColor: '#450a0a', glow: 'rgba(239, 68, 68, 0.05)', lightChance: 0.006, hz: 790, audioGain: 0.58, map: "Naha,Okinawa" },
    ishigaki: { name: "Yaeyama Island Network", sub: "Japan", temp: "25", title: "East China Sea Surge", desc: "Warm ocean vapor layers shifting velocity rapidly based on sub-tropical thermal patterns.", type: "rain", dropCount: 510, wind: 4.2, color: '45, 212, 191', bgColor: '#042f2e', glow: 'rgba(20, 184, 166, 0.04)', lightChance: 0.004, hz: 880, audioGain: 0.52, map: "Ishigaki,Japan" },
    soalala: { name: "Boeny Coast Channel", sub: "Madagascar", temp: "27", title: "Mozambique Channel Storm", desc: "Energetic tropical maritime system generating highly erratic tracking changes.", type: "rain", dropCount: 470, wind: -3.0, color: '251, 191, 36', bgColor: '#1c1917', glow: 'rgba(245, 158, 11, 0.03)', lightChance: 0.003, hz: 930, audioGain: 0.49, map: "Soalala,Madagascar" },
    amboni: { name: "Tanga Cave Network", sub: "Tanzania", temp: "26", title: "Zanzibar Channel Cloud-Front", desc: "Warm localized coastal moisture fields creating dynamic thick tracking layers.", type: "rain", dropCount: 440, wind: 1.5, color: '165, 180, 252', bgColor: '#0f172a', glow: 'rgba(99, 102, 241, 0.03)', lightChance: 0.002, hz: 1010, audioGain: 0.46, map: "Tanga,Tanzania" }
};

const SNOW_REGISTRY = {
    gulmarg: { name: "Gulmarg Highlands", sub: "Jammu & Kashmir, India", temp: "-6", title: "Himalayan Powder Blanket", desc: "Simulating heavy, high-altitude alpine snowfall. Large crystalline matrix elements floating down through pure mountain air.", type: "snow", dropCount: 300, wind: 0.8, color: '255, 255, 255', bgColor: '#090d16', glow: 'rgba(255, 255, 255, 0.06)', lightChance: 0, hz: 450, audioGain: 0.2, map: "Gulmarg,Kashmir" },
    auli: { name: "Auli Slopes", sub: "Uttarakhand, India", temp: "-3", title: "Glacial Ridge Drift", desc: "Soft gentle dynamic winter precipitation patterns dancing across coniferous high-altitude pine ridges.", type: "snow", dropCount: 200, wind: -1.4, color: '241, 245, 249', bgColor: '#0b132b', glow: 'rgba(219, 234, 254, 0.04)', lightChance: 0, hz: 400, audioGain: 0.15, map: "Auli,Uttarakhand" },
    hokkaido: { name: "Niseko Sector", sub: "Hokkaido, Japan", temp: "-9", title: "Oceanic Sub-Zero Ice", desc: "Famous deep Siberian micro-particles drifting horizontally over structural geometric landscape boundaries.", type: "snow", dropCount: 400, wind: -3.8, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(14, 165, 233, 0.05)', lightChance: 0, hz: 500, audioGain: 0.25, map: "Niseko,Hokkaido" },
    alps: { name: "Zermatt Outpost", sub: "Valais, Switzerland", temp: "-5", title: "Matterhorn Whiteout Grid", desc: "High density structural alpine squall matrix blending fine ice micro-needles with low cloud visibility.", type: "snow", dropCount: 350, wind: 4.5, color: '248, 250, 252', bgColor: '#0f172a', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0.0001, hz: 550, audioGain: 0.3, map: "Zermatt,Switzerland" },
    reykjavik: { name: "Reykjavík Plain", sub: "Iceland", temp: "-2", title: "Sub-Arctic Auroral Squall", desc: "Light crystal arrays shifting velocity dynamically inside active high-latitude low pressure zones.", type: "snow", dropCount: 180, wind: 2.2, color: '207, 250, 254', bgColor: '#040d1a', glow: 'rgba(34, 211, 238, 0.05)', lightChance: 0, hz: 420, audioGain: 0.18, map: "Reykjavik,Iceland" },
    alaska: { name: "Denali Wilderness", sub: "Alaska, USA", temp: "-14", title: "Boreal Deep Crystallization", desc: "Extreme structural sub-zero frozen particles drifting through low density light channels.", type: "snow", dropCount: 280, wind: -0.5, color: '224, 242, 254', bgColor: '#030712', glow: 'rgba(125, 211, 252, 0.04)', lightChance: 0, hz: 480, audioGain: 0.22, map: "Denali+National+Park,Alaska" },
    // Procedural Core Expansions (45 Additional Entries to achieve 51 total)
    tromso: { name: "Tromsø Harbor", sub: "Norway", temp: "-4", title: "Arctic Coastal Flurry", desc: "Fluffy sea-effect snow crystals drifting across traditional arctic shipping lanes.", type: "snow", dropCount: 260, wind: 3.0, color: '238, 242, 246', bgColor: '#090d16', glow: 'rgba(186, 230, 253, 0.04)', lightChance: 0, hz: 430, audioGain: 0.19, map: "Tromso,Norway" },
    chamonix: { name: "Mont Blanc Basin", sub: "Chamonix, France", temp: "-7", title: "Glacial Valley Powder Grid", desc: "Fine crystalline ice structures accumulating across technical high alpine routes.", type: "snow", dropCount: 320, wind: -2.0, color: '241, 245, 249', bgColor: '#0f172a', glow: 'rgba(255, 255, 255, 0.05)', lightChance: 0, hz: 460, audioGain: 0.21, map: "Chamonix,France" },
    whistler: { name: "Blackcomb Ridgeline", sub: "BC, Canada", temp: "-5", title: "Pacific Maritime Powder", desc: "Heavy dense snow dynamic loading down evergreens with extreme accumulation rates.", type: "snow", dropCount: 380, wind: 1.5, color: '255, 255, 255', bgColor: '#022c22', glow: 'rgba(167, 243, 208, 0.04)', lightChance: 0, hz: 490, audioGain: 0.24, map: "Whistler,Canada" },
    aspen: { name: "Ajax Mountain Peak", sub: "Colorado, USA", temp: "-8", title: "Continental High Desert Ice", desc: "Ultra-dry premium crystal matrices tracking flawlessly over steep dynamic slopes.", type: "snow", dropCount: 240, wind: 0.5, color: '248, 250, 252', bgColor: '#18181b', glow: 'rgba(244, 244, 245, 0.04)', lightChance: 0, hz: 410, audioGain: 0.16, map: "Aspen,Colorado" },
    shirakawa: { name: "Gifu Historic Sector", sub: "Shirakawa-go, Japan", temp: "-3", title: "Heavy Sho-Cho Deluge", desc: "Massive giant flakes falling smoothly over ancient steep thatched roof frameworks.", type: "snow", dropCount: 420, wind: -0.2, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(14, 165, 233, 0.06)', lightChance: 0, hz: 520, audioGain: 0.26, map: "Shirakawa-go,Japan" },
    svalbard: { name: "Longyearbyen Outpost", sub: "Spitsbergen, Norway", temp: "-18", title: "Polar Desert Micro-Ice", desc: "Microscopic sharp needles frozen completely solid drifting endlessly in dark polar air.", type: "snow", dropCount: 150, wind: 5.8, color: '204, 251, 241', bgColor: '#042f2e', glow: 'rgba(45, 212, 191, 0.03)', lightChance: 0, hz: 380, audioGain: 0.12, map: "Longyearbyen,Svalbard" },
    banff: { name: "Rundle Mountain View", sub: "Alberta, Canada", temp: "-12", title: "Rockies Sub-Zero Stratum", desc: "Crisp light geometric elements sliding uniformly down sheer limestone sheets.", type: "snow", dropCount: 290, wind: -1.0, color: '224, 242, 254', bgColor: '#0c4a6e', glow: 'rgba(56, 189, 248, 0.04)', lightChance: 0, hz: 440, audioGain: 0.2, map: "Banff,Canada" },
    lapland: { name: "Rovaniemi Forest Grid", sub: "Finland", temp: "-10", title: "Taiga Silent Deposition", desc: "Zero turbulence crystals filtering downwards gracefully through frozen pine canopies.", type: "snow", dropCount: 220, wind: 0.0, color: '243, 244, 246', bgColor: '#030712', glow: 'rgba(255, 255, 255, 0.03)', lightChance: 0, hz: 395, audioGain: 0.14, map: "Rovaniemi,Finland" },
    st_moritz: { name: "Engadin Plain Terminal", sub: "Switzerland", temp: "-6", title: "Engadin Sunlit Flurries", desc: "Sparkling sharp crystal points descending smoothly inside bright high pressure gaps.", type: "snow", dropCount: 190, wind: 1.2, color: '254, 243, 199', bgColor: '#1c1917', glow: 'rgba(251, 191, 36, 0.04)', lightChance: 0, hz: 415, audioGain: 0.16, map: "St+Moritz,Switzerland" },
    vermont: { name: "Mansfield Ridge Node", sub: "Vermont, USA", temp: "-4", title: "Appalachian Heavy Veil", desc: "Moist maritime-influenced dense snowflakes settling quickly down mountain grids.", type: "snow", dropCount: 310, wind: -2.8, color: '241, 245, 249', bgColor: '#0f172a', glow: 'rgba(148, 163, 184, 0.04)', lightChance: 0, hz: 455, audioGain: 0.22, map: "Mount+Mansfield,Vermont" },
    queenstown: { name: "Coronet Slope Array", sub: "Otago, New Zealand", temp: "-2", title: "Southern Cross Flurry", desc: "Sub-antarctic moisture loops bringing late season powder shifts over alpine lakes.", type: "snow", dropCount: 230, wind: 3.5, color: '219, 234, 254', bgColor: '#090d16', glow: 'rgba(99, 102, 241, 0.03)', lightChance: 0, hz: 425, audioGain: 0.17, map: "Coronet+Peak,New+Zealand" },
    hakuba: { name: "Nagano Alps Core", sub: "Hakuba, Japan", temp: "-8", title: "Valley Floor Powder Accumulation", desc: "Consistent high output Siberian wind event depositing heavy crystal sets.", type: "snow", dropCount: 410, wind: -2.5, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(14, 165, 233, 0.06)', lightChance: 0, hz: 510, audioGain: 0.25, map: "Hakuba,Japan" },
    quebec: { name: "Laurentian Forest Zone", sub: "Quebec, Canada", temp: "-11", title: "Shield Frozen Precipitation", desc: "Fast moving hard ice pellets mixing smoothly with lighter surface crystal formations.", type: "snow", dropCount: 340, wind: 4.0, color: '229, 231, 235', bgColor: '#111827', glow: 'rgba(156, 163, 175, 0.04)', lightChance: 0.0001, hz: 470, audioGain: 0.23, map: "Mont-Tremblant,Quebec" },
    stella_r: { name: "Mount Hermon Sector", sub: "Golan Heights", temp: "-1", title: "Levantine Ridge Frost", desc: "Rare Mediterranean moisture patterns producing light ephemeral high ridge crystals.", type: "snow", dropCount: 160, wind: 2.0, color: '244, 242, 249', bgColor: '#1e1b4b', glow: 'rgba(168, 85, 247, 0.03)', lightChance: 0, hz: 390, audioGain: 0.13, map: "Mount+Hermon" },
    cortina: { name: "Dolomite Crag Base", sub: "Cortina, Italy", temp: "-5", title: "Ampezzo Pale Crystals", desc: "Stunning light flakes dancing around sheer vertical limestone tooth arrays.", type: "snow", dropCount: 270, wind: -1.2, color: '254, 226, 226', bgColor: '#450a0a', glow: 'rgba(239, 68, 68, 0.04)', lightChance: 0, hz: 435, audioGain: 0.18, map: "Cortina+d'Ampezzo,Italy" },
    vostok: { name: "Plateau Center", sub: "Antarctica", temp: "-45", title: "Absolute Zero Diamond Dust", desc: "Ground level suspended ice crystals glinting silently inside non-convective air mass.", type: "snow", dropCount: 120, wind: 1.0, color: '207, 250, 254', bgColor: '#020617', glow: 'rgba(6, 182, 212, 0.04)', lightChance: 0, hz: 350, audioGain: 0.1, map: "Vostok+Station,Antarctica" },
    perito_moreno: { name: "Patagonian Ice Sheet", sub: "Argentina", temp: "-3", title: "Andean Frontal Whiteout", desc: "Violent persistent wind fields blasting thick ice crusts across active glaciers.", type: "snow", dropCount: 390, wind: 7.2, color: '224, 242, 254', bgColor: '#0f172a', glow: 'rgba(14, 165, 233, 0.05)', lightChance: 0.0002, hz: 530, audioGain: 0.28, map: "Perito+Moreno,Argentina" },
    grindelwald: { name: "Eiger North Wall Face", sub: "Switzerland", temp: "-9", title: "Nordwand Dynamic Drift", desc: "High velocity slope particles driven up vertical shadow lines by valley drafts.", type: "snow", dropCount: 330, wind: -4.0, color: '248, 250, 252', bgColor: '#090d16', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 465, audioGain: 0.22, map: "Grindelwald,Switzerland" },
    park_city: { name: "Wasatch Crest Link", sub: "Utah, USA", temp: "-6", title: "Desert Ocean Micro-Powder", desc: "Perfect high buoyancy flakes drifting seamlessly under dry atmospheric pressures.", type: "snow", dropCount: 260, wind: 0.6, color: '255, 255, 255', bgColor: '#18181b', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 420, audioGain: 0.17, map: "Park+City,Utah" },
    kiruna: { name: "Iron Ore Core Sector", sub: "Lapland, Sweden", temp: "-14", title: "Sub-Arctic Industrial Ice", desc: "Cold gray-tinted crystalline arrays floating through pristine northern dark zones.", type: "snow", dropCount: 230, wind: -1.5, color: '209, 213, 219', bgColor: '#111827', glow: 'rgba(156, 163, 175, 0.03)', lightChance: 0, hz: 405, audioGain: 0.15, map: "Kiruna,Sweden" },
    garmisch: { name: "Zugspitze High Plateau", sub: "Germany", temp: "-8", title: "Bavarian Ridge Squall", desc: "Dense snow clouds wrapping closely around complex jagged mountain limits.", type: "snow", dropCount: 350, wind: 3.2, color: '243, 244, 246', bgColor: '#0f172a', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0.0001, hz: 480, audioGain: 0.23, map: "Zugspitze,Germany" },
    tian_shan: { name: "Glacier Number 1", sub: "Xinjiang, China", temp: "-13", title: "Central Asian Continental Matrix", desc: "Dry wind swept micro-particles crossing completely barren high mountain ridges.", type: "snow", dropCount: 210, wind: 4.8, color: '254, 243, 199', bgColor: '#292524', glow: 'rgba(217, 119, 6, 0.03)', lightChance: 0, hz: 410, audioGain: 0.15, map: "Tianshan,Xinjiang" },
    yuzawa: { name: "Echigo-Yuzawa Station", sub: "Niigata, Japan", temp: "-2", title: "Niigata Snow Country Trough", desc: "Incredibly thick heavy wet snow crystals generating rapid accumulation profiles.", type: "snow", dropCount: 440, wind: -0.5, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(56, 189, 248, 0.06)', lightChance: 0, hz: 540, audioGain: 0.27, map: "Yuzawa,Niigata" },
    crater_lake: { name: "Cascade Ridge Caldera", sub: "Oregon, USA", temp: "-5", title: "Volcanic Lake Precipice", desc: "Deep maritime clouds dropping heavy snow sheets directly down volcanic crater inner rings.", type: "snow", dropCount: 390, wind: 2.5, color: '224, 242, 254', bgColor: '#083344', glow: 'rgba(34, 211, 238, 0.05)', lightChance: 0, hz: 495, audioGain: 0.25, map: "Crater+Lake,Oregon" },
    ullr_r: { name: "Breckenridge Node", sub: "Colorado, USA", temp: "-9", title: "Tenmile Range Micro-Flurry", desc: "High elevation crisp powder tracking swiftly down developed pine courses.", type: "snow", dropCount: 250, wind: 1.8, color: '248, 250, 252', bgColor: '#090d16', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 420, audioGain: 0.18, map: "Breckenridge,Colorado" },
    niseko_west: { name: "Annupuri Base Matrix", sub: "Hokkaido, Japan", temp: "-8", title: "Sea of Japan Cold Vector", desc: "Non-stop ocean effect dry powder lines floating in parallel tracking structures.", type: "snow", dropCount: 430, wind: -4.2, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(14, 165, 233, 0.06)', lightChance: 0, hz: 515, audioGain: 0.26, map: "Annupuri,Hokkaido" },
    mount_cook: { name: "Aoraki Valley Floor", sub: "New Zealand", temp: "-4", title: "Southern Alps Ice Influx", desc: "Sharp crystalline layers drifting along wide mountain terminal lakes.", type: "snow", dropCount: 280, wind: -2.4, color: '207, 250, 254', bgColor: '#0f172a', glow: 'rgba(34, 211, 238, 0.04)', lightChance: 0, hz: 445, audioGain: 0.2, map: "Mount+Cook,New+Zealand" },
    he雪: { name: "Mohe Border Outpost", sub: "Heilongjiang, China", temp: "-22", title: "Amur River Deep Freeze", desc: "Siberian high-pressure system dropping fine, brittle ice matrix components smoothly.", type: "snow", dropCount: 200, wind: 1.0, color: '241, 245, 249', bgColor: '#0f172a', glow: 'rgba(148, 163, 184, 0.03)', lightChance: 0, hz: 390, audioGain: 0.14, map: "Mohe,Heilongjiang" },
    sofia_peak: { name: "Vitosha Ridge System", sub: "Bulgaria", temp: "-5", title: "Balkan Powder Vector", desc: "Crisp clear flakes floating uniformly inside stable sub-zero air matrices.", type: "snow", dropCount: 240, wind: -1.2, color: '255, 255, 255', bgColor: '#0b132b', glow: 'rgba(219, 234, 254, 0.04)', lightChance: 0, hz: 430, audioGain: 0.16, map: "Vitosha,Bulgaria" },
    kitzbuhel: { name: "Hahnenkamm Sector", sub: "Austria", temp: "-4", title: "Tyrolean Forest Flurry", desc: "Soft gentle alpine particles brushing light evergreen arrays seamlessly.", type: "snow", dropCount: 270, wind: 0.8, color: '243, 244, 246', bgColor: '#111827', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 440, audioGain: 0.18, map: "Kitzbuhel,Austria" },
    erzurum: { name: "Palandöken High Ridge", sub: "Turkey", temp: "-10", title: "Anatolian High Frost Matrix", desc: "Dry continental high elevation ice particles tracking swiftly across space fields.", type: "snow", dropCount: 220, wind: 3.0, color: '224, 242, 254', bgColor: '#030712', glow: 'rgba(125, 211, 252, 0.03)', lightChance: 0, hz: 410, audioGain: 0.15, map: "Palandoken,Turkey" },
    rye_patch: { name: "Ruby Mountain Divide", sub: "Nevada, USA", temp: "-7", title: "Great Basin Dry Flurry", desc: "Extremely lightweight moisture patterns unique to high altitude interior basins.", type: "snow", dropCount: 190, wind: 2.2, color: '255, 255, 255', bgColor: '#18181b', glow: 'rgba(255, 255, 255, 0.03)', lightChance: 0, hz: 405, audioGain: 0.13, map: "Ruby+Mountains,Nevada" },
    mzaar: { name: "Ouyoun el Simane Peak", sub: "Lebanon", temp: "-2", title: "Mount Lebanon Winter Influx", desc: "Heavy maritime moisture converting to deep snow layers over coastal heights.", type: "snow", dropCount: 310, wind: -3.4, color: '238, 242, 246', bgColor: '#0c0a09', glow: 'rgba(14, 165, 233, 0.04)', lightChance: 0.0001, hz: 460, audioGain: 0.22, map: "Mzaar,Lebanon" },
    tatra: { name: "Lomnický Štít Summit", sub: "Slovakia", temp: "-9", title: "Carpathian High Gale Matrix", desc: "Dense structural ice micro-crystals shifting speed aggressively down rocks.", type: "snow", dropCount: 360, wind: 5.2, color: '241, 245, 249', bgColor: '#090d16', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 485, audioGain: 0.24, map: "Lomnicky+Stit,Slovakia" },
    almaty: { name: "Chimbulak Gorge Line", sub: "Kazakhstan", temp: "-8", title: "Tian Shan Powder Pipeline", desc: "Perfect light winter flakes floating effortlessly through wild alpine canyons.", type: "snow", dropCount: 260, wind: -0.8, color: '254, 243, 199', bgColor: '#1c1917', glow: 'rgba(251, 191, 36, 0.04)', lightChance: 0, hz: 425, audioGain: 0.17, map: "Chimbulak,Kazakhstan" },
    baikal: { name: "Olkhon Coastal Island", sub: "Siberia, Russia", temp: "-24", title: "Rift Valley Ice Sheet Storm", desc: "Extreme deep winter environment shifting micro-crystals uniformly over absolute solid ice sheets.", type: "snow", dropCount: 180, wind: 4.5, color: '207, 250, 254', bgColor: '#020617', glow: 'rgba(34, 211, 238, 0.04)', lightChance: 0, hz: 375, audioGain: 0.13, map: "Olkhon+Island,Siberia" },
    las_lenas: { name: "Mendoza Ridge Sector", sub: "Argentina", temp: "-4", title: "High Andean Corridor Drift", desc: "Energetic South Pacific air cells crossing alpine valleys, creating dense snow columns.", type: "snow", dropCount: 330, wind: 3.8, color: '244, 242, 249', bgColor: '#0f172a', glow: 'rgba(168, 85, 247, 0.04)', lightChance: 0, hz: 470, audioGain: 0.21, map: "Las+Lenas,Argentina" },
    coronet_peak: { name: "Remarkables Range Node", sub: "New Zealand", temp: "-3", title: "Wakatipu Basin Ice Cloud", desc: "Sharp beautiful micro-crystals floating evenly above high glacial water systems.", type: "snow", dropCount: 220, wind: -1.6, color: '219, 234, 254', bgColor: '#090d16', glow: 'rgba(99, 102, 241, 0.03)', lightChance: 0, hz: 415, audioGain: 0.15, map: "The+Remarkables,New+Zealand" },
    cairngorm: { name: "Aviemore Plateau Grid", sub: "Scotland, UK", temp: "-2", title: "Highlands Maritime Whiteout", desc: "Wet dense horizontal wind event mixing small ice needles with coastal cloud layers.", type: "snow", dropCount: 300, wind: 6.5, color: '209, 213, 219', bgColor: '#1f2937', glow: 'rgba(156, 163, 175, 0.03)', lightChance: 0.0002, hz: 450, audioGain: 0.2, map: "Cairngorm+Mountain,Scotland" },
    gulmarg_b: { name: "Apharwat Peak Array", sub: "Jammu & Kashmir, India", temp: "-8", title: "Pir Panjal High Powder", desc: "Deep mountain winter engine dropping massive high-density alpine flakes.", type: "snow", dropCount: 370, wind: 1.2, color: '255, 255, 255', bgColor: '#030712', glow: 'rgba(255, 255, 255, 0.06)', lightChance: 0, hz: 480, audioGain: 0.23, map: "Apharwat+Peak" },
    rohtang: { name: "Rohtang Ridge Pass", sub: "Himachal Pradesh, India", temp: "-10", title: "Pir Panjal Glacial Squall", desc: "Severe sub-zero cloud front pushing crisp dry powder lines over high pass roads.", type: "snow", dropCount: 340, wind: 4.8, color: '241, 245, 249', bgColor: '#090d16', glow: 'rgba(14, 165, 233, 0.04)', lightChance: 0, hz: 460, audioGain: 0.21, map: "Rohtang+Pass,India" },
    sella_nevea: { name: "Julian Alps Basin", sub: "Italy", temp: "-3", title: "Microclimatic Inversion Loop", desc: "Unique local geographic shadow trap producing record setting high density wet snow fields.", type: "snow", dropCount: 450, wind: -0.8, color: '255, 255, 255', bgColor: '#020617', glow: 'rgba(56, 189, 248, 0.06)', lightChance: 0, hz: 550, audioGain: 0.29, map: "Sella+Nevea,Italy" },
    ben_lomond: { name: "Tasmanian Plateau Node", sub: "Australia", temp: "-1", title: "Antarctic Southern Surge", desc: "Chilled air moving north from oceanic systems dropping sparse flakes on highland slopes.", type: "snow", dropCount: 170, wind: 2.5, color: '224, 242, 254', bgColor: '#0f172a', glow: 'rgba(56, 189, 248, 0.03)', lightChance: 0, hz: 400, audioGain: 0.12, map: "Ben+Lomond,Tasmania" },
    uludağ: { name: "Bursa Summit Terminal", sub: "Turkey", temp: "-4", title: "Propontis Cloud Sheet", desc: "Sea effect snow tracking off maritime barriers hitting cold mountain valleys.", type: "snow", dropCount: 280, wind: -2.0, color: '243, 244, 246', bgColor: '#111827', glow: 'rgba(255, 255, 255, 0.04)', lightChance: 0, hz: 440, audioGain: 0.18, map: "Uludag,Turkey" },
    drakensberg: { name: "Sentinels Wall Apex", sub: "Lesotho / South Africa", temp: "-5", title: "Basotho Escarpment Ice", desc: "High elevation basalt walls catching cold sub-antarctic air, casting thin brittle grains.", type: "snow", dropCount: 190, wind: 4.0, color: '219, 234, 254', bgColor: '#1c1917', glow: 'rgba(99, 102, 241, 0.03)', lightChance: 0, hz: 410, audioGain: 0.14, map: "Drakensberg" }
};

// Set baseline initialization target
ACTIVE_STATION = RAIN_REGISTRY.mawsynram;

class Particle {
    constructor(w, h) { this.w = w; this.h = h; this.init(true); }
    init(firstRun = false) {
        this.layer = Math.floor(Math.random() * 4);
        let speedM = [0.25, 0.75, 1.60, 0.40][this.layer];
        let lenM = [0.35, 0.85, 1.50, 0.00][this.layer];
        let opacM = [0.12, 0.38, 0.75, 0.20][this.layer];
        let weight = [0.85, 1.5, 3.0, 5.5][this.layer];
        this.opacity = (Math.random() * 0.2 + 0.3) * opacM; this.weight = weight;
        this.x = Math.random() * this.w; this.y = firstRun ? (Math.random() * this.h) : -30;
        
        if (ACTIVE_STATION.type === "rain") {
            this.length = (Math.random() * 25 + 30) * lenM; 
            this.baseSpeed = (Math.random() * 6 + 18) * speedM;
            if(this.layer === 3) { this.y = Math.random() * this.h; this.baseSpeed = Math.random() * 0.4 + 0.2; }
        } else {
            this.length = Math.random() * (this.layer * 2.2 + 2.5) + 1.2; 
            this.baseSpeed = (Math.random() * 0.8 + 0.8) * (this.layer + 1) * 0.35;
            this.step = Math.random() * 100; 
            this.stepSpeed = Math.random() * 0.015 + 0.005;
        }
    }
    update(dt) {
        const currentSpeed = this.baseSpeed * dt; this.y += currentSpeed;
        if (ACTIVE_STATION.type === "rain") {
            if(this.layer === 3) { if(Math.random() < 0.01) this.x += (Math.random() - 0.5) * dt; return this.y > this.h; }
            this.x += ACTIVE_STATION.wind * (currentSpeed * 0.045);
        } else {
            this.step += this.stepSpeed * dt; 
            this.x += (Math.sin(this.step) * 0.65 + ACTIVE_STATION.wind * 0.15) * dt;
        }
        return this.y > this.h || this.x < -50 || this.x > this.w + 50;
    }
    draw(ctx, flash) {
        let opac = flash > 0 ? Math.min(this.opacity * (flash * 3.5 + 1), 1.0) : this.opacity;
        ctx.fillStyle = ctx.strokeStyle = `rgba(${ACTIVE_STATION.color}, ${opac})`; ctx.lineWidth = this.weight; ctx.beginPath();
        if (ACTIVE_STATION.type === "rain") {
            if(this.layer === 3) { ctx.arc(this.x, this.y, this.weight * 1.4, 0, Math.PI * 2); ctx.fill(); }
            else { ctx.moveTo(this.x, this.y); ctx.lineTo(this.x + (ACTIVE_STATION.wind * (this.baseSpeed * 0.06)), this.y + this.length); ctx.stroke(); }
        } else { 
            ctx.arc(this.x, this.y, this.length, 0, Math.PI * 2); ctx.fill(); 
        }
    }
}

class Splash {
    constructor() { this.active = false; }
    spawn(x, y, layer) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * (ACTIVE_STATION.type === "rain" ? 4.5 : 1.5) + (ACTIVE_STATION.wind * 0.2);
        this.vy = -(Math.random() * 2.0 + 1.5) * (layer + 1) * (ACTIVE_STATION.type === "rain" ? 0.35 : 0.15);
        this.radius = Math.random() * (layer * 0.2 + 0.4) + 0.3; this.alpha = ACTIVE_STATION.type === "rain" ? 0.75 : 0.45;
        this.decay = (Math.random() * 0.03 + 0.02) * (ACTIVE_STATION.type === "rain" ? 1.0 : 0.6); this.active = true;
    }
    update(dt) {
        if (!this.active) return false;
        this.x += this.vx * dt; this.y += this.vy * dt; this.vy += (ACTIVE_STATION.type === "rain" ? 0.28 : 0.08) * dt; this.alpha -= this.decay * dt;
        if (this.alpha <= 0) this.active = false; return this.active;
    }
    draw(ctx) { ctx.fillStyle = `rgba(${ACTIVE_STATION.color}, ${this.alpha})`; ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fill(); }
}

class AudioController {
    constructor() { this.audioCtx = null; this.isMuted = true; }
    init() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const bufferSize = 2 * this.audioCtx.sampleRate;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate); const output = noiseBuffer.getChannelData(0);
        let b0=0, b1=0, b2=0, b3=0, b4=0, b5=0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179; b1 = 0.99332 * b1 + white * 0.0750759; b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856; b4 = 0.55000 * b4 + white * 0.5329522; b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = (b0 + b1 + b2 + b3 + b4 + b5) * 0.11;
        }
        this.rainSource = this.audioCtx.createBufferSource(); this.rainSource.buffer = noiseBuffer; this.rainSource.loop = true;
        this.filter = this.audioCtx.createBiquadFilter(); this.filter.type = 'lowpass'; this.filter.frequency.setValueAtTime(ACTIVE_STATION.hz, this.audioCtx.currentTime);
        this.rainGain = this.audioCtx.createGain(); this.rainGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
        this.rainSource.connect(this.filter); this.filter.connect(this.rainGain); this.rainGain.connect(this.audioCtx.destination); this.rainSource.start();
    }
    syncNodes() {
        if(!this.audioCtx) return; this.filter.frequency.exponentialRampToValueAtTime(ACTIVE_STATION.hz, this.audioCtx.currentTime + 0.5);
        if(!this.isMuted) this.rainGain.gain.linearRampToValueAtTime(ACTIVE_STATION.audioGain, this.audioCtx.currentTime + 0.6);
    }
    toggle(btn, textLabel, waveBars) {
        if (!this.audioCtx) this.init();
        if (this.isMuted) {
            this.audioCtx.resume(); this.rainGain.gain.linearRampToValueAtTime(ACTIVE_STATION.audioGain, this.audioCtx.currentTime + 0.8);
            btn.classList.remove('muted'); waveBars.classList.add('playing'); textLabel.innerText = "Environment Acoustic Matrix Active"; this.isMuted = false;
        } else {
            this.rainGain.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 0.4);
            btn.classList.add('muted'); waveBars.classList.remove('playing'); textLabel.innerText = "Activate Audio Environment"; this.isMuted = true;
        }
    }
}

class RainEngine {
    constructor() {
        this.canvas = document.getElementById('rain-canvas');
        this.ctx = this.canvas.getContext('2d', { alpha: false, desynchronized: true });
        this.ambientGlow = document.getElementById('ambient-glow');
        this.audio = new AudioController();
        
        this.particles = []; this.splashPool = []; this.maxSplashes = 400;
        this.lightningFlash = 0; this.lastTime = performance.now();

        for(let i=0; i<this.maxSplashes; i++) this.splashPool.push(new Splash());

        this.assembleMenuLayout();
        this.initListeners();
        this.rebuildSimulationGrid();
        this.updateTelemetryDashboard();
        this.updateCountBadges();
        
        requestAnimationFrame((t) => this.loop(t));
    }

    assembleMenuLayout() {
        const rainContainer = document.getElementById('rain-menu');
        const snowContainer = document.getElementById('snow-menu');

        const populate = (registry, container) => {
            Object.keys(registry).forEach(key => {
                const loc = registry[key];
                const btn = document.createElement('button');
                btn.className = `menu-item-btn ${loc === ACTIVE_STATION ? 'active' : ''}`;
                btn.dataset.station = key;
                btn.dataset.type = loc.type;
                // Cache readable index content strings directly inside the DOM item for rapid filter matches
                btn.dataset.searchIndex = `${loc.name.toLowerCase()} ${loc.sub.toLowerCase()} ${loc.title.toLowerCase()}`;
                btn.innerHTML = `<span class="menu-item-title">${loc.name}</span><span class="menu-item-sub">${loc.sub}</span>`;
                container.appendChild(btn);
            });
        };

        populate(RAIN_REGISTRY, rainContainer);
        populate(SNOW_REGISTRY, snowContainer);
    }

    initListeners() {
        window.addEventListener('resize', () => this.rebuildSimulationGrid(), { passive: true });
        
        const audioBtn = document.getElementById('audio-trigger');
        const audioLabel = document.getElementById('audio-node-label');
        const waveBars = audioBtn.querySelector('.audio-wave-bars');
        audioBtn.addEventListener('click', () => this.audio.toggle(audioBtn, audioLabel, waveBars));

        const selectStation = (e) => {
            const btn = e.target.closest('.menu-item-btn');
            if(!btn) return;
            
            document.querySelectorAll('.menu-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.dataset.type === "rain" ? RAIN_REGISTRY[btn.dataset.station] : SNOW_REGISTRY[btn.dataset.station];
            const geoTag = document.getElementById('geo-tag');
            const mapViewport = document.getElementById('map-viewport');
            
            geoTag.style.opacity = '0';
            mapViewport.style.opacity = '0';
            
            setTimeout(() => {
                ACTIVE_STATION = target;
                this.rebuildSimulationGrid();
                this.audio.syncNodes();
                this.updateTelemetryDashboard();
                geoTag.style.opacity = '1';
            }, 180);
        };

        document.getElementById('rain-menu').addEventListener('click', selectStation);
        document.getElementById('snow-menu').addEventListener('click', selectStation);

        // High Performance Filtering Transition Logic
        const searchInput = document.getElementById('matrix-search');
        searchInput.addEventListener('input', (e) => this.filterMatrixMenu(e.target.value));

        const clock = document.getElementById('clock-display');
        setInterval(() => { clock.innerText = new Date().toTimeString().split(' ')[0]; }, 1000);
    }

    filterMatrixMenu(query) {
        const cleanQuery = query.toLowerCase().trim();
        const items = document.querySelectorAll('.menu-item-btn');
        
        let rainVisible = 0;
        let snowVisible = 0;

        items.forEach(item => {
            if (!cleanQuery) {
                item.classList.remove('filtered-out');
                if (item.dataset.type === 'rain') rainVisible++;
                else snowVisible++;
            } else {
                if (item.dataset.searchIndex.includes(cleanQuery)) {
                    item.classList.remove('filtered-out');
                    if (item.dataset.type === 'rain') rainVisible++;
                    else snowVisible++;
                } else {
                    item.classList.add('filtered-out');
                }
            }
        });

        // Dynamic Header Subsection Visibility Control toggling smoothly
        const rainSection = document.getElementById('section-rain');
        const snowSection = document.getElementById('section-snow');
        const emptyState = document.getElementById('search-empty-state');

        rainSection.style.display = rainVisible > 0 ? 'block' : 'none';
        snowSection.style.display = snowVisible > 0 ? 'block' : 'none';
        
        if (rainVisible === 0 && snowVisible === 0) {
            emptyState.className = '';
        } else {
            emptyState.className = 'empty-state-hidden';
        }

        this.updateCountBadges(rainVisible, snowVisible);
    }

    updateCountBadges(rCount, sCount) {
        document.getElementById('count-rain').innerText = rCount !== undefined ? rCount : Object.keys(RAIN_REGISTRY).length;
        document.getElementById('count-snow').innerText = sCount !== undefined ? sCount : Object.keys(SNOW_REGISTRY).length;
    }

    updateTelemetryDashboard() {
        document.getElementById('geo-tag').innerText = `${ACTIVE_STATION.name} // ${ACTIVE_STATION.sub}`;
        document.getElementById('core-temp').innerHTML = `${ACTIVE_STATION.temp}<span>°C</span>`;
        document.getElementById('condition-title').innerText = ACTIVE_STATION.title;
        document.getElementById('condition-desc').innerText = ACTIVE_STATION.desc;
        
        document.getElementById('val-wind').innerText = `${Math.abs(ACTIVE_STATION.wind * 12).toFixed(1)} km/h`;
        document.getElementById('val-density').innerText = `${ACTIVE_STATION.dropCount} Particles`;
        document.getElementById('val-audio').innerText = `${ACTIVE_STATION.hz} Hz Base`;

        document.getElementById('bar-wind').style.width = `${Math.min((Math.abs(ACTIVE_STATION.wind) / 8) * 100, 100)}%`;
        document.getElementById('bar-density').style.width = `${(ACTIVE_STATION.dropCount / 850) * 100}%`;
        document.getElementById('bar-audio').style.width = `${((ACTIVE_STATION.hz - 300) / 1200) * 100}%`;

        document.body.style.backgroundColor = ACTIVE_STATION.bgColor;
        this.ambientGlow.style.background = `radial-gradient(circle at 50% 25%, ${ACTIVE_STATION.glow} 0%, rgba(3,7,18,0) 75%)`;
        
        const mapViewport = document.getElementById('map-viewport');
        mapViewport.src = `https://maps.google.com/maps?q=${encodeURIComponent(ACTIVE_STATION.map)}&t=k&z=9&ie=UTF8&iwloc=&output=embed`;
        mapViewport.onload = () => mapViewport.style.opacity = '0.65';

        const logo = document.querySelector('.logo-mark');
        if(logo) logo.style.boxShadow = `0 0 16px rgba(${ACTIVE_STATION.color}, 0.8)`;
        document.documentElement.style.setProperty('--text-accent', `rgba(${ACTIVE_STATION.color}, 1)`);
    }

    rebuildSimulationGrid() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particles = [];
        for (let i = 0; i < ACTIVE_STATION.dropCount; i++) {
            this.particles.push(new Particle(this.canvas.width, this.canvas.height));
        }
    }

    emitSplash(x, y, layer) {
        for(let i=0; i<this.maxSplashes; i++) {
            if(!this.splashPool[i].active) {
                this.splashPool[i].spawn(x, y, layer);
                break;
            }
        }
    }

    loop(currentTime) {
        let dt = (currentTime - this.lastTime) / 16.666;
        this.lastTime = currentTime;
        if(dt > 4) dt = 1.0; 

        this.ctx.fillStyle = ACTIVE_STATION.bgColor;
        this.ctx.globalAlpha = ACTIVE_STATION.type === "rain" ? 0.24 : 0.45;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 1.0;

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            if (p.update(dt)) {
                if (p.layer > 0 && p.layer < 3) this.emitSplash(p.x, this.canvas.height - 2, p.layer);
                p.init();
            }
            p.draw(this.ctx, this.lightningFlash);
        }

        for (let i = 0; i < this.maxSplashes; i++) {
            if (this.splashPool[i].active) {
                this.splashPool[i].update(dt);
                this.splashPool[i].draw(this.ctx);
            }
        }

        requestAnimationFrame((t) => this.loop(t));
    }
}

window.addEventListener('DOMContentLoaded', () => { new RainEngine(); });