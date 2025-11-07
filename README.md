<!DOCTYPE html>
<html lang="hi" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aashi Green Energy × Tata Solar Jhabua | ऑन-ग्रिड सोलर, MP सब्सिडी, नेट मीटरिंग</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font for Professional Look -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <style>
        :root {
            --primary-green: #008037;
            --secondary-yellow: #FFD700;
        }
        body {
            font-family: 'Inter', sans-serif;
            color: #333;
        }
        .bg-primary { background-color: var(--primary-green); }
        .text-primary { color: var(--primary-green); }
        .border-primary { border-color: var(--primary-green); }
        .bg-secondary { background-color: var(--secondary-yellow); }
        .hover-shadow:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        
        /* Mobile-first table styling */
        @media (max-width: 768px) {
            .table-container {
                overflow-x: auto;
            }
            .cost-table {
                min-width: 600px; /* Ensure table is scrollable on small screens */
            }
        }
        /* Razorpay button alignment */
        .razorpay-form {
            display: flex;
            justify-content: center;
        }
    </style>
</head>
<body class="antialiased">

    <!-- Header & Navigation -->
    <header class="sticky top-0 z-50 bg-white shadow-lg border-t-8 border-primary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <!-- Logo/Company Name -->
            <div class="flex items-center space-x-2">
                <img src="https://placehold.co/40x40/008037/FFFFFF?text=A" onerror="this.onerror=null;this.src='https://placehold.co/40x40/008037/FFFFFF?text=A';" alt="Aashi Green Energy Logo" class="h-10 w-10 rounded-full">
                <span class="text-xl font-extrabold text-primary">Aashi Green Energy</span>
                <span class="hidden sm:inline text-sm font-medium text-gray-500">× TATA Solar</span>
            </div>

            <!-- Contact CTA (Mobile & Desktop) -->
            <div class="flex items-center space-x-3">
                <a href="tel:9425102683" class="hidden sm:inline-flex items-center bg-primary text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
                    <i class="fas fa-phone mr-2"></i> 9425102683
                </a>
                <a href="https://wa.me/919425102683" target="_blank" class="flex items-center bg-secondary text-primary text-sm font-semibold py-2 px-4 rounded-full hover:shadow-lg transition duration-300 shadow-md">
                    <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
                <a href="#lead-form" class="sm:hidden text-primary text-2xl"><i class="fas fa-sun"></i></a>
            </div>
        </div>
    </header>

    <!-- 1. HERO SECTION (Video Player Added) -->
    <section id="hero" class="bg-gray-100 py-8 md:py-12 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            
            <!-- YouTube Video Embed (16:9 Aspect Ratio) -->
            <h2 class="text-2xl font-bold text-primary mb-4">सोलर से जुड़ी पूरी जानकारी इस वीडियो में देखें</h2>
            <div class="max-w-4xl mx-auto mb-8">
                <!-- Responsive Aspect Ratio Container (16:9) -->
                <div class="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
                    <!-- iframe for YouTube Embed -->
                    <iframe
                        class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/YlI4lH0huEs?autoplay=0&amp;modestbranding=1&amp;showinfo=0&amp;rel=0"
                        title="सोलर सब्सिडी, नेट मीटरिंग और सिस्टम की पूरी जानकारी"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <!-- End YouTube Video Embed -->

            <!-- Existing Hero Content below video -->
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-800">
                <span class="bg-secondary text-primary px-3 py-1 rounded-lg inline-block">बिजली बिल से आज़ादी पाएं!</span>
            </h1>
            <p class="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-gray-700">
                ऑन-ग्रिड सोलर सिस्टम – बिजली बिल **कम करें**, MPEB को **बिजली बेचें**!
            </p>
            <p class="text-lg mb-8 inline-block p-2 rounded-lg text-gray-600">
                <i class="fas fa-check-circle text-primary mr-2"></i> MPEB-अनुमोदित नेट मीटरिंग सिस्टम | **Jhabua & Surrounding Areas**
            </p>

            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#lead-form" class="inline-flex items-center justify-center bg-primary text-white text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-105">
                    <i class="fas fa-screwdriver-wrench mr-2"></i> 📞 Free Site Visit Book करें
                </a>
                <a href="https://wa.me/919425102683?text=मुझे%20फ्री%20कोटेशन%20चाहिए" target="_blank" class="inline-flex items-center justify-center bg-secondary text-primary text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <i class="fab fa-whatsapp mr-2"></i> 💬 WhatsApp पर Quote पाएं
                </a>
            </div>
            <!-- SEO Keyphrase Mention -->
            <p class="text-sm mt-8 text-gray-500">आपका भरोसेमंद **Tata Solar Jhabua** और **MP Govt Subsidy** पार्टनर.</p>
        </div>
    </section>

    <!-- 2. ABOUT SECTION -->
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-extrabold text-primary mb-4">Aashi Green Energy Pvt. Ltd.</h2>
            <p class="text-2xl font-semibold text-gray-700 mb-6">
                <span class="text-primary">TATA का संकल्प</span> — हमारा समर्पण
            </p>
            
            <div class="max-w-4xl mx-auto text-lg text-gray-600 space-y-4">
                <p>
                    Aashi Green Energy Pvt. Ltd. **Jhabua** और आस-पास के क्षेत्रों (Alirajpur, Dahod, Meghnagar, Petlawad) में **Tata Solar** के अधिकृत (Authorized) पार्टनर हैं। हमारा उद्देश्य है मध्य प्रदेश के हर घर और व्यापार को **सस्ती और स्वच्छ ऊर्जा** प्रदान करना।
                </p>
                <p class="font-bold text-xl text-primary">
                    हमारा मिशन: Affordable clean energy, local employment, and a sustainable future.
                </p>
                <p class="text-2xl font-bold italic text-gray-800">
                    "हम स्वच्छ ऊर्जा से बेहतर कल बनाते हैं"
                </p>
                <p class="text-3xl font-extrabold text-secondary mt-8">
                    आपकी बचत – हमारा संकल्प 🌞
                </p>
            </div>
        </div>
    </section>

    <!-- 3. WHAT IS ON-GRID SOLAR SYSTEM -->
    <section id="ongrid-solar" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-8 border-b-4 border-secondary inline-block pb-1">
                ऑन-ग्रिड सोलर सिस्टम क्या है?
            </h2>
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-4 text-lg text-gray-700">
                    <p>
                        **ऑन-ग्रिड सोलर सिस्टम (On-Grid Solar System)** वह प्रणाली है जो सीधे MPEB (मध्य प्रदेश विद्युत बोर्ड) के बिजली ग्रिड से जुड़ी होती है। यह सबसे लोकप्रिय और किफायती सोलर समाधान है, खासकर Jhabua जैसे क्षेत्रों के लिए जहां बिजली की कटौती कम है।
                    </p>
                    <ul class="list-disc list-inside space-y-2 pl-5">
                        <li class="font-semibold">
                            <span class="text-primary">बैटरी की कोई जरूरत नहीं:</span> यह सिस्टम सीधे बिजली ग्रिड का उपयोग करता है, जिससे बैटरी का महंगा खर्च बचता है।
                        </li>
                        <li class="font-semibold">
                            <span class="text-primary">नेट मीटरिंग (Net Metering):</span> दिन में जब सोलर पैनल बिजली बनाते हैं:
                            <ol class="list-decimal list-inside ml-4 mt-2 text-base font-normal">
                                <li>सबसे पहले आपके घर/व्यापार की जरूरतें पूरी होती हैं।</li>
                                <li>बची हुई (Extra) बिजली MPEB ग्रिड को निर्यात (Export) कर दी जाती है।</li>
                            </ol>
                        </li>
                        <li class="font-semibold">
                            <span class="text-primary">बिल में क्रेडिट:</span> आपका नेट मीटर इस निर्यातित बिजली का हिसाब रखता है और आपके अगले बिजली बिल में क्रेडिट (Credit) या कटौती देता है।
                        </li>
                    </ul>
                    <p class="font-bold text-xl text-primary">
                        सीधा लाभ: Lifetime savings, Zero electricity bill, and eco-friendly energy.
                    </p>
                </div>
                <!-- Simple Infographic Placeholder -->
                <div class="bg-white p-6 rounded-xl shadow-lg border-l-8 border-primary">
                    <h3 class="text-xl font-bold mb-3 text-primary">Simple Flow Diagram</h3>
                    <p class="text-lg">
                        <i class="fas fa-sun text-yellow-500"></i> Solar Panel <i class="fas fa-arrow-right"></i> Inverter <i class="fas fa-arrow-right"></i> Home/Business Usage <i class="fas fa-arrow-right"></i> Net Meter <i class="fas fa-arrows-alt-h text-primary"></i> MPEB Grid
                    </p>
                    <p class="mt-4 text-sm text-gray-500">
                        जब आप MPEB को बिजली बेचते हैं, तो यह ग्रिड आपके लिए एक बड़ी बैटरी की तरह काम करती है।
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. DOMESTIC SYSTEM CAPACITY & COST TABLE -->
    <section id="domestic-cost" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-4">
                4. घरेलू सोलर सिस्टम (Domestic On-Grid)
            </h2>
            <p class="text-xl text-center text-gray-700 mb-8">
                **MP Govt Subsidy** के बाद आपकी लागत और बचत (Jhabua/Alirajpur)
            </p>

            <div class="table-container bg-gray-50 p-4 rounded-xl shadow-2xl">
                <table class="cost-table w-full text-left text-sm md:text-base border-collapse">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th scope="col" class="p-3 border-r border-green-700 rounded-tl-xl">System Size</th>
                            <th scope="col" class="p-3 border-r border-green-700">Approx Cost (₹)</th>
                            <th scope="col" class="p-3 border-r border-green-700">Govt. Subsidy (₹)</th>
                            <th scope="col" class="p-3 bg-secondary text-primary font-bold">Final Cost (₹)</th>
                            <th scope="col" class="p-3 border-r border-green-700">Monthly Saving (₹)</th>
                            <th scope="col" class="p-3 rounded-tr-xl">Payback Period (Approx.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b hover:bg-yellow-50/50">
                            <td class="p-3 font-bold">1 kW</td>
                            <td class="p-3">60,000</td>
                            <td class="p-3 text-red-600">24,000 (40%)</td>
                            <td class="p-3 font-extrabold text-primary">36,000</td>
                            <td class="p-3">~1,200</td>
                            <td class="p-3">~2.5 Years</td>
                        </tr>
                        <tr class="border-b hover:bg-yellow-50/50">
                            <td class="p-3 font-bold">3 kW</td>
                            <td class="p-3">1,80,000</td>
                            <td class="p-3 text-red-600">72,000 (40%)</td>
                            <td class="p-3 font-extrabold text-primary">1,08,000</td>
                            <td class="p-3">~3,800</td>
                            <td class="p-3">~2.4 Years</td>
                        </tr>
                        <tr class="border-b hover:bg-yellow-50/50 bg-yellow-50">
                            <td class="p-3 font-bold">5 kW</td>
                            <td class="p-3">3,00,000</td>
                            <td class="p-3 text-red-600">1,00,000</td>
                            <td class="p-3 font-extrabold text-primary text-xl">2,00,000</td>
                            <td class="p-3">~6,200</td>
                            <td class="p-3">~2.7 Years</td>
                        </tr>
                        <tr class="hover:bg-yellow-50/50">
                            <td class="p-3 font-bold">10 kW</td>
                            <td class="p-3">6,00,000</td>
                            <td class="p-3 text-red-600">1,20,000 (20%)</td>
                            <td class="p-3 font-extrabold text-primary">4,80,000</td>
                            <td class="p-3">~12,500</td>
                            <td class="p-3">~3.2 Years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-4 text-center text-sm text-gray-500">
                **नोट:** लागत में **Tata** पैनल, इन्वर्टर, नेट मीटर और इंस्टॉलेशन शामिल हैं। सब्सिडी दरें भारत सरकार के MNRE दिशानिर्देशों के अनुसार हैं।
            </p>
            
            <div class="text-center mt-8">
                <a href="#lead-form" class="inline-flex items-center justify-center bg-primary text-white text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:bg-green-700 transition duration-300">
                    <i class="fas fa-calculator mr-2"></i> अपनी Subsidy और Final Cost जानें
                </a>
            </div>
        </div>
    </section>

    <!-- 5. COMMERCIAL SYSTEM CAPACITY & COST TABLE -->
    <section id="commercial-cost" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-4">
                5. व्यावसायिक सोलर सिस्टम (Commercial On-Grid)
            </h2>
            <p class="text-xl text-center text-gray-700 mb-8">
                बड़े बिजली बिल से आज़ादी पाएं! (20% Subsidy तक)
            </p>

            <div class="table-container bg-white p-4 rounded-xl shadow-2xl">
                <table class="cost-table w-full text-left text-sm md:text-base border-collapse">
                    <thead class="bg-gray-800 text-white">
                        <tr>
                            <th scope="col" class="p-3 border-r border-gray-700 rounded-tl-xl">System Size</th>
                            <th scope="col" class="p-3 border-r border-gray-700">Approx Cost (₹)</th>
                            <th scope="col" class="p-3 border-r border-gray-700">Govt. Subsidy (₹)</th>
                            <th scope="col" class="p-3 bg-secondary text-primary font-bold">Final Cost (₹)</th>
                            <th scope="col" class="p-3 border-r border-gray-700">Monthly Saving (₹)</th>
                            <th scope="col" class="p-3 rounded-tr-xl">Payback Period (Approx.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b hover:bg-yellow-50/50">
                            <td class="p-3 font-bold">1 kW</td>
                            <td class="p-3">60,000</td>
                            <td class="p-3 text-red-600">12,000 (20%)</td>
                            <td class="p-3 font-extrabold text-primary">48,000</td>
                            <td class="p-3">~1,400</td>
                            <td class="p-3">~2.8 Years</td>
                        </tr>
                        <tr class="border-b hover:bg-yellow-50/50 bg-yellow-50">
                            <td class="p-3 font-bold">5 kW</td>
                            <td class="p-3">3,00,000</td>
                            <td class="p-3 text-red-600">60,000 (20%)</td>
                            <td class="p-3 font-extrabold text-primary text-xl">2,40,000</td>
                            <td class="p-3">~7,000</td>
                            <td class="p-3">~2.8 Years</td>
                        </tr>
                        <tr class="hover:bg-yellow-50/50">
                            <td class="p-3 font-bold">10 kW</td>
                            <td class="p-3">6,00,000</td>
                            <td class="p-3 text-red-600">1,20,000 (20%)</td>
                            <td class="p-3 font-extrabold text-primary">4,80,000</td>
                            <td class="p-3">~15,000</td>
                            <td class="p-3">~2.6 Years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    
    <!-- 6. WHY CHOOSE US -->
    <section id="why-us" class="py-16 bg-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-extrabold mb-10 border-b-4 border-secondary inline-block pb-1">
                Aashi Green Energy को ही क्यों चुनें?
            </h2>
            <div class="grid md:grid-cols-3 gap-8 text-left">
                
                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-bolt text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">⚡ Bill Reduction</h3>
                    <p>70–90% तक बिजली बिल की कटौती की गारंटी। MPEB को बिजली बेचें!</p>
                </div>

                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-hand-holding-usd text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">💰 Govt. Subsidy Benefit</h3>
                    <p>घरेलू ग्राहकों के लिए 20–40% तक **Government Subsidy** का सीधा लाभ।</p>
                </div>

                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-handshake text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">⭐ Trusted Tata Partner</h3>
                    <p>हम **Tata Solar** के अधिकृत पार्टनर हैं। गुणवत्ता, विश्वसनीयता और 25-साल की वारंटी।</p>
                </div>

                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-award text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🛡️ Long Warranty</h3>
                    <p>पैनल पर 25-साल की परफॉर्मेंस वारंटी और इन्वर्टर पर 5-10 साल की वारंटी।</p>
                </div>

                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-map-marker-alt text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🏘️ Local Support</h3>
                    <p>**Jhabua** और **Alirajpur** के लिए लोकल और त्वरित (Quick) सर्विस सपोर्ट।</p>
                </div>

                <div class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover-shadow transform hover:-translate-y-1 transition duration-300">
                    <i class="fas fa-tree text-4xl text-secondary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🌍 Eco-Friendly</h3>
                    <p>पर्यावरण संरक्षण में योगदान: 1kW सोलर = प्रति वर्ष 1 टन CO₂ कटौती।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. FINANCE & SUBSIDY -->
    <section id="finance-subsidy" class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-8 border-b-4 border-secondary inline-block pb-1">
                सरकारी सब्सिडी और आसान फाइनेंस
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Subsidy Details -->
                <div class="p-6 bg-yellow-50 rounded-xl shadow-lg border-l-4 border-secondary">
                    <h3 class="text-2xl font-bold text-primary mb-3">MNRE Subsidy Eligibility</h3>
                    <ul class="space-y-2 text-gray-700 list-disc list-inside">
                        <li>**Domestic (घर के लिए):**
                            <ul class="list-none ml-4">
                                <li>- 3kW तक: **40%** की भारी सब्सिडी</li>
                                <li>- 3kW से 10kW तक: **20%** सब्सिडी</li>
                            </ul>
                        </li>
                        <li>**Commercial (व्यापार के लिए):** 20% तक सब्सिडी</li>
                    </ul>
                </div>
                
                <!-- Finance Details -->
                <div class="p-6 bg-white rounded-xl shadow-lg border-l-4 border-primary">
                    <h3 class="text-2xl font-bold text-primary mb-3">Bank Loan और EMI</h3>
                    <p class="text-lg font-medium text-gray-700">सोलर लगाना अब और भी आसान!</p>
                    <ul class="space-y-2 text-gray-700 mt-2">
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **Bank Partners:** SBI, Ecofy और अन्य फाइनेंस विकल्प।</li>
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **Interest Rate:** 5% से 9% तक की कम ब्याज दर।</li>
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **EMI Starting:** सिर्फ **₹2,500/month** से EMI शुरू।</li>
                    </ul>
                </div>

                <!-- CTA -->
                <div class="p-6 bg-primary text-white rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                    <p class="text-2xl font-extrabold mb-4">
                        जानिये आपकी छत पर कितनी Subsidy मिलेगी
                    </p>
                    <a href="#lead-form" class="inline-flex items-center bg-secondary text-primary text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        → Free Consultation Book करें
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. MPEB NET METERING PROCESS (5 STEPS) -->
    <section id="process" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-10 border-b-4 border-secondary inline-block pb-1">
                MPEB नेट मीटरिंग प्रोसेस (5 आसान स्टेप्स)
            </h2>
            <div class="grid md:grid-cols-5 gap-6">
                <!-- Step 1 -->
                <div class="text-center p-4 bg-gray-50 rounded-xl shadow-md border-t-4 border-primary hover-shadow">
                    <div class="text-4xl font-extrabold text-primary mb-2">1</div>
                    <p class="text-lg font-bold">MPEB Portal पर Apply</p>
                    <p class="text-sm text-gray-600">आपके दस्तावेज़ों के साथ ऑनलाइन आवेदन।</p>
                </div>
                <!-- Step 2 -->
                <div class="text-center p-4 bg-gray-50 rounded-xl shadow-md border-t-4 border-primary hover-shadow">
                    <div class="text-4xl font-extrabold text-primary mb-2">2</div>
                    <p class="text-lg font-bold">Site Inspection</p>
                    <p class="text-sm text-gray-600">MPEB या हमारे इंजीनियर द्वारा छत का निरीक्षण।</p>
                </div>
                <!-- Step 3 -->
                <div class="text-center p-4 bg-gray-50 rounded-xl shadow-md border-t-4 border-primary hover-shadow">
                    <div class="text-4xl font-extrabold text-primary mb-2">3</div>
                    <p class="text-lg font-bold">System Installation</p>
                    <p class="text-sm text-gray-600">Tata Quality Panels और Inverter की स्थापना।</p>
                </div>
                <!-- Step 4 -->
                <div class="text-center p-4 bg-gray-50 rounded-xl shadow-md border-t-4 border-primary hover-shadow">
                    <div class="text-4xl font-extrabold text-primary mb-2">4</div>
                    <p class="text-lg font-bold">Net Meter Connection</p>
                    <p class="text-sm text-gray-600">MPEB द्वारा नेट मीटर लगाकर कनेक्शन देना।</p>
                </div>
                <!-- Step 5 -->
                <div class="text-center p-4 bg-gray-50 rounded-xl shadow-md border-t-4 border-primary hover-shadow">
                    <div class="text-4xl font-extrabold text-primary mb-2">5</div>
                    <p class="text-lg font-bold">Start Selling Power</p>
                    <p class="text-sm text-gray-600">बिजली बेचना शुरू करें और बिल में Credit पाएं!</p>
                </div>
            </div>
            <p class="text-center text-xl font-bold text-gray-700 mt-8">
                <i class="fas fa-hands-helping text-primary mr-2"></i> **हम पूरी प्रक्रिया में आपकी मदद करेंगे** — कागजी कार्रवाई से लेकर फाइनल मीटर कनेक्शन तक।
            </p>
        </div>
    </section>

    <!-- 9. OUR SERVICES -->
    <section id="services" class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-8 border-b-4 border-secondary inline-block pb-1">
                हमारी विशेषज्ञता (Our Services)
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div class="p-6 border rounded-xl shadow-sm bg-white">
                    <i class="fas fa-map-marked-alt text-3xl text-primary mb-3"></i>
                    <h3 class="font-bold text-lg">Free Site Survey & Consultation</h3>
                    <p class="text-sm text-gray-600">आपकी छत की क्षमता का सटीक आकलन।</p>
                </div>
                <div class="p-6 border rounded-xl shadow-sm bg-white">
                    <i class="fas fa-file-contract text-3xl text-primary mb-3"></i>
                    <h3 class="font-bold text-lg">MPEB Approval Support</h3>
                    <p class="text-sm text-gray-600">सरकारी अप्रूवल और कागज़ी कार्रवाई में पूरी सहायता।</p>
                </div>
                <div class="p-6 border rounded-xl shadow-sm bg-white">
                    <i class="fas fa-solar-panel text-3xl text-primary mb-3"></i>
                    <h3 class="font-bold text-lg">Tata Quality Panels</h3>
                    <p class="text-sm text-gray-600">सिर्फ उच्चतम गुणवत्ता वाले **Tata Solar** पैनल का उपयोग।</p>
                </div>
                <div class="p-6 border rounded-xl shadow-sm bg-white">
                    <i class="fas fa-headset text-3xl text-primary mb-3"></i>
                    <h3 class="font-bold text-lg">24×7 Maintenance Support</h3>
                    <p class="text-sm text-gray-600">इंस्टॉलेशन के बाद भी त्वरित और विश्वसनीय सपोर्ट।</p>
                </div>
            </div>

            <div class="text-center mt-10">
                <p class="text-xl font-bold text-gray-800 mb-4">
                    तुरंत संपर्क करें: **📞 9425102683** | **💬 WhatsApp 9425102683**
                </p>
            </div>
        </div>
    </section>

    <!-- 10. LEAD FORM SECTION (WhatsApp Integration & Razorpay) -->
    <section id="lead-form" class="py-16 bg-primary">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-white mb-8">
                Free Solar Consultation Form
            </h2>

            <!-- OPTION 1: WhatsApp Inquiry Form (Now with Firestore Lead Saving) -->
            <form id="solar-quote-form" class="bg-white p-6 md:p-10 rounded-xl shadow-2xl space-y-4 mb-8">
                <h3 class="text-xl font-bold text-primary mb-3">पहले Free Quote लें (WhatsApp द्वारा)</h3>
                <div class="relative">
                    <label for="name" class="block text-sm font-medium text-gray-700">आपका नाम</label>
                    <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                </div>
                <div class="relative">
                    <label for="mobile" class="block text-sm font-medium text-gray-700">मोबाइल नंबर</label>
                    <input type="tel" id="mobile" name="mobile" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                </div>
                <div class="relative">
                    <label for="location" class="block text-sm font-medium text-gray-700">शहर/स्थान (जैसे Jhabua)</label>
                    <input type="text" id="location" name="location" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                </div>
                <div class="relative">
                    <label for="bill" class="block text-sm font-medium text-gray-700">मासिक बिजली बिल (Approx. ₹)</label>
                    <input type="number" id="bill" name="bill" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="usage" class="block text-sm font-medium text-gray-700">उपयोग का प्रकार</label>
                        <select id="usage" name="usage" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                            <option value="Home">Home (घरेलू)</option>
                            <option value="Business">Business (व्यावसायिक)</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <label for="visit" class="block text-sm font-medium text-gray-700">Free Site Visit?</label>
                        <select id="visit" name="visit" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                            <option value="Yes">Yes (हाँ)</option>
                            <option value="No">No (नहीं)</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" id="whatsapp-btn" class="w-full inline-flex items-center justify-center bg-secondary text-primary text-xl font-bold py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
                    <i class="fab fa-whatsapp mr-3"></i> ✅ Get Quote on WhatsApp
                </button>
                <p id="form-message" class="text-center text-base font-semibold mt-3 hidden"></p>
            </form>

            <!-- OPTION 2: Direct Payment/Booking Button (Razorpay) -->
            <div class="bg-white p-6 md:p-10 rounded-xl shadow-2xl text-center border-t-4 border-primary">
                <h3 class="text-2xl font-bold text-primary mb-4">✨ सीधे ₹1000 में अपनी Site Visit और बुकिंग सुनिश्चित करें ✨</h3>
                <p class="text-gray-700 mb-6">
                    मात्र **₹1000** का टोकन अमाउंट देकर अपनी प्राथमिकता बुकिंग (Priority Booking) कंफर्म करें। यह राशि आपके फाइनल सिस्टम बिल में **पूरी तरह एडजस्ट** हो जाएगी।
                </p>
                
                <!-- Razorpay Button Integration -->
                <div class="razorpay-form">
                    <form>
                        <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_RcUsi38cv6CPq2" async> </script>
                    </form>
                </div>
                <!-- End Razorpay Button -->

            </div>
            
        </div>
    </section>

    <!-- 11. TESTIMONIALS -->
    <section id="testimonials" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-10 border-b-4 border-secondary inline-block pb-1">
                हमारे संतुष्ट ग्राहक (Jhabua Region)
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                
                <!-- Testimonial 1: Jhabua -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-primary">
                    <p class="italic text-gray-700 mb-4">
                        "Aashi Green Energy की टीम ने 5kW का सोलर सिस्टम 10 दिन में लगा दिया। Tata Solar की गुणवत्ता और सब्सिडी का लाभ मिला। अब मेरा बिजली बिल ₹7,000 से घटकर सिर्फ ₹450 आता है! Jhabua में बेस्ट सर्विस।"
                    </p>
                    <p class="font-bold text-primary">- Rajesh Patidar (व्यवसायी, Jhabua)</p>
                </div>

                <!-- Testimonial 2: Alirajpur -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-primary">
                    <p class="italic text-gray-700 mb-4">
                        "3kW के सिस्टम पर 40% सब्सिडी मिलने के बाद मेरी लागत बहुत कम हो गई। MPEB Net Metering की पूरी प्रक्रिया इन्होंने ही सम्भाली। Alirajpur में सोलर लगवाने के लिए इनकी ही सलाह दूंगा।"
                    </p>
                    <p class="font-bold text-primary">- Suresh Bhabhor (किसान, Alirajpur)</p>
                </div>

                <!-- Testimonial 3: Meghnagar -->
                <div class="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-primary">
                    <p class="italic text-gray-700 mb-4">
                        "पहले मैं चिंतित था कि सोलर कैसे काम करेगा, लेकिन Aashi Team ने सब कुछ समझा दिया। 25 साल की वारंटी और Tata का भरोसा है। Meghnagar में बिजली की समस्या अब खत्म।"
                    </p>
                    <p class="font-bold text-primary">- Smt. Suman Devi (गृहिणी, Meghnagar)</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 12. FINAL CTA (BOTTOM BANNER) -->
    <section id="final-cta" class="bg-secondary py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                अपनी छत को बिजलीघर बनाएं ⚡ आज ही सोलर अपनाएं!
            </h2>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:9425102683" class="inline-flex items-center justify-center bg-primary text-white text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-105">
                    <i class="fas fa-phone mr-2"></i> 📞 Call Now: 9425102683
                </a>
                <a href="https://wa.me/919425102683?text=मैं%20अपनी%20छत%20को%20बिजलीघर%20बनाना%20चाहता%20हूँ" target="_blank" class="inline-flex items-center justify-center bg-white text-primary border border-primary text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <i class="fab fa-whatsapp mr-2"></i> 💬 Get WhatsApp Quote
                </a>
            </div>
        </div>
    </section>

    <!-- 13. FOOTER SECTION -->
    <footer class="bg-gray-800 text-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <!-- Col 1: Logo & Tagline -->
            <div>
                <div class="flex items-center space-x-2 mb-3">
                    <img src="https://placehold.co/30x30/008037/FFFFFF?text=A" onerror="this.onerror=null;this.src='https://placehold.co/30x30/008037/FFFFFF?text=A';" alt="Aashi Green Energy Logo" class="h-8 w-8 rounded-full">
                    <span class="text-xl font-extrabold text-primary">Aashi Green Energy</span>
                </div>
                <p class="text-sm italic mb-2">“आपकी बचत – हमारा संकल्प 🌞”</p>
                <p class="text-xs text-gray-400">© 2025 Aashi Green Energy Pvt. Ltd.</p>
                <p class="text-xs text-gray-400">In Collaboration with **Tata Solar**</p>
                <p class="text-xs text-gray-400">MP Govt Authorized Partner</p>
            </div>
            
            <!-- Col 2: Contact & Service Area -->
            <div>
                <h4 class="font-bold text-lg mb-3 border-b border-primary pb-1">हमसे संपर्क करें</h4>
                <p class="text-sm mb-1"><i class="fas fa-map-marker-alt text-secondary mr-2"></i> **Address:** Near Krishi Upaj Mandi, Kishan Puri, Jhabua – 457661</p>
                <p class="text-sm mb-1"><i class="fas fa-phone text-secondary mr-2"></i> **Call:** 9425102683</p>
                <p class="text-sm mb-1"><i class="fab fa-whatsapp text-secondary mr-2"></i> **WhatsApp:** 9425102683</p>
            </div>

            <!-- Col 3: Service Area -->
            <div>
                <h4 class="font-bold text-lg mb-3 border-b border-primary pb-1">सेवा क्षेत्र (Service Area)</h4>
                <ul class="text-sm space-y-1">
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Jhabua (50 km radius)</li>
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Alirajpur</li>
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Dahod</li>
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Meghnagar, Petlawad</li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- JavaScript for Firebase and Form Submission -->
    <script type="module">
        // Firebase Imports (MUST use type="module" and full URLs for HTML)
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
        import { setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Global Firebase Variables (Mandatory Canvas Variables)
        let db;
        let auth;
        let userId = 'anonymous'; // Default placeholder

        // Canvas provided variables setup
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
        
        // --- Firebase Initialization and Auth ---
        if (firebaseConfig) {
            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            auth = getAuth(app);
            setLogLevel('Debug'); // Enable debug logging for Firestore

            async function initializeAuth() {
                try {
                    // Try signing in with custom token if provided
                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                        const userCredential = await signInWithCustomToken(auth, __initial_auth_token);
                        userId = userCredential.user.uid;
                        console.log('Successfully signed in with custom token. User ID:', userId);
                    } else {
                        // Fallback to anonymous sign-in
                        const userCredential = await signInAnonymously(auth);
                        userId = userCredential.user.uid;
                        console.log('Successfully signed in anonymously. User ID:', userId);
                    }
                } catch (error) {
                    console.error("Firebase Auth Error: Could not sign in.", error);
                    // Use a fallback unique ID if auth fails completely
                    userId = 'fallback-' + crypto.randomUUID();
                }
            }
            initializeAuth();
        } else {
            console.error("Firebase config is missing. Leads will not be stored persistently.");
        }

        // --- Firestore Lead Saving Function ---
        async function saveLeadToFirestore(leadData) {
            if (!db || userId.startsWith('fallback')) {
                console.error("Firestore DB is not ready or authentication failed. Cannot save lead.");
                return false;
            }

            // Path: /artifacts/{appId}/users/{userId}/leads (Private Data)
            const leadsCollectionPath = `/artifacts/${appId}/users/${userId}/leads`;
            const leadsCollectionRef = collection(db, leadsCollectionPath);

            try {
                const docRef = await addDoc(leadsCollectionRef, {
                    ...leadData,
                    timestamp: new Date().toISOString(),
                    source: 'Website Form'
                });
                console.log("Lead successfully saved to Firestore with Document ID:", docRef.id);
                return true;
            } catch (error) {
                console.error("Error saving lead to Firestore:", error);
                return false;
            }
        }

        // --- Form Submission Handler ---
        document.getElementById('solar-quote-form').addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const location = document.getElementById('location').value;
            const bill = document.getElementById('bill').value;
            const usage = document.getElementById('usage').value;
            const visit = document.getElementById('visit').value;
            
            const messageEl = document.getElementById('form-message');
            const whatsappBtn = document.getElementById('whatsapp-btn');
            const whatsappNumber = '919425102683'; // Official number

            if (!mobile || !bill) {
                messageEl.textContent = "⚠️ कृपया सभी आवश्यक फ़ील्ड भरें।";
                messageEl.classList.remove('hidden');
                messageEl.classList.add('text-red-500');
                return;
            }

            // 1. Prepare Data and Set Loading State
            const leadData = { name, mobile, location, bill: parseInt(bill), usage, visit };
            
            whatsappBtn.disabled = true;
            whatsappBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-3"></i> डेटा सेव हो रहा है...';
            messageEl.classList.remove('hidden');
            messageEl.classList.remove('text-red-500', 'text-primary');
            messageEl.textContent = "डेटाबेस में लीड सेव की जा रही है...";

            // 2. Save to Firestore
            const isSaved = await saveLeadToFirestore(leadData);

            // 3. Update Message based on save status
            if (isSaved) {
                messageEl.textContent = "✅ लीड सफलतापूर्वक सेव हो गई। अब WhatsApp चैट शुरू होगी।";
                messageEl.classList.add('text-primary');
            } else {
                messageEl.textContent = "⚠️ डेटा सेव नहीं हो पाया। फिर भी, हम आपको WhatsApp पर भेज रहे हैं।";
                messageEl.classList.add('text-red-500');
            }

            // 4. Generate and open WhatsApp Link (always done as a secondary action)
            const whatsappMessage = `नमस्ते Aashi Green Energy,\n\nमुझे सोलर कोटेशन चाहिए। यहाँ मेरा विवरण है:\n\n*नाम:* ${name}\n*मोबाइल:* ${mobile}\n*स्थान:* ${location}\n*मासिक बिल:* ₹${bill}\n*उपयोग का प्रकार:* ${usage}\n*Free Site Visit:* ${visit}\n\nकृपया मुझे सब्सिडी और फाइनल कॉस्ट बताएं। (Source: Website Lead ID: ${isSaved ? 'Saved' : 'Not Saved'})`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open the WhatsApp link in a new tab
            window.open(whatsappLink, '_blank');

            // 5. Reset State
            whatsappBtn.disabled = false;
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp mr-3"></i> ✅ Get Quote on WhatsApp';
            this.reset();
            // Hide the message after a short delay
            setTimeout(() => { 
                messageEl.classList.add('hidden'); 
            }, 7000);
        });
    </script>
</body>
</html>
