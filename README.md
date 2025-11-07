<!DOCTYPE html>
<html lang="hi" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aashi Green Energy × Tata Solar Jhabua | ऑन-ग्रिड सोलर, MP सब्सिडी, नेट मीटरिंग</title>
    <!-- Tailwind CSS CDN --><script src="https://cdn.tailwindcss.com"></script>
    <!-- Font for Professional Look --><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <style>
        /* Custom Variables */
        :root {
            --primary-green: #059669; /* Emerald 600 */
            --primary-dark: #047857; /* Emerald 700 */
            --secondary-yellow: #FACC15; /* Amber 400 */
            --bg-color: #F8FAFCA0; /* Slightly off-white */
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: #1F2937; /* Dark Gray */
        }
        .bg-primary { background-color: var(--primary-green); }
        .text-primary { color: var(--primary-green); }
        .border-primary { border-color: var(--primary-green); }
        .bg-secondary { background-color: var(--secondary-yellow); }
        
        /* Enhanced Shadow & Hover Effects */
        .card-shadow {
            transition: all 0.3s ease-in-out;
            box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.1), 0 4px 6px -2px rgba(5, 150, 105, 0.05);
        }
        .card-shadow:hover {
            box-shadow: 0 20px 25px -5px rgba(5, 150, 105, 0.2), 0 10px 10px -5px rgba(5, 150, 105, 0.04);
            transform: translateY(-2px);
        }
        .cta-button {
            transition: all 0.3s ease-in-out;
        }
        .cta-button:hover {
            filter: brightness(1.05);
            transform: translateY(-1px) scale(1.01);
        }

        /* --- Custom Flow Diagram Styling --- */
        .flow-step {
            background-color: #fff;
            padding: 1.25rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e2e8f0; /* light gray border */
            text-align: center;
            position: relative;
            z-index: 10;
        }
        .flow-icon {
            font-size: 2.5rem; /* 40px */
            margin-bottom: 0.75rem;
            color: var(--primary-green);
        }
        .flow-text {
            font-weight: 600; /* semibold */
            color: #1f2937; /* dark gray */
        }
        .flow-arrow {
            position: absolute;
            width: 100%;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary-yellow);
            font-size: 1.5rem; /* 24px */
            left: 0;
            z-index: 5;
        }
        /* Arrows for desktop */
        @media (min-width: 768px) {
            .flow-arrow-h { /* Horizontal arrow */
                top: 50%;
                transform: translateY(-50%) translateX(100%);
                width: 50px; /* Adjust length as needed */
                left: calc(100% - 25px); /* Position between elements */
            }
        }
        /* Arrows for mobile (vertical) */
        @media (max-width: 767px) {
            .flow-arrow-v { /* Vertical arrow */
                left: 50%;
                transform: translateX(-50%) translateY(100%);
                height: 40px; /* Adjust length as needed */
                top: calc(100% - 20px); /* Position between elements */
            }
            .flow-step {
                margin-bottom: 2.5rem; /* Space for arrow */
            }
        }
    </style>
