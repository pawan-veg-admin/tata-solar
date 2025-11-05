<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title data-key="page_title">आशी ग्रीन एनर्जी × टाटा सोलर - निःशुल्क परामर्श</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* --- 1. KEYFRAME ANIMATIONS --- */
        
        /* Subtle energy flow background */
        @keyframes flow {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }

        /* Pulsating Neon Glow for the main card */
        @keyframes neon-pulse {
            0%, 100% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.4), 0 0 5px rgba(0, 255, 127, 0.1); }
            50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 0 0 10px rgba(0, 255, 127, 0.3); }
        }

        /* --- 2. GLOBAL STYLES --- */
        body {
            font-family: 'Inter', sans-serif;
            /* Deep Blue-Black with animated grid background */
            background-color: #0c1a26; 
            background-image: linear-gradient(#1e3a50 1px, transparent 1px), linear-gradient(90deg, #1e3a50 1px, transparent 1px);
            background-size: 40px 40px;
            /* Apply subtle energy flow animation */
            animation: flow 120s linear infinite;
        }
        .header-bg {
             background-color: #07131b;
        }
        
        /* --- 3. COMPONENT STYLES --- */
        .form-card {
            background-color: #122230; /* Dark blue background for the form */
            border-color: #10b981; /* Initial border color */
            /* Apply the neon pulse animation */
            animation: neon-pulse 3s ease-in-out infinite;
        }
        
        .cta-button {
            background-image: linear-gradient(to right, #10b981, #065f46);
            transition: all 0.3s ease-in-out;
            /* Subtle initial shadow */
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); 
        }
        .cta-button:hover {
            box-shadow: 0 0 25px #10b981; /* Stronger neon green shadow on hover */
            transform: translateY(-2px);
        }
        .hero-glow {
            /* Text glow effect for high-tech headings */
            text-shadow: 0 0 8px rgba(16, 185, 129, 0.7), 0 0 20px rgba(16, 185, 129, 0.4);
        }
        input:focus, select:focus {
            border-color: #10b981 !important;
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.7);
        }
        select {
             color: white;
        }
    </style>
