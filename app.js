/**
 * AuraMatch // Architectural Core Application Layer
 * Handle robust theme profiles, clean pseudo-3D matrix operations,
 * cryptographic-style deterministic mathematical algorithms, and view states.
 */
const firebaseConfig = {
  apiKey: "AIzaSyALP-PRVLTDX01bfW_Hr10u4NSg_oBkJkE",
  authDomain: "auramatch-db.firebaseapp.com",
  projectId: "auramatch-db",
  storageBucket: "auramatch-db.firebasestorage.app",
  messagingSenderId: "898546809864",
  appId: "1:898546809864:web:e0e96b75f468fa5462e5bd"
};

// Firebase ko initialize karein
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    
    // Cache Application Elements Matrix
    const elements = {
        themeToggle: document.getElementById('theme-toggle'),
        form: document.getElementById('love-form'),
        name1Input: document.getElementById('name1'),
        name2Input: document.getElementById('name2'),
        viewInput: document.getElementById('view-input'),
        viewLoading: document.getElementById('view-loading'),
        viewResults: document.getElementById('view-results'),
        liveCounter: document.getElementById('live-counter'),
        loadingStatus: document.getElementById('loading-status'),
        finalPercentage: document.getElementById('final-percentage'),
        progressRingBar: document.getElementById('progress-ring-bar'),
        resultNames: document.getElementById('result-names-heading'),
        tierTitle: document.getElementById('tier-title'),
        tierDescription: document.getElementById('tier-description'),
        btnReset: document.getElementById('btn-reset'),
        toast: document.getElementById('toast-notification'),
        toastMessage: document.getElementById('toast-message'),
        tiltCards: document.querySelectorAll('[data-tilt-target]')
    };

    // Constant System Configs
    const LOADING_DURATION = 2500; // Exact millisecond constraints
    const CIRCLE_RADIUS = window.innerWidth <= 480 ? 75 : 95;
    const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

    // Result Tier Metric System Struct
    const CORE_TIERS = [
        { min: 90, title: "Quantum Soulmates 🌌", desc: "Your affinity aura is absolute. Mathematical optimization algorithms confirm an unbreakable cosmological entanglement." },
        { min: 75, title: "Resonant Sparks 🔥", desc: "Exceptional dynamic pairing. Strong internal attraction vectors detected with highly compatible communication matrices." },
        { min: 60, title: "Harmonic Baseline ☕", desc: "A stable, cozy connection layer. Positive resonance coefficients suggest room for beautiful collaborative growth." },
        { min: 45, title: "Unpredictable Anomalies 🌪️", desc: "High entropic dispersion. While initial alignments challenge baseline vectors, volatile metrics make for thrilling discoveries." }
    ];

    // Status strings processed inside calculating view loop
    const MATRIX_LOG_MESSAGES = [
        "Normalizing character vectors...",
        "Executing SHA-256 character offset additions...",
        "Evaluating behavioral compatibility nodes...",
        "Finalizing algorithmic affinity maps..."
    ];

    /* ==========================================================================
       01. GLOBAL THEME ENGINE CONTROLLER
       ========================================================================== */
    const initThemeEngine = () => {
        const savedTheme = localStorage.getItem('auramatch-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        elements.themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('auramatch-theme', newTheme);
        });
    };

    /* ==========================================================================
       02. PSEUDO-3D PARALLAX INTERACTION CARD CONTROLLER
       ========================================================================== */
    const initParallaxTilt = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        elements.tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--my', `${(y / rect.height) * 100}%`);

                const rotateX = ((y / rect.height) - 0.5) * -20;
                const rotateY = ((x / rect.width) - 0.5) * 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                card.style.setProperty('--mx', '50%');
                card.style.setProperty('--my', '50%');
            });
        });
    };

    /* ==========================================================================
       03. INPUT PROCESSING & TOAST SYSTEM VALIDATION
       ========================================================================== */
    const displayToast = (message) => {
        elements.toastMessage.textContent = message;
        elements.toast.classList.remove('hidden');
        
        clearTimeout(elements.toast.timeoutId);
        elements.toast.timeoutId = setTimeout(() => {
            elements.toast.classList.add('hidden');
        }, 4000);
    };

    const validateInputs = (n1, n2) => {
        const cleanN1 = n1.trim();
        const cleanN2 = n2.trim();
        
        if (!cleanN1 || !cleanN2) {
            displayToast("Core metrics incomplete. Enter valid entity identifications.");
            return false;
        }

        const nameRegex = /^[A-Za-z\s\-'\u00C0-\u017F]+$/;
        if (!nameRegex.test(cleanN1) || !nameRegex.test(cleanN2)) {
            displayToast("Calculation failure. Names cannot contain numbers or special operators.");
            return false;
        }

        return { val1: cleanN1.toLowerCase(), val2: cleanN2.toLowerCase() };
    };

    /* ==========================================================================
       04. DETERMINISTIC RESONANCE ENGINE ALGORITHM
       ========================================================================== */
    const computeLoveScore = (name1, name2) => {
        const combinedString = [name1, name2].sort().join('');
        
        let hashValue = 0;
        const mathematicalModifier = 769;

        for (let i = 0; i < combinedString.length; i++) {
            hashValue += combinedString.charCodeAt(i) * (i + 1) * mathematicalModifier;
        }

        const minPercentage = 45;
        const maxPercentage = 100;
        const range = maxPercentage - minPercentage;
        
        const finalCalculatedScore = minPercentage + (hashValue % (range + 1));
        return finalCalculatedScore;
    };

    /* ==========================================================================
       05. SYSTEM VIEW TRANSFORM CONTROL STATE HANDLERS
       ========================================================================== */
    const changeViewState = (currentView, nextView) => {
        currentView.classList.remove('active');
        currentView.classList.add('hidden');
        
        nextView.classList.remove('hidden');
        setTimeout(() => {
            nextView.classList.add('active');
        }, 50);
    };

    const processLoadingSequence = (targetPercent, onCompleteCallback) => {
        const startTime = performance.now();
        
        const loggingInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * MATRIX_LOG_MESSAGES.length);
            elements.loadingStatus.textContent = MATRIX_LOG_MESSAGES[randomIndex];
        }, 600);

        const updateAnimationCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const operationalProgress = Math.min(elapsedTime / LOADING_DURATION, 1);
            
            const easeOutCurve = 1 - Math.pow(1 - operationalProgress, 3);
            const currentCount = Math.floor(easeOutCurve * targetPercent);
            
            elements.liveCounter.textContent = currentCount;

            if (operationalProgress < 1) {
                requestAnimationFrame(updateAnimationCounter);
            } else {
                clearInterval(loggingInterval);
                onCompleteCallback();
            }
        };

        requestAnimationFrame(updateAnimationCounter);
    };

    const configureAndDisplayResults = (n1, n2, percentage) => {
        // FIXED BUG: Clean capitalization mapping array
        const cap = str => str.split(' ').map(w => w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : '').join(' ');
        elements.resultNames.textContent = `${cap(n1)} & ${cap(n2)}`;
        
        elements.finalPercentage.textContent = percentage;

        const circleRadiusCurrent = window.innerWidth <= 480 ? 75 : 95;
        const circumferenceCurrent = 2 * Math.PI * circleRadiusCurrent;
        
        elements.progressRingBar.style.strokeDasharray = `${circumferenceCurrent} ${circumferenceCurrent}`;
        
        const graphicOffset = circumferenceCurrent - (percentage / 100) * circumferenceCurrent;
        
        setTimeout(() => {
            elements.progressRingBar.style.strokeDashoffset = graphicOffset;
        }, 150);

        const standardTier = CORE_TIERS.find(tier => percentage >= tier.min) || CORE_TIERS[CORE_TIERS.length - 1];
        
        elements.tierTitle.textContent = standardTier.title;
        elements.tierDescription.textContent = standardTier.desc;
    };

    /* ==========================================================================
       06. CENTRAL APPLICATION EXECUTIVE HOOKS
       ========================================================================== */
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rawN1 = elements.name1Input.value;
        const rawN2 = elements.name2Input.value;
        
        const processingOutputs = validateInputs(rawN1, rawN2);
        if (!processingOutputs) return; 

        const lovePercentResult = computeLoveScore(processingOutputs.val1, processingOutputs.val2);
        
        // --- FIREBASE DATA INSERTION START ---
        db.collection("love_entries").add({
            user_name: rawN1.trim(),
            partner_name: rawN2.trim(),
            percentage: lovePercentResult,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            console.log("Data successfully saved with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error saving data to Firebase: ", error);
        });
        // --- FIREBASE DATA INSERTION END ---

        changeViewState(elements.viewInput, elements.viewLoading);
        
        processLoadingSequence(lovePercentResult, () => {
            configureAndDisplayResults(rawN1.trim(), rawN2.trim(), lovePercentResult);
            changeViewState(elements.viewLoading, elements.viewResults);
        });
    });

    elements.btnReset.addEventListener('click', () => {
        elements.form.reset();
        elements.progressRingBar.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
        elements.liveCounter.textContent = '0';
        
        changeViewState(elements.viewResults, elements.viewInput);
    });

    initThemeEngine();
    initParallaxTilt();
});