</head>
<body class="antialiased">

    <!-- Header & Navigation --><header class="sticky top-0 z-50 bg-white shadow-xl border-t-8 border-primary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <!-- Logo/Company Name --><div class="flex items-center space-x-3">
                <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center font-black text-white text-xl shadow-lg">A</div>
                <span class="text-2xl font-black text-primary tracking-tight">Aashi Green Energy</span>
                <span class="hidden sm:inline text-sm font-medium text-gray-500">× TATA Solar</span>
            </div>

            <!-- Contact CTA (Mobile & Desktop) --><div class="flex items-center space-x-3">
                <a href="tel:8989024411" class="hidden md:inline-flex items-center bg-primary text-white text-base font-semibold py-2 px-4 rounded-full hover:bg-emerald-700 cta-button">
                    <i class="fas fa-phone mr-2"></i> 89890 24411
                </a>
                <a href="https://wa.me/918989024411" target="_blank" class="flex items-center bg-secondary text-gray-900 text-base font-bold py-2 px-4 rounded-full shadow-md hover:bg-amber-300 cta-button">
                    <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
                <a href="#lead-form" class="md:hidden text-primary text-2xl"><i class="fas fa-sun"></i></a>
            </div>
        </div>
    </header>

    <!-- 1. HERO SECTION (Video Player Added) --><section id="hero" class="bg-gray-50 py-10 md:py-16 flex items-center border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-snug text-gray-900">
                <span class="text-primary block">बिजली बिल से आज़ादी पाएं!</span>
                <span class="bg-secondary px-4 py-1 rounded-xl text-gray-900 shadow-md inline-block mt-2">MP Subsidy और Net Metering के साथ</span>
            </h1>
            <p class="text-xl sm:text-2xl font-medium mb-8 text-gray-600">
                Jhabua और Alirajpur में **Tata Solar** की गुणवत्ता और भरोसे के साथ!
            </p>

            <!-- YouTube Video Embed (16:9 Aspect Ratio) --><h2 class="text-2xl font-bold text-primary mb-4">सोलर से जुड़ी पूरी जानकारी इस वीडियो में देखें</h2>
            <div class="max-w-4xl mx-auto mb-10">
                <!-- Responsive Aspect Ratio Container (16:9) --><div class="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
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
            <!-- End YouTube Video Embed --><div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#lead-form" class="cta-button inline-flex items-center justify-center bg-primary text-white text-lg font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-emerald-700">
                    <i class="fas fa-screwdriver-wrench mr-2"></i> 📞 Free Site Visit Book करें
                </a>
                <a href="https://wa.me/918989024411?text=मुझे%20फ्री%20कोटेशन%20चाहिए" target="_blank" class="cta-button inline-flex items-center justify-center bg-secondary text-gray-900 text-lg font-bold py-3 px-8 rounded-full shadow-2xl hover:shadow-3xl">
                    <i class="fab fa-whatsapp mr-2"></i> 💬 WhatsApp पर Quote पाएं
                </a>
            </div>
        </div>
    </section>

    <!-- 2. ABOUT & INTRO --><section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-2">
                Tata Solar का भरोसा, Aashi Green Energy की सर्विस
            </h2>
            <p class="text-xl font-semibold text-primary mb-8">
                Jhabua और Alirajpur के लिए सर्वश्रेष्ठ ऑन-ग्रिड सोलर समाधान।
            </p>
            
            <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-lg">
                <div class="p-6 bg-emerald-50 rounded-xl card-shadow border-t-4 border-primary">
                    <i class="fas fa-certificate text-3xl text-primary mb-3"></i>
                    <p class="font-bold text-gray-800">100% Authorized Partner</p>
                    <p class="text-sm text-gray-600">हम Tata Power Solar के अधिकृत चैनल पार्टनर हैं, जो आपको उच्चतम गुणवत्ता की गारंटी देते हैं।</p>
                </div>
                <div class="p-6 bg-emerald-50 rounded-xl card-shadow border-t-4 border-primary">
                    <i class="fas fa-hand-holding-usd text-3xl text-primary mb-3"></i>
                    <p class="font-bold text-gray-800">सरकारी सब्सिडी में सहायता</p>
                    <p class="text-sm text-gray-600">20% से 40% तक की MP सरकारी सब्सिडी में पूरी कागजी कार्रवाई हम करते हैं।</p>
                </div>
                <div class="p-6 bg-emerald-50 rounded-xl card-shadow border-t-4 border-primary">
                    <i class="fas fa-map-marked-alt text-3xl text-primary mb-3"></i>
                    <p class="font-bold text-gray-800">लोकल और त्वरित सर्विस</p>
                    <p class="text-sm text-gray-600">झाबुआ/अलीराजपुर में लोकल टीम, जिससे इंस्टॉलेशन और मेंटेनेंस बहुत जल्दी होता है।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. WHAT IS ON-GRIDA SOLAR SYSTEM (WITH GRAPHICS) --><section id="ongrid-solar" class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-10 border-b-4 border-secondary inline-block pb-2">
                ऑन-ग्रिड सोलर सिस्टम: कैसे काम करता है?
            </h2>
            
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div class="space-y-6 text-lg text-gray-700 p-6 bg-white rounded-xl shadow-xl card-shadow">
                    <p>
                        **ऑन-ग्रिड सोलर सिस्टम (On-Grid Solar System)** वह प्रणाली है जो सीधे MPEB (मध्य प्रदेश विद्युत बोर्ड) के बिजली ग्रिड से जुड़ी होती है। यह सबसे लोकप्रिय और किफायती सोलर समाधान है।
                    </p>
                    <div class="border-l-4 border-secondary pl-4">
                        <h3 class="font-extrabold text-xl text-gray-900 mb-2">नेट मीटरिंग (Net Metering) का जादू</h3>
                        <p class="text-base">
                            दिन में जब सोलर पैनल बिजली बनाते हैं, तो सबसे पहले आपके घर की ज़रूरतें पूरी होती हैं। बची हुई (Extra) बिजली MPEB ग्रिड को निर्यात (Export) कर दी जाती है, और आपको इसका क्रेडिट मिलता है। रात में या जब सोलर काम नहीं करता, तो आप ग्रिड से बिजली लेते हैं।
                        </p>
                    </div>
                    <ul class="list-disc list-inside space-y-2 pl-5">
                        <li class="font-semibold text-gray-800"><span class="text-primary font-bold">बैटरी की कोई जरूरत नहीं:</span> बैटरी के महंगे रखरखाव और खर्च से आजादी।</li>
                        <li class="font-semibold text-gray-800"><span class="text-primary font-bold">आजीवन बचत:</span> एक बार का निवेश, 25 साल तक की मुफ्त बिजली।</li>
                    </ul>
                </div>

                <!-- NEW: Visual Flow Diagram --><div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-emerald-50 rounded-2xl shadow-2xl border-2 border-primary">
                    
                    <!-- Step 1: Solar Panels --><div class="flow-step md:col-span-1 relative">
                        <i class="fas fa-solar-panel flow-icon text-yellow-500"></i>
                        <p class="flow-text">1. सोलर पैनल</p>
                        <p class="text-xs text-gray-500">सूर्य की रोशनी को बिजली में बदलते हैं।</p>
                        <div class="flow-arrow flow-arrow-v md:flow-arrow-h">
                            <i class="fas fa-arrow-right md:hidden"></i><i class="fas fa-arrow-right hidden md:inline-block"></i>
                        </div>
                    </div>

                    <!-- Step 2: Inverter --><div class="flow-step md:col-span-1 relative">
                        <i class="fas fa-cogs flow-icon"></i>
                        <p class="flow-text">2. सोलर इन्वर्टर</p>
                        <p class="text-xs text-gray-500">DC बिजली को AC बिजली में बदलता है।</p>
                        <div class="flow-arrow flow-arrow-v md:flow-arrow-h">
                            <i class="fas fa-arrow-right md:hidden"></i><i class="fas fa-arrow-right hidden md:inline-block"></i>
                        </div>
                    </div>

                    <!-- Step 3: Home/Business Usage --><div class="flow-step md:col-span-1 relative">
                        <i class="fas fa-home flow-icon"></i>
                        <p class="flow-text">3. घर/बिजनेस</p>
                        <p class="text-xs text-gray-500">बिजली का उपयोग करते हैं।</p>
                    </div>

                    <!-- Arrow from Home/Business to Grid (Horizontal on desktop, then vertical for next row) --><div class="hidden md:block col-span-3 text-center relative py-4">
                        <i class="fas fa-arrows-alt-h text-2xl text-secondary"></i>
                        <p class="text-sm font-semibold text-gray-700 mt-1">बिजली का आयात/निर्यात</p>
                    </div>
                    <div class="md:hidden col-span-1 text-center relative py-4">
                        <i class="fas fa-arrow-down text-2xl text-secondary"></i>
                        <p class="text-sm font-semibold text-gray-700 mt-1">बिजली का आयात/निर्यात</p>
                    </div>


                    <!-- Step 4: Net Meter --><div class="flow-step md:col-span-1 relative">
                        <i class="fas fa-tachometer-alt flow-icon"></i>
                        <p class="flow-text">4. नेट मीटर</p>
                        <p class="text-xs text-gray-500">आयात-निर्यात का हिसाब रखता है।</p>
                        <div class="flow-arrow flow-arrow-v md:flow-arrow-h">
                            <i class="fas fa-arrow-right md:hidden"></i><i class="fas fa-arrow-right hidden md:inline-block"></i>
                        </div>
                    </div>

                    <!-- Step 5: MPEB Grid --><div class="flow-step md:col-span-1 relative md:col-start-3">
                        <i class="fas fa-industry flow-icon"></i>
                        <p class="flow-text">5. MPEB ग्रिड</p>
                        <p class="text-xs text-gray-500">अतिरिक्त बिजली लेता है, जरूरत पर देता है।</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. DOMESTIC SYSTEM CAPACITY & BENEFIT TABLE (Enhanced Design) --><section id="domestic-cost" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-4">
                4. घरेलू सोलर सिस्टम क्षमता और लाभ
            </h2>
            <p class="text-xl text-center text-gray-600 mb-10">
                **MP Govt Subsidy** और अनुमानित मासिक बचत (कीमतें हटा दी गई हैं)
            </p>

            <div class="table-container p-6 rounded-2xl shadow-2xl border border-gray-200 overflow-x-auto">
                <table class="cost-table w-full text-left text-base border-collapse">
                    <thead class="bg-emerald-700 text-white rounded-t-xl">
                        <tr>
                            <th scope="col" class="p-4 rounded-tl-xl">System Size (kW)</th>
                            <th scope="col" class="p-4">Govt. Subsidy Eligibility</th>
                            <th scope="col" class="p-4 bg-secondary text-gray-900 font-black">Approx. Monthly Saving (₹)</th>
                            <th scope="col" class="p-4 rounded-tr-xl">Recommended Bill Range (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-100 hover:bg-green-50/50">
                            <td class="p-4 font-bold text-lg text-primary">1 kW</td>
                            <td class="p-4 text-red-600 font-semibold">**40% Subsidy** तक</td>
                            <td class="p-4 font-extrabold text-primary text-xl">~1,200 - 1,500</td>
                            <td class="p-4 text-gray-700">~1,500 तक</td>
                        </tr>
                        <tr class="border-b border-gray-100 hover:bg-green-50/50 bg-gray-50">
                            <td class="p-4 font-bold text-lg text-primary">3 kW</td>
                            <td class="p-4 text-red-600 font-semibold">**40% Subsidy** (पहले 3kW पर)</td>
                            <td class="p-4 font-extrabold text-primary text-xl">~3,800 - 4,500</td>
                            <td class="p-4 text-gray-700">~4,500 तक</td>
                        </tr>
                        <tr class="border-b border-gray-100 hover:bg-green-50/50">
                            <td class="p-4 font-bold text-lg text-primary">5 kW</td>
                            <td class="p-4 text-red-600 font-semibold">3kW के बाद **20% Subsidy**</td>
                            <td class="p-4 font-extrabold text-primary text-xl">~6,200 - 7,500</td>
                            <td class="p-4 text-gray-700">~7,500 तक</td>
                        </tr>
                        <tr class="hover:bg-green-50/50">
                            <td class="p-4 font-bold text-lg text-primary">10 kW</td>
                            <td class="p-4 text-red-600 font-semibold">पूरे सिस्टम पर **20% Subsidy**</td>
                            <td class="p-4 font-extrabold text-primary text-xl">~12,500+</td>
                            <td class="p-4 text-gray-700">~15,000+</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="text-center mt-10">
                <p class="text-sm font-medium text-gray-500 mb-4">
                    **नोट:** हमारी लागत में **Tata** पैनल, इन्वर्टर, नेट मीटर और इंस्टॉलेशन शामिल हैं। सब्सिडी दरें भारत सरकार के MNRE दिशानिर्देशों के अनुसार हैं।
                </p>
                <a href="#lead-form" class="cta-button inline-flex items-center justify-center bg-primary text-white text-xl font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-emerald-700">
                    <i class="fas fa-calculator mr-3"></i> अपनी Subsidy और Final Cost का Quote पाएं
                </a>
            </div>
        </div>
    </section>

    <!-- 5. COMMERCIAL SYSTEM CAPACITY & BENEFIT TABLE (Enhanced Design) --><section id="commercial-cost" class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-4">
                5. व्यावसायिक सोलर सिस्टम क्षमता और लाभ
            </h2>
            <p class="text-xl text-center text-gray-600 mb-10">
                फैक्ट्रियों, स्कूलों, और अस्पतालों के लिए सबसे तेज़ रिटर्न!
            </p>

            <div class="table-container p-6 rounded-2xl shadow-2xl border border-gray-300 overflow-x-auto">
                <table class="cost-table w-full text-left text-base border-collapse">
                    <thead class="bg-gray-800 text-white rounded-t-xl">
                        <tr>
                            <th scope="col" class="p-4 rounded-tl-xl">System Size (kW)</th>
                            <th scope="col" class="p-4">Approx. Monthly Saving (₹)</th>
                            <th scope="col" class="p-4">Govt. Subsidy (Max.)</th>
                            <th scope="col" class="p-4 bg-secondary text-gray-900 font-black rounded-tr-xl">Best For (अनुशंसित उपयोग)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
                            <td class="p-4 font-bold text-lg text-primary">5 kW</td>
                            <td class="p-4 font-extrabold text-primary">~7,000 - 9,000</td>
                            <td class="p-4 text-red-600 font-semibold">20% Subsidy</td>
                            <td class="p-4 text-gray-700">छोटे कारखाने, बड़ा घर, वेयरहाउस</td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-200/50 bg-white">
                            <td class="p-4 font-bold text-lg text-primary">10 kW</td>
                            <td class="p-4 font-extrabold text-primary text-xl">~15,000 - 20,000</td>
                            <td class="p-4 text-red-600 font-semibold">20% Subsidy</td>
                            <td class="p-4 text-gray-700">मीडियम फैक्ट्री, स्कूल, अस्पताल</td>
                        </tr>
                        <tr class="hover:bg-gray-200/50">
                            <td class="p-4 font-bold text-lg text-primary">25 kW+</td>
                            <td class="p-4 font-extrabold text-primary">~35,000+</td>
                            <td class="p-4 text-red-600 font-semibold">20% Subsidy</td>
                            <td class="p-4 text-gray-700">बड़े कॉलेज, कोल्ड स्टोरेज, उद्योग</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center mt-10">
                <a href="#lead-form" class="cta-button inline-flex items-center justify-center bg-primary text-white text-xl font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-emerald-700">
                    <i class="fas fa-handshake mr-3"></i> व्यावसायिक Quote के लिए संपर्क करें
                </a>
            </div>
        </div>
    </section>
    
    <!-- 6. WHY CHOOSE US (Enhanced Card Design) --><section id="why-us" class="py-16 bg-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-extrabold mb-12 border-b-4 border-secondary inline-block pb-2">
                Aashi Green Energy को ही क्यों चुनें?
            </h2>
            <div class="grid md:grid-cols-3 gap-8 text-left">
                
                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-bolt text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">⚡ 90% Bill Reduction</h3>
                    <p class="text-sm">हम आपके बिजली बिल को 70% से 90% तक कम करने की क्षमता वाले सिस्टम लगाते हैं। बिजली बेचकर मुनाफा कमाएं!</p>
                </div>

                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-hand-holding-usd text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">💰 40% Subsidy Advantage</h3>
                    <p class="text-sm">घरेलू ग्राहकों के लिए 40% तक की भारी सरकारी सब्सिडी का लाभ उठाएं। हम सुनिश्चित करते हैं कि आपको पूरा फायदा मिले।</p>
                </div>

                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-handshake text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">⭐ Tata Solar Quality</h3>
                    <p class="text-sm">सिर्फ भारत के सबसे भरोसेमंद ब्रांड **Tata Solar** के उच्चतम दक्षता वाले पैनल और इनवर्टर। 25 साल की परफॉर्मेंस वारंटी।</p>
                </div>

                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-award text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🛡️ MPEB Approved</h3>
                    <p class="text-sm">हम केवल MPEB-अनुमोदित, नेट मीटरिंग-सक्षम सिस्टम ही डिज़ाइन और इंस्टॉल करते हैं, जो सभी मानकों को पूरा करते हैं।</p>
                </div>

                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-map-marker-alt text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🏘️ Local Jhabua Support</h3>
                    <p class="text-sm">झाबुआ/अलीराजपुर में हमारी लोकल सर्विस टीम है, जिसका मतलब है त्वरित इंस्टॉलेशन और भविष्य में बेहतर मेंटेनेंस सपोर्ट।</p>
                </div>

                <div class="bg-white text-gray-900 p-6 rounded-xl shadow-xl card-shadow border-t-8 border-secondary">
                    <i class="fas fa-tree text-4xl text-primary mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">🌍 Clean Energy Future</h3>
                    <p class="text-sm">सोलर अपनाकर आप न केवल बचत करते हैं, बल्कि पर्यावरण को बचाने और प्रदूषण को कम करने में भी मदद करते हैं।</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. FINANCE & SUBSIDY --><section id="finance-subsidy" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-center text-primary mb-10 border-b-4 border-secondary inline-block pb-2">
                सरकारी सब्सिडी और आसान फाइनेंस
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Subsidy Details --><div class="p-6 bg-white rounded-xl shadow-xl card-shadow border-l-8 border-secondary">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Subsidy Breakdown</h3>
                    <p class="text-primary font-bold mb-2">प्रधानमंत्री सूर्य घर योजना के तहत:</p>
                    <ul class="space-y-2 text-gray-700 list-disc list-inside">
                        <li>**1-3 kW:** 40% तक सब्सिडी</li>
                        <li>**3-10 kW:** 20% तक सब्सिडी</li>
                        <li>**कमर्शियल:** 20% तक सब्सिडी</li>
                    </ul>
                </div>
                
                <!-- Finance Details --><div class="p-6 bg-white rounded-xl shadow-xl card-shadow border-l-8 border-primary">
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Bank Loan और EMI</h3>
                    <p class="text-lg font-medium text-gray-700">सोलर लगाना अब और भी आसान!</p>
                    <ul class="space-y-2 text-gray-700 mt-2">
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **Bank Partners:** SBI, Ecofy और अन्य।</li>
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **Interest Rate:** सबसे कम ब्याज दर।</li>
                        <li><i class="fas fa-check-circle text-primary mr-2"></i> **EMI:** अपनी मासिक बचत से किश्तें भरें।</li>
                    </ul>
                </div>

                <!-- CTA --><div class="p-6 bg-primary text-white rounded-xl shadow-2xl flex flex-col justify-center items-center text-center cta-button">
                    <p class="text-2xl font-extrabold mb-4">
                        जानिये आपकी छत पर कितनी Subsidy मिलेगी
                    </p>
                    <a href="#lead-form" class="inline-flex items-center bg-secondary text-gray-900 text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        → Free Consultation Book करें
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. LEAD FORM SECTION (WhatsApp Integration & Razorpay) --><section id="lead-form" class="py-16 bg-gray-900">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-extrabold text-white text-center mb-10">
                ✨ Free Solar Consultation Form ✨
            </h2>

            <!-- OPTION 1: WhatsApp Inquiry Form (Firestore Lead Saving) --><form id="solar-quote-form" class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl space-y-5 mb-8 border-t-8 border-secondary">
                <h3 class="text-2xl font-black text-primary mb-3">पहले Free Quote लें (WhatsApp द्वारा)</h3>
                
                <div class="relative">
                    <label for="name" class="block text-sm font-medium text-gray-700">आपका नाम</label>
                    <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                </div>
                <div class="relative">
                    <label for="mobile" class="block text-sm font-medium text-gray-700">मोबाइल नंबर</label>
                    <input type="tel" id="mobile" name="mobile" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                </div>
                <div class="relative">
                    <label for="location" class="block text-sm font-medium text-gray-700">शहर/स्थान (Jhabua/Alirajpur)</label>
                    <input type="text" id="location" name="location" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                </div>
                <div class="relative">
                    <label for="bill" class="block text-sm font-medium text-gray-700">मासिक बिजली बिल (Approx. ₹)</label>
                    <input type="number" id="bill" name="bill" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                </div>
                
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="usage" class="block text-sm font-medium text-gray-700">उपयोग का प्रकार</label>
                        <select id="usage" name="usage" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                            <option value="Home">Home (घरेलू)</option>
                            <option value="Business">Business (व्यावसायिक)</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <label for="visit" class="block text-sm font-medium text-gray-700">Free Site Visit?</label>
                        <select id="visit" name="visit" required class="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-primary focus:border-primary transition duration-150">
                            <option value="Yes">Yes (हाँ)</option>
                            <option value="No">No (नहीं)</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" id="whatsapp-btn" class="cta-button w-full inline-flex items-center justify-center bg-secondary text-gray-900 text-xl font-black py-4 rounded-full shadow-2xl hover:bg-amber-300 disabled:opacity-50">
                    <i class="fab fa-whatsapp mr-3"></i> ✅ Get Quote on WhatsApp
                </button>
                <p id="form-message" class="text-center text-base font-semibold mt-3 hidden"></p>
            </form>

            <!-- OPTION 2: Direct Payment/Booking Button (Razorpay) --><div class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl text-center border-t-8 border-primary mt-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">✨ ₹1000 में अपनी बुकिंग सुनिश्चित करें ✨</h3>
                <p class="text-gray-700 mb-6">
                    मात्र **₹1000** का टोकन अमाउंट देकर अपनी प्राथमिकता बुकिंग कंफर्म करें। यह राशि आपके फाइनल सिस्टम बिल में **पूरी तरह एडजस्ट** हो जाएगी।
                </p>
                
                <!-- Razorpay Button Integration --><div class="razorpay-form">
                    <form>
                        <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_RcUsi38cv6CPq2" async> </script>
                    </form>
                </div>
                <!-- End Razorpay Button --></div>
            
        </div>
    </section>

    <!-- 9. FINAL CTA (BOTTOM BANNER) --><section id="final-cta" class="bg-secondary py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                अपनी छत को बिजलीघर बनाएं ⚡ आज ही सोलर अपनाएं!
            </h2>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:8989024411" class="cta-button inline-flex items-center justify-center bg-primary text-white text-xl font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-emerald-700">
                    <i class="fas fa-phone mr-2"></i> 📞 Call Now: 89890 24411
                </a>
                <a href="https://wa.me/918989024411?text=मैं%20अपनी%20छत%20को%20बिजलीघर%20बनाना%20चाहता%20हूँ" target="_blank" class="cta-button inline-flex items-center justify-center bg-white text-primary border-2 border-primary text-xl font-bold py-3 px-8 rounded-full shadow-2xl hover:bg-gray-100">
                    <i class="fab fa-whatsapp mr-2"></i> 💬 Get WhatsApp Quote
                </a>
            </div>
        </div>
    </section>

    <!-- 10. FOOTER SECTION --><footer class="bg-gray-800 text-white py-10 border-t-4 border-primary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <!-- Col 1: Logo & Tagline --><div>
                <div class="flex items-center space-x-2 mb-3">
                    <div class="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-black text-white text-lg">A</div>
                    <span class="text-xl font-extrabold text-primary">Aashi Green Energy</span>
                </div>
                <p class="text-sm italic mb-2 text-gray-400">“आपकी बचत – हमारा संकल्प 🌞”</p>
                <p class="text-xs text-gray-500">© 2025 Aashi Green Energy Pvt. Ltd. | Tata Solar Partner</p>
            </div>
            
            <!-- Col 2: Contact & Service Area --><div>
                <h4 class="font-bold text-lg mb-3 border-b border-primary pb-1">हमसे संपर्क करें</h4>
                <p class="text-sm mb-1 text-gray-300"><i class="fas fa-map-marker-alt text-secondary mr-2"></i> Near Krishi Upaj Mandi, Jhabua – 457661</p>
                <p class="text-sm mb-1 text-gray-300"><i class="fas fa-phone text-secondary mr-2"></i> **Call:** 89890 24411</p>
                <p class="text-sm mb-1 text-gray-300"><i class="fab fa-whatsapp text-secondary mr-2"></i> **WhatsApp:** 89890 24411</p>
            </div>

            <!-- Col 3: Service Area --><div>
                <h4 class="font-bold text-lg mb-3 border-b border-primary pb-1">सेवा क्षेत्र</h4>
                <ul class="text-sm space-y-1 text-gray-300">
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Jhabua & Alirajpur</li>
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Dahod (Gujarat Border)</li>
                    <li><i class="fas fa-caret-right text-secondary mr-2"></i> Meghnagar, Petlawad</li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- JavaScript for Firebase and Form Submission (unchanged functionality) --><script type="module">
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
            const whatsappNumber = '918989024411'; // NEW Official number
            
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