</head>
<body class="text-gray-100 min-h-screen">

    <!-- Sticky Navigation/Header -->
    <header class="sticky top-0 z-50 header-bg backdrop-blur-sm shadow-xl border-b border-green-700/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div class="flex-shrink-0">
                <span class="text-2xl font-extrabold text-green-400" data-key="agency_name">Aashi Green Energy</span>
            </div>
            
            <!-- Language Switcher & CTA -->
            <div class="flex items-center space-x-3">
                <select id="lang-switcher" class="bg-gray-700 border border-green-600 text-sm p-1 rounded-lg text-white appearance-none cursor-pointer">
                    <option value="hi">हिंदी</option>
                    <option value="hing" selected>Hinglish</option>
                    <option value="en">English</option>
                </select>
                <a href="#consultation" class="hidden md:block px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition duration-150 shadow-md" data-key="header_cta">
                    ⚡️ अभी संपर्क करें
                </a>
            </div>
            
        </div>
    </header>

    <!-- 1. Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center relative overflow-hidden">
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight hero-glow" data-key="hero_heading_line1">
            अपनी <span class="text-green-400" data-key="hero_heading_span">बिजली बचत</span> को <br class="hidden sm:inline"> एक नई ऊँचाई दें
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300 sm:text-2xl font-light" data-key="hero_subtext">
            टाटा सोलर और आशी ग्रीन एनर्जी की साझेदारी के साथ, अपने घर या व्यवसाय के लिए सबसे **उच्च-दक्षता वाला** सोलर सॉल्यूशन पाएँ।
        </p>
        <p class="mt-4 text-yellow-400 font-bold text-lg animate-pulse" data-key="hero_motto">
            आपकी बचत – हमारा संकल्प 🔆 (MP Govt Approved)
        </p>
        <div class="mt-12">
            <a href="#consultation" class="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl shadow-2xl text-gray-900 cta-button transform hover:scale-105 transition duration-300" data-key="hero_cta">
                ✅ निःशुल्क सोलर सेविंग रिपोर्ट पाएँ
            </a>
        </div>
    </section>

    <!-- 2. Benefits/Features Section -->
    <section id="benefits" class="py-16 bg-gray-900/50 border-t border-b border-green-700/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-green-400 mb-12" data-key="benefits_heading">
                हमारी मुख्य विशेषताएँ
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <!-- Card 1: Tata Reliability -->
                <div class="p-6 rounded-xl border border-green-700/50 hover:border-green-400 transition duration-300 bg-gray-800/30 backdrop-blur-sm">
                    <span class="text-4xl text-yellow-400 mb-3 block">🛡️</span>
                    <h3 class="text-xl font-bold mb-2" data-key="card1_title">टाटा की विश्वसनीयता</h3>
                    <p class="text-gray-400 text-sm" data-key="card1_desc">केवल टाटा सोलर के उच्च गुणवत्ता वाले, **25 साल की वारंटी** वाले पैनलों का उपयोग।</p>
                </div>

                <!-- Card 2: Maximum Savings -->
                <div class="p-6 rounded-xl border border-green-700/50 hover:border-green-400 transition duration-300 bg-gray-800/30 backdrop-blur-sm">
                    <span class="text-4xl text-yellow-400 mb-3 block">📈</span>
                    <h3 class="text-xl font-bold mb-2" data-key="card2_title">सरकारी सब्सिडी और बचत</h3>
                    <p class="text-gray-400 text-sm" data-key="card2_desc">सरकारी सब्सिडी का लाभ उठाएँ और अपने बिजली बिल को **90% तक कम** करने की गारंटी पाएँ।</p>
                </div>

                <!-- Card 3: Expert Installation -->
                <div class="p-6 rounded-xl border border-green-700/50 hover:border-green-400 transition duration-300 bg-gray-800/30 backdrop-blur-sm">
                    <span class="text-4xl text-yellow-400 mb-3 block">🛠️</span>
                    <h3 class="text-xl font-bold mb-2" data-key="card3_title">विशेषज्ञ इंस्टॉलेशन</h3>
                    <p class="text-gray-400 text-sm" data-key="card3_desc">आशी ग्रीन एनर्जी के **प्रमाणित इंजीनियरों** द्वारा तेज़ और सुरक्षित सेटअप।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Consultation Form Section (Core Content) -->
    <section id="consultation" class="py-20 relative">
        <div class="max-w-xl mx-auto px-4">
            
            <h2 class="text-3xl font-extrabold text-center text-white mb-2" data-key="form_heading">
                निःशुल्क सोलर समाधान पाएँ
            </h2>
            <p class="text-center text-gray-400 mb-8" data-key="form_subtext">
                अपना विवरण भरें और जानें कि आप हर महीने कितनी बचत कर सकते हैं!
            </p>

            <!-- Form Card - Neon Pulse Animation Applied Here -->
            <div class="form-card p-6 sm:p-8 rounded-3xl border">
                
                <!-- Confirmation Message (Hidden by default) -->
                <div id="confirmationMessage" class="hidden bg-green-900/50 p-6 rounded-xl text-center border border-green-500 mb-6">
                    <p class="text-2xl text-green-400 font-bold mb-2" data-key="conf_title">सफलतापूर्वक जमा!</p>
                    <p class="text-gray-300" data-key="conf_text">आपका विवरण प्राप्त हो गया है। आपको जल्द ही हमारे एक्सपर्ट द्वारा WhatsApp पर रीडायरेक्ट किया जा रहा है।</p>
                </div>

                <form id="solarForm" class="space-y-5">
                    
                    <!-- 1. Name -->
                    <div>
                        <label for="name" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_name">1️⃣ आपका नाम:</label>
                        <input type="text" id="name" data-key="placeholder_name" placeholder="अपना नाम दर्ज करें" required
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none transition duration-150">
                    </div>

                    <!-- 2. Phone -->
                    <div>
                        <label for="phone" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_phone">2️⃣ मोबाइल नंबर:</label>
                        <input type="tel" id="phone" data-key="placeholder_phone" placeholder="मोबाइल नंबर" required
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none transition duration-150">
                    </div>

                    <!-- 3. Location -->
                    <div>
                        <label for="location" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_location">3️⃣ आप कहाँ रहते हैं? (शहर/गाँव):</label>
                        <input type="text" id="location" data-key="placeholder_location" placeholder="उदाहरण: झाबुआ" required
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none transition duration-150">
                    </div>

                    <!-- 4. Monthly Bill -->
                    <div>
                        <label for="bill" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_bill">4️⃣ आपका बिजली बिल (मासिक):</label>
                        <select id="bill"
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 focus:outline-none transition duration-150">
                            <!-- Options remain in Hinglish/Hindi for ease of data collection -->
                            <option value="₹500-₹1000">₹500–₹1000</option>
                            <option value="₹1000-₹2000">₹1000–₹2000</option>
                            <option value="₹2000-₹4000">₹2000–₹4000</option>
                            <option value="₹4000+">₹4000+</option>
                        </select>
                    </div>

                    <!-- 5. Purpose -->
                    <div>
                        <label for="purpose" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_purpose">5️⃣ आप Solar किसके लिए लगवाना चाहते हैं?</label>
                        <select id="purpose"
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 focus:outline-none transition duration-150">
                            <option value="घर" data-key="option_home">🏠 घर</option>
                            <option value="बिजनेस" data-key="option_business">🏭 बिजनेस</option>
                            <option value="संस्था" data-key="option_institute">🏫 संस्था</option>
                        </select>
                    </div>

                    <!-- 6. Site Visit -->
                    <div>
                        <label for="visit" class="block text-sm font-semibold text-gray-300 mb-1" data-key="label_visit">6️⃣ क्या आप Free Site Visit चाहते हैं?</label>
                        <select id="visit"
                            class="w-full p-3 border border-gray-600 rounded-xl bg-gray-700/50 focus:outline-none transition duration-150">
                            <option value="Yes" data-key="option_yes">हाँ</option>
                            <option value="No" data-key="option_no">नहीं</option>
                        </select>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" id="submitButton"
                        class="w-full py-4 mt-6 text-gray-900 font-bold rounded-xl shadow-2xl cta-button flex items-center justify-center space-x-2" data-key="form_submit_btn">
                        <span>🚀 Free Quote WhatsApp पर पाएँ</span>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- 4. Process Section -->
    <section id="process" class="py-20 bg-gray-900/50 border-t border-green-700/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-green-400 mb-12" data-key="process_heading">
                सोलर लगवाने की सरल प्रक्रिया
            </h2>
            <div class="relative flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-8">
                <!-- Line/Connector for MD+ screens -->
                <div class="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-green-800/50 mx-auto w-[60%] -translate-y-1/2"></div>
                
                <!-- Step 1 -->
                <div class="flex flex-col items-center text-center max-w-xs p-4 z-10 bg-[#0c1a26] rounded-xl border border-green-700/50">
                    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-[#0c1a26] text-xl font-bold mb-3 shadow-lg">1</div>
                    <h4 class="text-xl font-semibold mb-2 text-white" data-key="step1_title">परामर्श और विश्लेषण</h4>
                    <p class="text-gray-400 text-sm" data-key="step1_desc">हम आपकी खपत समझते हैं और बचत के लिए व्यक्तिगत रिपोर्ट बनाते हैं।</p>
                </div>

                <!-- Step 2 -->
                <div class="flex flex-col items-center text-center max-w-xs p-4 z-10 bg-[#0c1a26] rounded-xl border border-green-700/50">
                    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-[#0c1a26] text-xl font-bold mb-3 shadow-lg">2</div>
                    <h4 class="text-xl font-semibold mb-2 text-white" data-key="step2_title">डिज़ाइन और अप्रूवल</h4>
                    <p class="text-gray-400 text-sm" data-key="step2_desc">टाटा पैनल्स का उपयोग करके सर्वोत्तम सिस्टम डिज़ाइन और सरकारी अप्रूवल।</p>
                </div>

                <!-- Step 3 -->
                <div class="flex flex-col items-center text-center max-w-xs p-4 z-10 bg-[#0c1a26] rounded-xl border border-green-700/50">
                    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-[#0c1a26] text-xl font-bold mb-3 shadow-lg">3</div>
                    <h4 class="text-xl font-semibold mb-2 text-white" data-key="step3_title">इंस्टॉलेशन और बचत</h4>
                    <p class="text-gray-400 text-sm" data-key="step3_desc">तेज इंस्टॉलेशन के बाद तुरंत **ज़ीरो बिजली बिल** का आनंद लें।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="mt-16 py-8 border-t border-gray-700/50 header-bg">
        <div class="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p class="mb-2" data-key="footer_line1">Powered by <span class="font-bold text-green-400">Aashi Green Energy Pvt. Ltd.</span> | In Collaboration with <span class="font-bold text-yellow-400">Tata Solar</span></p>
            <p data-key="footer_line2">&copy; 2025 सभी अधिकार सुरक्षित। आपकी ऊर्जा का भविष्य यहीं से शुरू होता है।</p>
        </div>
    </footer>

    <!-- JavaScript (Translation and WhatsApp Logic) -->
    <script>
        const translations = {
            'page_title': {
                'hi': 'आशी ग्रीन एनर्जी × टाटा सोलर - निःशुल्क परामर्श',
                'hing': 'Aashi Green Energy × Tata Solar - Free Consultation',
                'en': 'Aashi Green Energy × Tata Solar - Free Consultation'
            },
            'agency_name': {
                'hi': 'आशी ग्रीन एनर्जी',
                'hing': 'Aashi Green Energy',
                'en': 'Aashi Green Energy'
            },
            'header_cta': {
                'hi': '⚡️ अभी संपर्क करें',
                'hing': '⚡️ Abhi Sampark Karein',
                'en': '⚡️ Contact Us Now'
            },
            // --- Hero Section ---
            'hero_heading_line1': {
                'hi': 'अपनी बिजली बचत को',
                'hing': 'Apni Bijli Bachat ko',
                'en': 'Take Your Electricity Savings'
            },
            'hero_heading_span': {
                'hi': 'बिजली बचत',
                'hing': 'Electricity Savings',
                'en': 'Electricity Savings'
            },
            'hero_subtext': {
                'hi': 'टाटा सोलर और आशी ग्रीन एनर्जी की साझेदारी के साथ, अपने घर या व्यवसाय के लिए सबसे **उच्च-दक्षता वाला** सोलर सॉल्यूशन पाएँ।',
                'hing': 'Tata Solar aur Aashi Green Energy ki partnership ke saath, apne ghar ya business ke liye sabse **high-efficiency** solar solution paayein.',
                'en': 'Get the **highest-efficiency** solar solution for your home or business, in partnership with Tata Solar and Aashi Green Energy.'
            },
            'hero_motto': {
                'hi': 'आपकी बचत – हमारा संकल्प 🔆 (MP Govt Approved)',
                'hing': 'Aapki Bachat – Humara Sankalp 🔆 (MP Govt Approved)',
                'en': 'Your Savings – Our Commitment 🔆 (MP Govt Approved)'
            },
            'hero_cta': {
                'hi': '✅ निःशुल्क सोलर सेविंग रिपोर्ट पाएँ',
                'hing': '✅ Free Solar Saving Report Paayein',
                'en': '✅ Get Free Solar Saving Report'
            },
            // --- Benefits Section ---
            'benefits_heading': {
                'hi': 'हमारी मुख्य विशेषताएँ',
                'hing': 'Humari Mukhya Visheshataayein',
                'en': 'Our Key Features'
            },
            'card1_title': {
                'hi': 'टाटा की विश्वसनीयता',
                'hing': 'Tata ki Vishwasniyata',
                'en': 'Tata Reliability'
            },
            'card1_desc': {
                'hi': 'केवल टाटा सोलर के उच्च गुणवत्ता वाले, **25 साल की वारंटी** वाले पैनलों का उपयोग।',
                'hing': 'Only use Tata Solar’s high-quality panels with **25 years of warranty**.',
                'en': 'We only use Tata Solar’s high-quality panels with a **25-year warranty**.'
            },
            'card2_title': {
                'hi': 'सरकारी सब्सिडी और बचत',
                'hing': 'Sarkari Subsidy aur Bachat',
                'en': 'Government Subsidy & Savings'
            },
            'card2_desc': {
                'hi': 'सरकारी सब्सिडी का लाभ उठाएँ और अपने बिजली बिल को **90% तक कम** करने की गारंटी पाएँ।',
                'hing': 'Sarkari subsidy ka labh uthayein aur apne bijli bill ko **90% tak kam** karne ki guarantee paayein.',
                'en': 'Avail government subsidy and get a guarantee to **reduce your electricity bill up to 90%**.'
            },
            'card3_title': {
                'hi': 'विशेषज्ञ इंस्टॉलेशन',
                'hing': 'Visheshagya Installation',
                'en': 'Expert Installation'
            },
            'card3_desc': {
                'hi': 'आशी ग्रीन एनर्जी के **प्रमाणित इंजीनियरों** द्वारा तेज़ और सुरक्षित सेटअप।',
                'hing': 'Aashi Green Energy ke **certified engineers** dwara tez aur surakshit setup.',
                'en': 'Fast and secure setup by Aashi Green Energy’s **certified engineers**.'
            },
            // --- Form Section ---
            'form_heading': {
                'hi': 'निःशुल्क सोलर समाधान पाएँ',
                'hing': 'Nishulk Solar Samadhan Paayein',
                'en': 'Get a Free Solar Solution'
            },
            'form_subtext': {
                'hi': 'अपना विवरण भरें और जानें कि आप हर महीने कितनी बचत कर सकते हैं!',
                'hing': 'Apna vivran bharein aur jaanein ki aap har mahine kitni savings kar sakte hain!',
                'en': 'Fill your details and find out how much you can save every month!'
            },
            'label_name': {
                'hi': '1️⃣ आपका नाम:',
                'hing': '1️⃣ Aapka Naam:',
                'en': '1️⃣ Your Name:'
            },
            'placeholder_name': {
                'hi': 'अपना नाम दर्ज करें',
                'hing': 'Apna naam darj karein',
                'en': 'Enter your name'
            },
            'label_phone': {
                'hi': '2️⃣ मोबाइल नंबर:',
                'hing': '2️⃣ Mobile Number:',
                'en': '2️⃣ Mobile Number:'
            },
            'placeholder_phone': {
                'hi': 'मोबाइल नंबर',
                'hing': 'Mobile Number',
                'en': 'Mobile Number'
            },
            'label_location': {
                'hi': '3️⃣ आप कहाँ रहते हैं? (शहर/गाँव):',
                'hing': '3️⃣ Aap kahan rehte hain? (City/Village):',
                'en': '3️⃣ Where do you live? (City/Village):'
            },
            'placeholder_location': {
                'hi': 'उदाहरण: झाबुआ',
                'hing': 'Example: Jhabua',
                'en': 'Example: Jhabua'
            },
            'label_bill': {
                'hi': '4️⃣ आपका बिजली बिल (मासिक):',
                'hing': '4️⃣ Aapka Bijli Bill (Monthly):',
                'en': '4️⃣ Your Electricity Bill (Monthly):'
            },
            'label_purpose': {
                'hi': '5️⃣ आप Solar किसके लिए लगवाना चाहते हैं?',
                'hing': '5️⃣ Aap Solar kiske liye lagwana chahte hain?',
                'en': '5️⃣ Who is the Solar setup for?'
            },
            'option_home': { 'hi': '🏠 घर', 'hing': '🏠 Ghar (Home)', 'en': '🏠 Home' },
            'option_business': { 'hi': '🏭 बिजनेस', 'hing': '🏭 Business', 'en': '🏭 Business' },
            'option_institute': { 'hi': '🏫 संस्था', 'hing': '🏫 Sanstha (Institute)', 'en': '🏫 Institute' },
            
            'label_visit': {
                'hi': '6️⃣ क्या आप Free Site Visit चाहते हैं?',
                'hing': '6️⃣ Kya aap Free Site Visit chahte hain?',
                'en': '6️⃣ Do you want a Free Site Visit?'
            },
            'option_yes': { 'hi': 'हाँ', 'hing': 'Haan (Yes)', 'en': 'Yes' },
            'option_no': { 'hi': 'नहीं', 'hing': 'Nahi (No)', 'en': 'No' },

            'form_submit_btn': {
                'hi': '🚀 Free Quote WhatsApp पर पाएँ',
                'hing': '🚀 Free Quote WhatsApp par Paayein',
                'en': '🚀 Get Free Quote on WhatsApp'
            },
            
            // --- Confirmation Message ---
            'conf_title': {
                'hi': 'सफलतापूर्वक जमा!',
                'hing': 'Safaltapoorvak Jama!',
                'en': 'Successfully Submitted!'
            },
            'conf_text': {
                'hi': 'आपका विवरण प्राप्त हो गया है। आपको जल्द ही हमारे एक्सपर्ट द्वारा WhatsApp पर रीडायरेक्ट किया जा रहा है।',
                'hing': 'Aapka vivran prapt ho gaya hai. Aapko jald hi humare expert dwara WhatsApp par redirect kiya ja raha hai.',
                'en': 'Your details have been received. You are being redirected to our expert on WhatsApp shortly.'
            },

            // --- Process Section ---
            'process_heading': {
                'hi': 'सोलर लगवाने की सरल प्रक्रिया',
                'hing': 'Solar Lagwane ki Saral Prakriya',
                'en': 'Simple Solar Installation Process'
            },
            'step1_title': {
                'hi': 'परामर्श और विश्लेषण',
                'hing': 'Pramash aur Vishleshan',
                'en': 'Consultation & Analysis'
            },
            'step1_desc': {
                'hi': 'हम आपकी खपत समझते हैं और बचत के लिए व्यक्तिगत रिपोर्ट बनाते हैं।',
                'hing': 'Hum aapki khapat samajhte hain aur bachat ke liye personal report banate hain.',
                'en': 'We understand your consumption and create a personalized savings report.'
            },
            'step2_title': {
                'hi': 'डिज़ाइन और अप्रूवल',
                'hing': 'Design aur Approval',
                'en': 'Design & Approval'
            },
            'step2_desc': {
                'hi': 'टाटा पैनल्स का उपयोग करके सर्वोत्तम सिस्टम डिज़ाइन और सरकारी अप्रूवल।',
                'hing': 'Tata panels ka upyog karke behtareen system design aur sarkari approval.',
                'en': 'Best system design and government approval using Tata panels.'
            },
            'step3_title': {
                'hi': 'इंस्टॉलेशन और बचत',
                'hing': 'Installation aur Bachat',
                'en': 'Installation & Savings'
            },
            'step3_desc': {
                'hi': 'तेज इंस्टॉलेशन के बाद तुरंत **ज़ीरो बिजली बिल** का आनंद लें।',
                'hing': 'Fast installation ke baad turant **Zero Bijli Bill** ka anand lein.',
                'en': 'Enjoy **Zero Electricity Bill** immediately after fast installation.'
            },

            // --- Footer ---
            'footer_line1': {
                'hi': 'द्वारा संचालित <span class="font-bold text-green-400">आशी ग्रीन एनर्जी प्राइवेट लिमिटेड</span> | के सहयोग से <span class="font-bold text-yellow-400">टाटा सोलर</span>',
                'hing': 'Powered by <span class="font-bold text-green-400">Aashi Green Energy Pvt. Ltd.</span> | In Collaboration with <span class="font-bold text-yellow-400">Tata Solar</span>',
                'en': 'Powered by <span class="font-bold text-green-400">Aashi Green Energy Pvt. Ltd.</span> | In Collaboration with <span class="font-bold text-yellow-400">Tata Solar</span>'
            },
            'footer_line2': {
                'hi': '© 2025 सभी अधिकार सुरक्षित। आपकी ऊर्जा का भविष्य यहीं से शुरू होता है।',
                'hing': '© 2025 Sabhi Adhikaar Surakshit. Aapki Urja ka Bhavishya Yahin se Shuru Hota Hai.',
                'en': '© 2025 All rights reserved. Your energy future starts here.'
            }
        };

        let currentLang = 'hing'; // Default language set to Hinglish

        const updateContent = (lang) => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[key] && translations[key][lang]) {
                    // Check if it's an input/textarea placeholder
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[key][lang];
                    } else if (key === 'hero_heading_line1') {
                        // Special handling for hero heading to maintain inner span formatting
                        const spanText = translations['hero_heading_span'][lang];
                        // Using fixed Hindi script for the tagline at the end for consistent visual impact
                        element.innerHTML = `${translations[key][lang]} <br class="hidden sm:inline"> एक नई ऊँचाई दें`; 
                    } else {
                        element.innerHTML = translations[key][lang];
                    }
                }
            });
            
            // Special handling for language selection options
            document.querySelector('#purpose option[value="घर"]').textContent = translations['option_home'][lang];
            document.querySelector('#purpose option[value="बिजनेस"]').textContent = translations['option_business'][lang];
            document.querySelector('#purpose option[value="संस्था"]').textContent = translations['option_institute'][lang];
            document.querySelector('#visit option[value="Yes"]').textContent = translations['option_yes'][lang];
            document.querySelector('#visit option[value="No"]').textContent = translations['option_no'][lang];

            currentLang = lang;
            document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
        };

        // Initialize language switcher
        document.addEventListener('DOMContentLoaded', () => {
            const langSwitcher = document.getElementById('lang-switcher');
            langSwitcher.value = currentLang; // Set initial value to 'hing'
            updateContent(currentLang); // Load initial content

            langSwitcher.addEventListener('change', (e) => {
                updateContent(e.target.value);
            });

            // WhatsApp Form Submission Logic (Kept in Hinglish/Hindi for recipient's clarity)
            document.getElementById("solarForm").addEventListener("submit", function(e){
                e.preventDefault();
                
                // The WhatsApp number provided by the user (91 is the country code for India)
                const whatsappNumber = "918989024411"; // Updated to user's specified number

                // Collect form data
                let name = document.getElementById("name").value;
                let phone = document.getElementById("phone").value;
                let location = document.getElementById("location").value;
                let bill = document.getElementById("bill").value;
                let purpose = document.getElementById("purpose").value;
                let visit = document.getElementById("visit").value;
                
                const form = document.getElementById("solarForm");
                const confirmation = document.getElementById("confirmationMessage");
                const submitButton = document.getElementById("submitButton");

                // 1. Hide form, show confirmation message, disable button
                form.classList.add('hidden');
                confirmation.classList.remove('hidden');
                submitButton.disabled = true;

                // --- FIX APPLIED HERE: Removed hardcoded %0A and relying on template literal newlines ---
                // Construct the WhatsApp message (Content kept in Hindi/Hinglish for the recipient)
                let message = `🚀 नया Solar Lead प्राप्त हुआ है:

👤 नाम: ${name}
📱 मोबाइल: ${phone}
📍 लोकेशन: ${location}
💡 बिजली बिल (मासिक): ${bill}
🏠 उद्देश्य: ${purpose}
✅ Free Site Visit चाहिए: ${visit}`;

                // Create the WhatsApp URL with the destination number. encodeURIComponent converts the literal newlines into %0A
                let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                
                // 2. Wait 3 seconds, then open WhatsApp in a new tab
                setTimeout(() => {
                    window.open(url, "_blank");
                }, 3000); // 3-second delay
                
            });
        });
    </script>
</body>
</html>
